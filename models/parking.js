const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema({
    vehicleNo: {
        type: String,
        required: [true, "number required"]
    },
    checkIn: {
        type: String,
        required: [true, "check in time is required"]
    },

    checkOut: {
        type: String,
        required: [true, "check out time is required"]
    },
    category: {
        type: String

    },
    rateCode: {
        type: String
    },

    rate: {
        type: Number
    },

    slot: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "slots"

    },

    totalHours: {
        type: Number

    },
    totalAmount: {
        type: Number
    },
    paymentMode: {
        type: Array,
        enum: ["cash", "credit/debit", "upi", "neft/imps"]
    },

    paidStatus: {
        type: Array,
        enum: ["pending", "in progress", "completed"]
    },

    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Roles"

    },
    isPaid: {
        type: Boolean,
        default: false
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "UserProfile"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Parking", parkingSchema);