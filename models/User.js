// User Model

const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {

        },
        email: {

        },
        thoughts: {

        },
        friends: {

        },
    }
);

// Virtual to retrieve the length of user's 'friends' array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
