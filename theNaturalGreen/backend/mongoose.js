const mongoose = require("mongoose");
const URL = "mongodb://localhost:27018/theNaturakGreenAddProduct"


mongoose.connect(URL)

const db = mongoose.connection;


db.on("connected", () => {
    console.log("MOngoose is Connected");
})

db.on("disconnected", () => {
    console.log("mongoose is disconnected");
})

db.on("error", (err) => {
    console.log(err);
})