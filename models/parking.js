const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
    vehicleNo: {
        type: String,
        required: [true, "number required"]
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
    checkIn: {
        type: Date, // Change to Date
        required: [true, "check in time is required"]
    },
    checkOut: {
        type: Date, // Change to Date
        required: [true, "check out time is required"]
    },
    totalHours: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    paidStatus: {
        type: String,
        enum: ["Paid", "Unpaid"]
    },
    paymentMode: {
        type: String,
        enum: ["Cash", "UPI", "Netbanking"]
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Parking", parkingSchema);
