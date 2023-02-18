// Delhi Metro Map Djikstra algo.jss : This file contains the 'main' function. Program execution begins and ends there.
//

//This is Djikstra algorithm to get the correct route from source node to destination node for Delhi Metro

const metro_data = require("../data/Metro_data");
const numToStations = metro_data.numToStations;
const stationsToNum = metro_data.stationsToNum;
const graph = metro_data.graph;
const interchangeStation = metro_data.interchangeStation;

//Djikstra Algorithm
function djikstra(src, dest, distance, parent) {
  parent[src] = -1;
  distance[src] = 0;

  //Setting ascending order of edges
  var nodes = new Set();
  nodes.add([0, src]);

  //Implementing Djikstra algorithm to get the lowest possible time to reach any destination
  while (nodes.size > 0) {
    var curr = Array.from(nodes)[0];
    nodes.delete(curr);

    for (var i = 0; i < graph[curr[1]].length; i++) {
      var vertex = graph[curr[1]][i];

      var temp = distance[curr[1]] + vertex[1];

      //This checks if the current time required is less than previous time required
      //and if it is then update the time with the new time
      if (temp < distance[vertex[0]]) {
        if (nodes.has([distance[vertex[0]], vertex[0]])) {
          nodes.delete([distance[vertex[0]], vertex[0]]);
        }

        distance[vertex[0]] = temp;
        parent[vertex[0]] = curr[1];
        nodes.add([distance[vertex[0]], vertex[0]]);
      }
    }
  }
}

//Print Path
function printPath(src, dest, distance, parent) {
  var res = "";
  res =
    "\tRoute between " +
    numToStations[dest][0] +
    " and " +
    numToStations[src][0] +
    " is :\n\t";
  var p = dest;
  while (parent[p] != -1) {
    res += numToStations[p][0] + " -> ";
    p = parent[p];
  }

  res += numToStations[p][0] + "\n";

  res += "\n\tTotal time taken(in mins) would be " + distance[dest] + " mins.";
  res += "\n\n";

  return res;
}

//Function to get path for source and destination
function getPath(src, dest, distance, parent) {
  //Initilising path object
  var path = {};

  //Putting variables for path object
  if (distance[dest] == null) {
    path.timeTaken = "null";
  } else {
    path.timeTaken = distance[dest];
  }

  path.stationsInOrder = [];

  //Starting a loop to get the path and put in path object
  var p = dest;
  while (parent[p] != -1) {
    path.stationsInOrder.push(numToStations[p]);
    p = parent[p];
  }

  path.stationsInOrder.push(numToStations[p]);

  path.totalStations = path.stationsInOrder.length;

  //returning path object
  return path;
}

//Drive code
function driverCode(source, destination) {
  var n = metro_data.noOfStations;

  var src = stationsToNum[source];
  var dest = stationsToNum[destination];

  //Check if the source node is an interchange station
  // If it is, then changing it's data so as to make it as a common station for all the sub lines
  if (interchangeStation[src]) {
    //Getting all the neighbours of the source node and then adding the source node to those with distance as '0'
    //
    //  This is done as because the common station is already having others as neighbours
    //  but those others don't have that station as its neighbour
    //
    //      So, we add the source as it's neighbours neighbour
    //      because Djikstra is run in reverse and we don't need to actually get to destination
    //      as it will be the start node when running,
    //      but we need to get to the source node as it will be the end node
    //      so, the down code is adding the current source
    //
    for (var i = 0; i < graph[src].length; i++) {
      var node = graph[src][i];
      graph[node[0]].push([src, 0]);
    }
  }

  // //Declaring distance and parent Array for the algorithm
  var distance = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  var parent = Array(n + 1).fill(0);

  // //Calling Djikstra for source and destination
  djikstra(dest, src, distance, parent);

  // //Printing path and returning it
  var res = getPath(dest, src, distance, parent);

  // // Undoing the changes made to the data for the source node
  if (interchangeStation[src]) {
    //Removing the source node from the data after use
    for (var i = 0; i < graph[src].length; i++) {
      var node = graph[src][i];
      graph[node[0]].pop();
    }
  }

  return res;
}

module.exports = { driverCode };
