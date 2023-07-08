const productCollection = require("../collections/productCollection/productCollection");
//post product data 
const postProduct = async (req, res) => {
    const data = req.body;
    const result = new productCollection(data);
    try {
      const savedItem = await result.save();
     return res.status(201).send({data:savedItem});
    } catch (error) {
      return res.status(400).json({ message: error.message });
    } 
  };

  //get all  products data

  const getAllProducts = async (req,res) => {
   const result = await productCollection.find(); 
   res.status(201).send({data:result}) ;
  }
 
  //get product by id

  const getProduct = async (id, req ,res) => {
  const filter =   {_id: id} ;
  const result = await productCollection.findById(filter);
  res.status(201).send(result) ;
  }
  module.exports = { postProduct, getAllProducts, getProduct};
