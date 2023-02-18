const express = require("express");
const path = require("path");
const hbs = require("hbs");
const algo = require("./utils/Algo.js");
const validator = require("./utils/stationValidator.js");
const firebaseApp = require("./utils/firebaseInitialization");
const formatter = require("./utils/StationsFormattor.js");

const app = express();
const port = process.env.PORT || 3000;

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

//Setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewspath);

//Setup partials for handlebars
hbs.registerPartials(partialspath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

//Declaring various paths which could be taken and giving appropriate responses to those

//Path for main page
app.get("", (req, res) => {
  res.render("index", {
    title: "Home"
  });
});

//Path for about page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});

app.get("/api", (req, res) => {
  res.render("API", {
    title: "API"
  });
});

//Path for path page API to get path for the route
app.get("/path", (req, res) => {
  //Setting content-type as json for api call
  res.setHeader("Content-Type", "application/json");

  //Checking if source and destination are present in the attributes provided
  if (!req.query.source || !req.query.destination) {
    //Returning invalid credentials response
    return res.json({
      error: 101,
      message: "Invalid Credentials",
    });
  }

  //Getting the source and destination
  const source = req.query.source;
  const destination = req.query.destination;

  //Checking if the provided attirbutes are correct
  if (validator(source, destination)) {
    //Getting path for provided data
    var path = algo.driverCode(source, destination);

    var stations = formatter.format(source, destination, path.stationsInOrder);

    //Returning successfull data
    return res.json({
      status: "Successfull",
      timeTaken: path.timeTaken,
      totalStations: stations.length,
      stations: stations,
    });
  } else {
    //Returning invalid credentials when provided attributes are not correct
    return res.json({
      error: 101,
      message: "Invalid Credentials",
    });
  }
});

app.get("*", (req, res) => {
  res.render("404");
});

//Making the site listen on the provided port
app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
