//Getting metro data
const metro_data = require("../data/Metro_data");
const stationsToNum = metro_data.stationsToNum;

//Validate function to validate the incoming source and destination
function validate(source, destination) {
  if (stationsToNum[source] && stationsToNum[destination]) {
    return true;
  }

  return false;
}

module.exports = validate;
