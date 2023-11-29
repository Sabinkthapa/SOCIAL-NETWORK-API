const connection =require('../config/connection');
const {User, Thought} = require('../models');
const {getRandomName,getRandomArrItem,
    getRandomThought,getRandomReaction,
}  = require('./data')

const seedDatabase = async () => {
    await connection;
    await User.deleteMany({}); //delete existing user 
    await Thought.deleteMany({});//delete existing thought

    const users = [];
    //add users to the user array
    for (let i=0; i<7; i++) {
        const name =getRandomName();
        users.push({
            firstName: name.split(' ')[0],
            lastname: name.split(' ')[1],
        });
    }

    //insert user in db and get their IDs

    const createdUsers = await User.insertMany(users);
    const userIds = createdUsers.map((user)=>user.id);

    //Generating thoughts and reactions
    
    const thoughts = []; //empty arry to store thoughts

    const allUsers = await User.find({});
    allUsers.forEach((user) => {
        const username = `${user.firstName} ${user.lastname}`;
        for (let i=0; i <2; i++){
            const newThought =getRandomThought();
        newThought.userId = user._id;
        newThought.username = username;
        
        const thoughtsReactions =[];
        for (let j=0; j < Math.floor(Math.random() *2); j++ ) {
            const newReaction =getRandomReaction();
            newReaction.username =username ;
            thoughtsReactions.push(newReaction);
        }

        newThought.reactions = thoughtsReactions;
        thoughts.push(newThought);
    }
    });
    // insert generateds thoughts into the collection thought
await Thought.collection.insertMany(thoughts);

//udating users with their thoughts

thoughts.forEach(async (thought) => {
    await User.findByIdAndUpdate(thought.userId, { //updates the User document that matches the thought.userid
      $push: { thoughts: thought._id }, //pushes thought id into thoughts array field of the user document
    });
  });

  //adding friends in each user

  for ( const user of createdUsers){
    //filtering our current user for the list of the user
    const friendIds = userIds.filter (
        (id) => id.toString() !== user._id.toString()
    );
    const mixedFriends = friendIds.sort(()=> 0.5 -Math.random());
    const selectedFriends = mixedFriends.slice(0,Math.floor(Math.random()*7));
    await User.findByIdAndUpdate
    (user._id,{$set: {friends:selectedFriends},
    });
  }
console.table(users);
console.table(thoughts);
console.log('All data seeded!');
process.exit(0);
};
seedDatabase().catch(console.error);