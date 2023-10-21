import express from 'express';
import {connectToDatabase} from './Database/connection.mjs'; 
import bodyParser from 'body-parser';
const app = express();
import { getallproducts } from './Controllers/productController.mjs';

//This function tries to connect to the Database
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
          {"message": "Welcome to DressStore Application"});
    });
    console.log('Server is running... http://localhost:5000');
});

//This method calls getallproducts function which retrieves all the data from the database and displays 
app.get('/api/products',getallproducts)



