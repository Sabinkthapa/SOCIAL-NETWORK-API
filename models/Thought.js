const { timeStamp } = require('console');
const {Schema , model} = require ('mongoose');
const reactionSchema =require('./Reaction')


//schema to create thought model
const thoughtSchema = new Schema (
    {
        thoughtText :{
            type: String,
            required: true,
            maxlength: 280,
        },
        createAt: {
            type: Date,
            default: Date.now,
            get:(timeStamp) => timeStamp.toISOString(),
        },

        Reaction:[reactionSchema], //embedded 
        //referencing the user model
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        toJSON: {
            getters:true,
        },
    }
);

//create a virtual reactionCount that retrieves the length 
// of the thought's reactions,and is not stored in the database but calculated when accessed
thoughtSchema.virtual ('reactionCount').get(function() {
    return this.reactions.length;
});
// create the model from the schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

