const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const linkDatabase = require("./settings/db");
const slots = require("./routes/slots");
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