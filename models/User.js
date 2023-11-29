 const {Schema , model} =require('mongoose');
//  import {isEmail} from 'validator'

//schema to create user model
 const userSchema = new Schema (
    {
        firstName: {
            type: String,
            required:true,
            maxlength:55,
        },
        lastName: {
            type:String,
            required:true,
            maxlength:55,
        },
        thoughts: [
        {
            type:Schema.Types.ObjectId,
            ref:'Thought' //referenece to the THought model

        },
    ],
        friends: [
            {
            type:Schema.Types.ObjectId,
            ref:'User', //Reference to user Model
        },
    ],
},
    {
        toJSON: {
        getters: true,
        },
    }
 );

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;

