const express = require("express");
const router = express.Router()

const { getSlots, getSingleSlot, createSlot, updateSlot, deleteSlot } = require("../controllers/slots");

router.route("/").get(getSlots);
router.route("/:id").get(getSingleSlot).put(updateSlot).delete(deleteSlot)
module.exports = router;