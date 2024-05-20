const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const linkDatabase = require('./settings/db');
const errorHandler = require('./middleware/errorHandler')
const slots = require('./routes/slots');
const roles = require('./routes/roles');
const permissions = require('./routes/permissions')
const auth = require('./routes/auth');
const app = express();

dotenv.config();

const port = 5000 || process.env.PORT;
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    console.log(Date.now());
    next()
})


app.use('/PMS/v1/slots', slots)
app.use('/PMS/v1/roles', roles)
app.use('/PMS/v1/permissions', permissions)
app.use('/PMS/v1/auth', auth)
app.use(errorHandler)
app.get('/', (req, res) => {
    res.send('Default Route')
})

const startServer = async () => {
    await linkDatabase();
    app.listen(port, () => {
        console.log(`pms backend is running on port ${port}`);
    })
}

startServer();