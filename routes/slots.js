const express = require("express");
const router = express.Router()

const { 
    getSlots, 
    getSingleSlot, 
    createSlot, 
    updateSlot, 
    deleteSlot,
    getFloor,
    getWingsByFloor,
    getslotsBywing,
    updateSlots,
    getslotsById,
    updateSlotById,
    deleteSlotById
} = require("../controllers/slots");

router.route("/").get(getSlots).post(createSlot);
router.route("/:id").get(getSingleSlot).put(updateSlot).delete(deleteSlot)
router.route("/:active/floors").get(getFloor)
router.route("/:floor/wings").get(getWingsByFloor)
router.route("/:floor/:wing").get(getslotsBywing).put(updateSlots)
router.route("/floor/slot/:id").get(getslotsById).put(updateSlotById)
router.route("/slot/:floorId/:slotId").delete(deleteSlotById)
module.exports = router;