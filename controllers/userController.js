
const { User, Thought } = require('../models')

module.exports = {
//get all users 

async getUsers(req, res) {
    try {
        const users = await User.find();
        const usersObj = {
            users,
        };
        res.json(usersObj);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},

//get a single user
async getSingleUser(req , res) {
    try {
        const user = await User.findOne({_id: req.params.userId})
        .select('-__v')

        if (!user) {
            return res.status(404).json ({message : " no user found"});
        }
        res.json({
            user,
        });
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // create a user

    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
     // update a user

     async updateUser (req , res) {
        try {
            const updateUser = await  User.findOneAndUpdate (
                {_id: req.params.userId},
                {$set: req.body}, // specifies the data in req body
                {new: true} //returns updated user
            );
            if (!updateUser) {
                return res.status(404).json({message:'no user with this id!'});
            }
            res.json(updateUser);
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
     },

     //delete the user along with thoughts

     async deleteUser (req, res) {
        try {
            const userId = req.params.userId;

            const user = await User.findbyId(userId);
            if (!user) {
                return res.status(404).json({message:'no user with this id!'});
            }

            //delete user thoughts 
            await Thought.deleteMany({userId: userId});

            //Delete user 
            await User.findByIdAndDelete(userId);

            res.json({
                message: `user and associated thoughts deleted`,
            });
        } catch(err) {
            console.log(err);
            return res.status(500).json({message: 'Error deleting user and thoughts'});
        }
     },

     // add friend

     async addFriend(req, res) {
        try {
            const friendId= req.body.friendId;
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet : {friends: friendId}}, //$addtoset operator adds a value to an array unless the value is already present
                {new:true}
            );
            if (!user) {
                return res.status(404).json({message:'no user with this id!'});
            }
            res.json({
                message:`Friend added`,
            });
        } catch(err) {
            console.log(err);
            return res.status(500).json(err)
        }
     },

     //remove friend

     async removeFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId}, 
                {$pull: { friends: req.params.friendId}}, //removes from friendID from the friends array using $pull
                {runValidators: true, new: true} //return updated documents
            );
            if (!user) {
                return res.status(404).json({message: "No user with that ID"});
            }
            res.json ( {
                message: `friend deleted`,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
     },
};






