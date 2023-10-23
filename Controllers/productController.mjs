import mongoose, { mongo } from "mongoose";
import { productSchema } from "../Models/ProductSchema.mjs";

const getallproducts = async (req, res) => {
  try {
    const Product = mongoose.model("Product", productSchema);
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:");
  }
}

const getproductbyid = async (req, res) => {
  const productid = req.params.id;
  try {
    const Product = mongoose.model("Product", productSchema);
    const products = await Product.findById(productid);
    if (!products) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(products)
  }
  catch (error) {
    console.log('Error fetching products', error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const addnewproduct = async (req, res) => {
  try {
    const Product = mongoose.model("Product", productSchema);
    const newproduct = await Product.create(req.body);
    res.status(200).json(newproduct);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

const updateproductbyid = async (req, res) => {
  const productid = req.params.id;
  try {
    const Product = mongoose.model("Product", productSchema);
    const updatedproduct = await Product.findByIdAndUpdate(productid, req.body, { new: true });
    if (!updatedproduct) {
      res.status(400).json({ message: 'Product not found' });
    }
    else {
      res.status(200).json(updatedproduct);
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

const deleteproductbyID = async (req, res) => {
  const productid = req.params.id;
  try {
    const Product = mongoose.model("Product", productSchema);
    const Deleteproduct = await Product.findByIdAndDelete(productid)
    if (!Deleteproduct) {
      res.status(400).json({ message: "Error Deleting the product" })
    }
    else {
      res.status(200).json({ message: "Product deleted Sucessfully" })
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}

const deleteallproduct = async (req, res) => {
  try {
    const Product = mongoose.model("Product", productSchema);
    const Deleteproduct = await Product.deleteMany({})
    if (!Deleteproduct) {
      res.status(400).json({ message: "Error Deleting the product" })
    }
    else {
      res.status(200).json({ message: "All Products deleted Sucessfully" })
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}

const findproductbyname = async (req, res) => {
  const { keyword } = req.params;
  try {
    const Product = mongoose.model("Product", productSchema);
    const productname = await Product.find({ name: { $regex: new RegExp(keyword, "i") } });
    if (productname.length == 0) {
      res.status(404).json("Product Not Found!")
    }
    else {
      res.status(200).json(productname)
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}

export {
  getallproducts,
  getproductbyid,
  addnewproduct,
  updateproductbyid,
  deleteproductbyID,
  deleteallproduct,
  findproductbyname
}