const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

app.post("/upload", async (req, res) => {
  try {
    const image = req.body.image;
    const name = req.body.name;

    const uri = `mongodb+srv://hrishikesh17:${encodeURIComponent("Hr#172003")}@cluster0.p4htmk9.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const database = client.db("SunmicaDataBase");
    const collection = database.collection("AllSunmicas");

    const document = { name: name, image: image };
    const result = await collection.insertOne(document);

    console.log("Document inserted with _id:", result.insertedId);

    res.status(200).send("Image uploaded successfully");
  } catch (err) {
    console.error("Failed to upload image", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
