const mongoose = require('mongoose');

const slotNameSchema = mongoose.Schema({
    slotName: {
        type: String,
        unique: true
    },
    vehicleType: {
        type: String,
        required: [true, "Vehicle type is required"]
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    capacity: {
        type: Number,
        required: [true, "Capacity is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    }
});

const slotSchema = new mongoose.Schema({
    floorName: {
        type: String,
        required: [true, "Floor name required"]
    },
    wingName: {
        type: String,
        required: [true, "Wing name is required"]
    },
    slots: [slotNameSchema],
    isFullyOccupied: {
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

module.exports = mongoose.model('Slot', slotSchema);

// const mongoose = require('mongoose');

// const slotSchema = new mongoose.Schema({
//     floorName: {
//         type: String,
//         required: true
//     },
//     wingName: {
//         type: String,
//         required: true
//     },
//     slotName: {
//         type: String,
//         required: true
//     },
//     isSlotAvailable: {
//         type: Boolean,
//         default: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     capacity: {
//         type: Number,
//         required: true
//     },
//     isFullyOccupied: {
//         type: Boolean,
//         default: false
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     }
// }, { timestamps: true });

// const Slot = mongoose.model('Slot', slotSchema);

// module.exports = Slot;
