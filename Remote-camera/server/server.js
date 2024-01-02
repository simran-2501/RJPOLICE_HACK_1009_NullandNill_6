const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const url = 'mongodb+srv://<username>:<password>@cluster0.kkxdzty.mongodb.net/'
// Connect to MongoDB using async/await syntax
async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

// Call the connectToDatabase function before starting the server
connectToDatabase();

// Create a schema for the location data
const locationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  type: String
});

// Create a model based on the schema
const Location = mongoose.model('Location123', locationSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/endpoint', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const type = "camera"
    // Create a new location document
    const newLocation = new Location({
      latitude,
      longitude,
      type
    });

    // Save the location document to the database
    await newLocation.save();

    console.log('Location saved:', { latitude, longitude , type});

    res.json({ success: true, message: 'Location received and saved successfully' });
  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ success: false, message: 'Error saving location' });
  }
});

app.get('/api/locations', async (req, res) => {
    try {
      const locations = await Location.find();
      console.log(locations);
      res.setHeader('Content-Type', 'application/json');
      res.json(locations);
    } catch (error) {
      console.error("Error fetching locations:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

