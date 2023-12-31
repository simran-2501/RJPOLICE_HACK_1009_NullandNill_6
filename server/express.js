const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/endpoint', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log('Received location:', { latitude, longitude });

    // You can store the location data in a database or perform other actions as needed.

    res.json({ success: true, message: 'Location received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
