

//Data For Delhi Metro Rail Corporation

const stations = {};
const graph = {};
const interchangeStation = {};

//Stations with their respective numbering
stations[1] = "Raj Bagh";
stations[2] = "Kashmere Gate - Red Line";
stations[3] = "Kashmere Gate - Yellow Line";
stations[4] = "Kashmere Gate - Violet Line";
stations[5] = "New Delhi";
stations[6] = "Lal Quila";
stations[7] = "Central Secretariat - Yellow Line";
stations[8] = "Central Secretariat - Violet Line";
stations[9] = "INA";
stations[10] = "Nehru Place";
stations[11] = "Hauz Khas - Yellow Line";
stations[12] = "Hauz Khas - Magenta Line";
stations[13] = "Kalkaji Mandir - Violet Line";
stations[14] = "Kalkaji Mandir - Magenta Line";
stations[15] = "Greater Kailash";
stations[16] = "Kashmere Gate";
stations[17] = "Central Secretariat";
stations[18] = "Hauz Khas";
stations[19] = "Kalkaji Mandir";

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

//Declaring if the station is an interchange station or not
interchangeStation[19] = true;
interchangeStation[16] = true;
interchangeStation[17] = true;
interchangeStation[18] = true;

module.exports = {
  stations,
  graph,
  interchangeStation
}