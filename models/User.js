const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction')

// Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
            //trimmed?
        },
        email: {
            type: String,
            required: true,
            unique: true
            //email validation
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
userSchema.virtual('friendsCount').get(function () {
    return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;

