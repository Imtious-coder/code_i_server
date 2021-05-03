const express = require('express');
const cors = require('cors');

const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://code_1:codei@cluster0.vx9y5.mongodb.net/code_i?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());


client.connect(err => {
    const collection = client.db("code_i").collection("info");
    console.log("database conected successfully");

    app.post("/add", (req, res) => {
        const info = req.body;
        collection.insertOne(info)
        .then(result => {
            console.log(result);
        })
    })
  });
  



app.get('/', (req, res) => {
    res.send("Server Working Perfectly");
})





app.listen(5000, () => console.log("Listening to port 5000"));