require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//require data 
const {mongodbDatabase} = require("./db/db") ;
const { postProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require("./controllers/products");
const port = process.env.PORT || 3021;

app.use(cors());
app.use(express.json());

mongodbDatabase() ;

app.post("/post-product", (req,res) => {
  postProduct(req, res) ;
});

app.get("/get-products", (req, res)=>{
getAllProducts(req , res)
});

app.get("/get-product/:id", (req, res) => {
const id = req.params.id ;
getProduct(id, req, res) ;
})

app.put("/updateProduct/:id", (req, res) => {
  updateProduct(req, res) ;
})

app.delete("/deleteProduct/:id", (req, res) => {
  deleteProduct(req, res) ;
})

app.listen(port, (req, res) => {
  console.log('Your server running on port => ' + port);
});

app.get("/", (req, res) => {
    res.send("Hello world !!");
})