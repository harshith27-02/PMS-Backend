const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const parkingRoutes = require('./routes/parkingRoutes');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/parkingDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/parking', parkingRoutes);

// Default Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Parking.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));