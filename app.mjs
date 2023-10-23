import express from 'express';
import { connectToDatabase } from './Database/connection.mjs';
import {
  addnewproduct,
  getallproducts,
  updateproductbyid,
  deleteproductbyID,
  deleteallproduct,
  getproductbyid,
  findproductbyname,
} from './Controllers/productController.mjs';

const app = express();
app.use(express.json());

//Function to connect to the Database
connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch((error) => {
    console.log('Error connecting to the database');
  });


app.listen(5000, () => {
  app.get('/', (req, res) => {
    res.json(
      { "message": "Welcome to DressStore Application" });
  });
  console.log('Server is running... http://localhost:5000');
});

//All the methods 
app.get('/api/products', getallproducts)
app.get('/api/products/:id', getproductbyid)
app.post('/api/products', addnewproduct)
app.put('/api/products/:id', updateproductbyid)
app.delete('/api/products/:id', deleteproductbyID)
app.delete('/api/products', deleteallproduct)
app.get('/search/:keyword', findproductbyname)



