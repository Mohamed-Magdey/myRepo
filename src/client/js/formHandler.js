import checkForURL from "./urlChecker";
const handleSubmit = async (event) => {
  event.preventDefault();
  const url = document.getElementById("url").value;
  const checker = checkForURL(url);
  const axios = require("axios").default;
  const bodyData = { url: url };
  if (checker) {
    console.log("request to server")
    axios
      .post(
        "http://localhost:8081/addURL",
        {
          bodyData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            charset: "UTF-8",
          },
        }
      )
      .then((response) => {
        // document.querySelector("p").innerHTML = "GOT RESPONSE";

        document.getElementById(
          "polarity"
        ).innerHTML = `Polarity: ${response.data.score_tag}`;
        document
          .getElementById //   "agreement"
          ("agreement").innerHTML = `Agreement: ${response.data.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${response.data.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${response.data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${response.data.irony}`;
      })
      .catch((error) => {
        document.querySelector("p").innerHTML = "please enter valid url!";
      });
  }
};
export default handleSubmit;
