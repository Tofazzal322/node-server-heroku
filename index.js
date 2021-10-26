const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express()
const port = process.env.PORT|| 7000


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n33rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('connected');
        




    }
    finally {
    //    await client.close();
    }
}
run().catch(console.dir);









app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello My  World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// user : topu6185
// pass: 0DMUJ2oGN0ULwbAE