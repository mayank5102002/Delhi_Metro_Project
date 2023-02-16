const metro_data = require("../data/Metro_data");
const stationsToNum = metro_data.stationsToNum;
const interchangeStation = metro_data.interchangeStation;

function format(source, destination, stationsInOrder) {
  var src = stationsToNum[source];
  var dest = stationsToNum[destination];

  const stations = [];

  var start = 0;
  var end = stationsInOrder.length;

  if (interchangeStation[src]) {
    start++;
  }
  if (interchangeStation[dest]) {
    end--;
  }

  for (start; start < end; start++) {
    var temp = [stationsInOrder[start][0], stationsInOrder[start][1]];
    if (
      start + 1 < end &&
      stationsInOrder[start][0] == stationsInOrder[start + 1][0]
    ) {
      temp.push(stationsInOrder[start + 1][1]);
      start++;
    }
    stations.push(temp);
  }

  return stations;
}

module.exports = {
  format,
};
