let validUrl = require("valid-url");
const checkForURL = (url) => {
  console.log("::: Running checkForURL :::", url);
  return validUrl.isUri(url);
};

export default checkForURL;
