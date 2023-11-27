
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
async getSingleuser(req , res) {
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




    
}






