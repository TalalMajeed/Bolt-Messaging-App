const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = function () {
    mongoose.connect("mongodb://localhost:27017/bolt", {
        useNewUrlParser: true,
    });
    mongoose.connection.on("connected", function () {
        console.log("Connected to MongoDB Database");
    });
    mongoose.connection.on("error", function (err) {
        if (err) {
            console.log("Error in Database connection: " + err);
        }
    });
    mongoose.connection.on("disconnected", function () {
        console.log("Disconnected from MongoDB Database");
    });
    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            console.log("Forced to Close the Connection to MongoDB Database");
            process.exit(0);
        });
    });
};
