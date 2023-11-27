const { User, Thought } =require ('../models');

module.exports = {

    //get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            return res.json(thoughts)
        } catch (err) {
            console.log(err);
            return res.status(500).json (err);
        }
    },

    //get a single thought

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})
            .select('-__v');

            if (!thought) {
                return res.status(404).json({message: 'No thought with this ID'});
            }
            res.json(thought); 
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    //create thought
    async createThought(req,res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    //delete thought

    async deleteThought(req,res) {
        try {
            const thought = await Thought.findOneAndDelete({
                _id: req.params.thoughtId,
            });
            if (!thought) {
                return res.status(404).json({message: 'No thought of this id'});
            }
            await User.deleteMany({_id: {$in: thought.users}});
            res.json({message: 'Thought and associated users deleted'});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update a thought

    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {new: true}
            );
            if (!updateThought) {
                return res.status(404).json({message: "no thought with this id"});
            }
            res.json(updateThought);
        } catch (err) {
            res.status(500).json(err);       
         }
    },

    // create reaction to the thought

    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                {$push: {reactions: req.body}},
                {runValidators: true, new:true}
            );
            if (!thought) {
                return res.status(404).json({message: 'NO thought with the id'});
            }
            res.json({
                message:`Added reaction`,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // delete reaction

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: { reactions: {reactionId: req.params.reactionId}}},
                { new: true}
            );
            if (!thought) {
                return res.status(404).json({message: 'No thought with the ID'});
             }
             res.json({
                message:`Deleted reaction`,
             });
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};