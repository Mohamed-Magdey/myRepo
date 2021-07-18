const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const fetch = require("node-fetch");
const base_api_url = "https://api.meaningcloud.com/sentiment-2.1";
const app = express();


// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(express.static("dist"));

const { TRUE } = require("node-sass");

console.log(__dirname);
app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/addURL",  (req, res) => {
  try {
    const wantedUrl = req.body.bodyData.url;
    const url = `${base_api_url}?key=${process.env.API_KEY}&url=${wantedUrl}&lang=en`;

    fetch(url)
    .then(res => res.json())
    .then(json => res.send(json));
    
  } catch(e) {
    console.log(e)
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log(" app listening on port 8081!");
});
