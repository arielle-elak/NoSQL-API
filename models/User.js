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
            // Regex from https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email address.'],
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
