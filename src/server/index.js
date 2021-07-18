const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const fetch = require("node-fetch");
const base_api_url = "https://api.meaningcloud.com/sentiment-2.1";
const app = express();

app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
// const corsOptions = {
//   origin: `base_api_url?key=${process.env.API_KEY}`,
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
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
app.post("/addURL", async (req, res) => {
  const wantedUrl = req.body.enteredURL;
  wantedUrl ? console.log(`You entered: ${userInput}`) : console.log(`error`);
  const url = `${base_api_url}?key=${process.env.API_KEY}&url=${wantedUrl}&lang=en`;
  const fetchedData = await fetch(url);
  const data = await fetchedData.json();
  console.log(data);
  res.send(data);
});
