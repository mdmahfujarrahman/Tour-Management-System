const cors = require('cors');
const express = require('express');
require('dotenv').config();
const dotenv = require('dotenv');
require('./Database/database.connection.js');




dotenv.config();
const app = express();

// require routes
const  toursRouter = require("./Routes/tours.route.js");


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", toursRouter);
app.get("/api/v1/test", (req, res) => {
    res.send("Hello World");
});



// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));