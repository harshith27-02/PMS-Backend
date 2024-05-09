const Slots = require("../models/slots")

exports.getSlots = async (req, res) => {
    try {
        const slots = await Slots.find();
        res.status(200).json({ success: true, data: slots })

    } catch (error) {
        res.status(400).json({ success: false, error: error.message })

    }

}

exports.createSlot = async (req, res) => {
    try {
        const slot = await Slots.create(req.body);
        res.status(201).json({
            success: true,
            data: slot
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

exports.getSingleSlot = async (req, res) => {
    try {
        const slot = await Slots.find({ _id: req.params.id })
        if (!slot) {
            return res.status(400).json({
                success: false,
                data: `Slot not found for id ${req.params.id}`

            })
        }
        res.status(200).json({ success: true, data: slots })

    } catch (error) {
        res.status(400).json({ success: false, error: error.message })

    }
}

exports.updateSlot = async (req, res) => {
    try {
        let updatedSlot = await Slots.find({ _id: req.params.id })
        if (!updatedSlot) {
            return res.status(400).json({
                success: false,
                data: `Slot not found for id ${req.params.id}`

            })
        }
        updatedSlot = await Slots.findByIdAndUpdate(req.params.id,
            req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({ success: true, data: updatedSlot })

    } catch (error) {
        res.status(400).json({ success: false, error: error.message })

    }
}

exports.deleteSlot = async (req, res) => {
    try {
        let slot = await Slots.find({ _id: req.params.id })
        if (!slot) {
            return res.status(400).json({
                success: false,
                data: `Slot not found for id ${req.params.id}`

            })
        }
        slot = await Slots.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, data: slot })

    } catch (error) {
        res.status(400).json({ success: false, error: error.message })

    }
}

exports.getFloor = async (req, res) => {
    try {
        const floors = await Slots.distinct('floorName', {
            isActive: req.params.active
        })
        if (!floor) {
            return res.status(400).json({
                success: false,
                data: `Floors not found`
            })
        }
        res.status(200).json({ success: true, data: floors })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

exports.getWingsByFloor = async (req, res) => {
    try {
        const wings = await Slots.distinct('wingName', {
            floorName: req.params.floor
        })
        if (!wings) {
            return res.status(400).json({
                success: false,
                data: `Wings not found for floor ${req.params.floor}`
            })

        }
        res.status(200).json({ success: true, data: wings })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}