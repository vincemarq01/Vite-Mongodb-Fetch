import express, {Express, Response, Request} from "express";
import { MongoClient } from "mongodb"


const port = process.env.PORT || 3000;
const uri = "mongodb+srv://vincemarqmontilla:ztcMpBBGGuvpy2A9@customer.nvnbfnw.mongodb.net/?retryWrites=true&w=majority&appName=Customer";
const app: Express = express();
// const client = new MongoClient(uri);


app.get("/api", async (req:Request, res:Response) =>{

try {

 const client = await MongoClient.connect(uri)
  console.log("Connected to MongoDB");

    // You can now use the client object to interact with the database
    // Access the database and collection
    const db = client.db('Customers');
    const collection = db.collection('Customers');
    const data = await collection.find({}).toArray();
  
    // iterate code goes here
   
    // Display the retrieved data
    // Query the collection to find all documents
     console.log("Data from MongoDB:", data);
 
     // When you're done with the database, remember to close the connection
    // await client.close();
      res.json(data);

  //  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  //   const response =  await fetch(apiUrl, {
  //       method: 'GET',
  //       mode: 'cors',
  //       headers: { 'Content-Type': 'application/json' }
  //     }).then(res => res.json());

  //     return res.json(response);
 
  await client.close();
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  res.status(500).send("Error connecting to MongoDB");
}


});




app.listen(port, ()=> {console.log(`Server started on port ${port}`)})