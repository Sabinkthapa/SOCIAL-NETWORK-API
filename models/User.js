 const {Schema , model} =require('mongoose');
 import {isEmail} from 'validator'

//schema to create user model
 const userSchema = new Schema (
    {
        username: {
            type: String,
            required:true,
            unique: true,
            trim:true,
        },
        email: {
            type: String,
            required: 'Email address is required',
            unique: true,
            validate : [isEmail, 'Invalid email'],
        },
        thoughts: {
            type:Schema.type.ObjectId,
            ref:'Thought' //referenece to the THought model

        },
        friends: {
            type:Schema.type.ObjectId,
            ref:'User', //Reference to user Model
        },

        toJSON: {
        getters: true
        },
        id:false,
    }
 );

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;

