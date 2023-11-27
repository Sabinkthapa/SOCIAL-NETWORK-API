const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,
} = require ('../../controllers/userController');
///api/users
router.route('/').get(getUsers).post(createUser);

// api/users/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// api/users/:UserId
router.route('/:userId').get(getSingleUser).put(updateUser);

///api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

//  /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports =router;


//get all users
//get a single user by _id
//post a new user
//put to update a user by its _id,
//delete to remove user by its _id

// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id