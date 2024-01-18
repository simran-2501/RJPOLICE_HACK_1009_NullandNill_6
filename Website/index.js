const express = require("express");
const app = express();
const cors = require("cors");
var firebase = require("firebase");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const config = {
    apiKey: "AIzaSyBze_bF98yznonUIpm3b2uMJwCMs4_JVXk",
    authDomain: "safelens-d12fa.firebaseapp.com",
    databaseURL: "https://safelens-d12fa-default-rtdb.firebaseio.com",
    projectId: "safelens-d12fa",
    storageBucket: "safelens-d12fa.appspot.com",
    messagingSenderId: "223895901785",
    appId: "1:223895901785:web:d17030466baa8f2c508348"
  };

firebase.initializeApp(config);

app.get("/api/locations", function (req, res) {
    console.log("HTTP Get Request");
    var userReference = firebase.database().ref("/locations/");
  
    userReference.on(
      "value",
      function (snapshot) {
        console.log(snapshot.val());
        res.json(snapshot.val());
        userReference.off("value");
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
      }
    );
  });

// app.put("/:id", function (req, res) {
// console.log("HTTP Put Request");

// var id = req.params.id;
// var title = req.body.title;
// var description = req.body.description;
// var author = req.body.author;

// var referencePath = "/Data/" + id + "/";
// var userReference = firebase.database().ref(referencePath);
// userReference.update(
//     { Id: id, Title: title, Description: description, Author: author },
//     function (error) {
//     if (error) {
//         res.send("Data could not be saved." + error);
//     } else {
//         res.send("Data update successfully.");
//     }
//     }
// );
// });

app.post("/endpoint/", function (req, res) {
console.log("HTTP POST Request");

var latitude = req.body.latitude;
var longitude = req.body.longitude;
var type = 'camera';
var id = Math.random().toString(36).substr(2, 9);

var referencePath = "/locations/" + id + "/";
var userReference = firebase.database().ref(referencePath);
userReference.set(
    { 'latitude': latitude, 'longitude': longitude, 'type': type },
    function (error) {
    if (error) {
        res.send("Data could not be saved." + error);
    } else {
        res.json({ success: true, message: 'Location received and saved successfully' });
    }
    }
);
});

// app.delete("/:id", function (req, res) {
// console.log("HTTP DELETE Request");
// console.log("HTTP POST Request");

// var id = req.params.id;

// var referencePath = "/Data/" + id;
// var userReference = firebase.database().ref(referencePath);
// userReference.remove().then(function (error) {
//     if (error) {
//     res.send("Data not be delete." + error);
//     } else {
//     res.send("Data delete successfully.");
//     }
// });
// //todo
// });

app.listen(port, function () {
  console.log("Server Running on port http://localhost:${port}");
});