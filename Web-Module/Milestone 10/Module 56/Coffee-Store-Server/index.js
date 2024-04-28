const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;



app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    withCredentials: true,
  }
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coffee Making Server is Running')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cd6vky8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//const uri = "mongodb+srv://<username>:<password>@cluster0.cd6vky8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeeCollections = client.db("insertDB").collection("coffee");
    const userCollections = client.db("insertDB").collection("user");


    app.get('/coffee', async (req, res) => {
      const cursor = coffeeCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollections.findOne(query);
      res.send(result);
    })

    app.post('/coffee', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollections.insertOne(newCoffee);
      res.send(result)
    })

    app.put('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          name: updatedCoffee.name,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo_url: updatedCoffee.photo_url
        }
      }
      const result = await coffeeCollections.updateOne(filter, coffee, options)
      res.send(result)
    })

    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollections.deleteOne(query);
      res.send(result);
    })

    //user relatesd apis

    app.get('/user', async(req,res)=>{
      const cursor = userCollections.find();
      const users = await cursor.toArray();
      res.send(users)
    })
    app.post('/user', async(req,res)=>{
      const user = req.body;
      console.log(user);
      const result = await userCollections.insertOne(user);
      res.send(result)
    })
    app.patch('/user',async(req,res)=>{
      const user = req.body;
      const filter = {email:user.email}
      const updateDoc = {
        $set:{
          lastLoggedAt : user.lastLoggedAt
        }
      }
      const result = await userCollections.updateOne(filter,updateDoc)
      res.send(result)
    })

    app.delete('/user/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const result = await userCollections.deleteOne(query);
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Coffee Making Server is Running at ${port}`);
})