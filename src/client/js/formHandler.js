import checkForURL from "./urlChecker";
const handleSubmit = async (event) => {
  event.preventDefault();
  const url = document.getElementById("url").value;
  const checker = checkForURL(url);
  const axios = require("axios").default;
  const bodyData = JSON.stringify({ url: url });
  if (checker) {
    axios
      .post(
        "/addURL",
        {
          bodyData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        document.getElementById(
          "polarity"
        ).innerHTML = `Polarity: ${response.data.score_tag}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${response.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${response.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${response.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
      })
      .catch((error) => {
        document.querySelector("p").innerHTML = "please enter valid url!";
      });
  }
};
export default handleSubmit;
