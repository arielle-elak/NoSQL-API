// User Model

const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: //TODO,
        },
        thoughts: [

        ]

        },
        friends: [

        ],
    },
);

// Virtual to retrieve the length of user's 'friends' array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
