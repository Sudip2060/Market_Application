import mongoose from "mongoose";
import { productSchema } from "../Models/ProductSchema.mjs";


const getallproducts = async (req,res)=>{
try{
    const Product = mongoose.model("Product", productSchema); 
    const products = await Product.find({});
    res.json(products); 
  } catch (error) {
    console.error("Error retrieving products:", error);
  } finally {
    mongoose.disconnect();
  }
}
export {getallproducts};