const express = require('express');
const dotenv = require("dotenv").config();
const dns = require('dns/promises');
dns.setServers(['8.8.8.8','8.8.4.4']);

const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection.js');


const app = express();

const PORT =process.env.PORT;

connectDB();


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// WE STOPPED THE VIDEO AT TIMESTAMP 49:53 WHILE GETTING THE CONTROLLER FUNCTIONS TO EDIT THE DATABASE ACCORDINGLY 
