const express = require('express');
const app = express();


const cors = require('cors')
//Enable Cross Origin resource Sharing
app.use(cors());


//Welcome Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Marketplace store application' });
  });


//Assign the port number to a variable
  const port = 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });   




