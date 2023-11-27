// const { timeStamp } = require('console');
const { Schema , Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type:Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
        },
        text: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type:Date,
            default : Date.now,
            get:(timeStamp => timeStamp.toISOString()),
        },
    });
    module.exports = reactionSchema;