        //importing the required modules for mongodb including the MongoClient Class
        import mongo, { MongoClient } from 'mongodb';

        //Define the connection string for Mongodb
        const connectionstring = 'mongodb+srv://admin:admin@admin.bby89at.mongodb.net/?retryWrites=true&w=majority';

        //Create a new instance of the mongoclient using the connection string
        const client = new MongoClient(connectionstring);
        let connstatus;


        try{
            //Establishing a connection with the Mongodb database
            connstatus = await client.connect();
            console.log("Database is connected Sucessfully")
        }
        catch (er){
                console.log(er);
        }

        
       // Define the collection name
        const collectionName = 'Product';

        // Access the "product" collection
        const db = client.db('Marketplace');
        const productCollection = db.collection(collectionName);    

      


