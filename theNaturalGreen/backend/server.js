const express = require("express");
const app = express()
const port = 8080;
const db = require("./mongoose");
const Product = require("./productaddschema")
const cors = require("cors");
app.use(express.json())
app.use(cors());


app.get("/", (req, res) => {
    res.send("Server is live")
})

app.post("/addProduct", async (req, res) => {
    try {
        const data = req.body;
        const newProduct = new Product(data);
        const savedData = await newProduct.save();
        console.log("Saved ✅");
        res.status(200).json(savedData)
    } catch (err) {

        res.status(500).json(`interal Server Error ${err}`)
    }
})
app.get("/backeddata", async (req, res) => {
    try {
        const find = await Product.find();
        res.status(200).json(find);
    }
    catch (error) {
        res.status(500).json(error);
    }
})
app.listen(port, () => {
    console.log(`Sever is live on port ${port}`);
})