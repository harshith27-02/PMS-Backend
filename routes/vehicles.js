const express = require('express');
const router = express.Router();
//const Vehicle = require('../models/vehicle');
const ParkingEntry = require('../models/parkingEntry');

router.post('/parking', async (req, res) => {
  
  const { plateNumber, category, rateCode, rate ,checkinTime, checkoutTime, totalHours, totalAmount, paidStatus, paymentMode } = req.body;


  try {
    console.log('Received data:', req.body);
    const newEntry = new ParkingEntry({
      plateNumber,
      category,
      rateCode,
      rate,
      checkinTime: new Date(checkinTime),  
      checkoutTime: new Date(checkoutTime), 
      totalHours,
      totalAmount,
      paidStatus,
      paymentMode
    });

    const entry = await newEntry.save();
    res.status(201).json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/parking', async (req, res) => {
  try {
    const entries = await ParkingEntry.find();
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
