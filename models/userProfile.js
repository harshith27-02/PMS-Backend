const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "name required"],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, "Mobile number is required"]
    },
    dateOfJoining: {
        type: String

    },
    address: {
        type: String,
        maxLength: [50, "cannot be more than 50 characters"]
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Roles"

    },
    identityProof: {
        type: String,
        required: true
    },
    isProfileCompleted: {
        type: Boolean,
        default: false

    },

    isActive: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("UserProfile", userSchema);