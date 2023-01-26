

//Data For Delhi Metro Rail Corporation
const numToStations = {};
const stationsToNum = {};
const graph = {};
const interchangeStation = {};

//Stations with their respective numbering
numToStations[1] = "Raj Bagh";
numToStations[2] = "Kashmere Gate - Red Line";
numToStations[3] = "Kashmere Gate - Yellow Line";
numToStations[4] = "Kashmere Gate - Violet Line";
numToStations[5] = "New Delhi";
numToStations[6] = "Lal Quila";
numToStations[7] = "Central Secretariat - Yellow Line";
numToStations[8] = "Central Secretariat - Violet Line";
numToStations[9] = "INA";
numToStations[10] = "Nehru Place";
numToStations[11] = "Hauz Khas - Yellow Line";
numToStations[12] = "Hauz Khas - Magenta Line";
numToStations[13] = "Kalkaji Mandir - Violet Line";
numToStations[14] = "Kalkaji Mandir - Magenta Line";
numToStations[15] = "Greater Kailash";
numToStations[16] = "Kashmere Gate";
numToStations[17] = "Central Secretariat";
numToStations[18] = "Hauz Khas";
numToStations[19] = "Kalkaji Mandir";

//Stations names mapped to their numbers
stationsToNum['KASHMERE GATE'] = 16
stationsToNum['NEHRU PLACE'] = 10
stationsToNum['KALKAJI MANDIR'] = 19
stationsToNum['RAJ BAGH'] = 1

//Declaring if the station is an interchange station or not
interchangeStation[19] = true;
interchangeStation[16] = true;
interchangeStation[17] = true;
interchangeStation[18] = true;

//Graph of Delhi Metro
graph[1] = [[2, 20]];
graph[2] = [
  [1, 20],
  [3, 10],
  [4, 10],
];
graph[3] = [
  [2, 10],
  [4, 10],
  [5, 6],
];
graph[4] = [
  [2, 10],
  [3, 10],
  [6, 3],
];
graph[5] = [
  [3, 6],
  [7, 7],
];
graph[6] = [
  [4, 3],
  [8, 12],
];
graph[7] = [
  [5, 7],
  [8, 5],
  [9, 9],
];
graph[8] = [
  [6, 12],
  [7, 5],
  [10, 17],
];
graph[9] = [
  [7, 9],
  [11, 7],
];
graph[10] = [
  [8, 17],
  [13, 2],
];
graph[11] = [
  [9, 7],
  [12, 5],
];
graph[12] = [
  [11, 5],
  [15, 7],
];
graph[13] = [
  [10, 2],
  [14, 5],
];
graph[14] = [
  [13, 5],
  [15, 4],
];
graph[15] = [
  [12, 7],
  [14, 4],
];
graph[16] = [
  [2, 0],
  [3, 0],
  [4, 0],
];
graph[17] = [
  [7, 0],
  [8, 0],
];
graph[18] = [
  [11, 0],
  [12, 0],
];
graph[19] = [
  [13, 0],
  [14, 0],
];

module.exports = {
  numToStations,
  stationsToNum,
  graph,
  interchangeStation
}