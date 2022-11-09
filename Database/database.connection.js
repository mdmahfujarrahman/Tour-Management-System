const mongoose = require("mongoose");
    const db_url = process.env.DB_URL;
    mongoose
        .connect(db_url)
        .then(() => {
            console.log("connection is successful");
        })
        .catch((error) => {
            console.log("connection failed: " + error);
        });