const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const base_api_url = "https://api.meaningcloud.com/sentiment-2.1";
const app = express();
app.use(express.json());
app.use(express.static("dist"));
// app.use(cors());
const cors = require("cors");
const { TRUE } = require("node-sass");
const corsOptions = {
  origin: true,
  maxAge: 3600,
  optionsSuccessStatus: 200,
  credentials: true,
  origin: `${base_api_url}?key=${process.env.API_KEY}`,
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  preflightContinue: true,
};
console.log(__dirname);
app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log(" app listening on port 8081!");
});
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.options("/addURL", cors(corsOptions));
app.post("/addURL", cors(corsOptions), async (req, res) => {
  const wantedUrl = req.body.url;
  wantedUrl ? console.log(`You entered: ${userInput}`) : console.log(`error`);
  const url = `${base_api_url}?key=${process.env.API_KEY}&url=${wantedUrl}&lang=en`;
  const fetchedData = await fetch(url);
  const data = await fetchedData.json();
  console.log(data);
  res.send(data);
});
