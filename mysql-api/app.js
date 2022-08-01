const express = require("express");
const app = express();
const sequelize = require("./database");
const Product = require("./Product");

app.get("/products",async (req,res)=>{
    const allProducts = await Product.findAll();
    res.status(200).json(allProducts)
})

app.listen(8081, async () => {
  await sequelize.sync();
  console.log("Server is up and running");
});
