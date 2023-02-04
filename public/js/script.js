const source1 = document.getElementById("source1");
const source2 = document.getElementById("source2");
const button = document.getElementById("routeButton");
const path = document.getElementById("path");

var completelist = document.getElementById("thelist");
var section = document.getElementById("content");


button.addEventListener("click", (e) => {
  e.preventDefault();
 
  const source = source1.value;
  const destination = source2.value;

  if (!source) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Destination Value",
    });
  } else if (!destination) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Destination Value",
    });
  } else if (source === destination) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Source and Destination Different",
    });
  } else {
    console.log("Scroll")
    getPath(source, destination);  
  }
});

function getPath(source, destination) {
  if (source != destination) {
    const url = "/path?source=" + source + "&destination=" + destination;

    fetch(url).then((result) => {
      result.json().then((data) => {
        if (data.error === 101) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Correct Source and Destination",
          });
          document.getElementByClassName("content").style.display = "none";
          return;
        } else {
          section.style.display = "block";
        }

        completelist.innerHTML = "";

        path.textContent = "Total Time Taken : " + data.timeTaken + "mins";

        var stations = data.stations;

        var n = stations.length;

        // let stationNumber = 1;
        for (let i = 0; i < n; i++) {
          if (stations[i].length == 3) {
            completelist.innerHTML +=
              "<div class='main-container'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container' style='background-color:" +
              stations[i][1] +
              ";'>" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][1] +
              ";'>" +
              // (i + 1) +
              "</div>" +
              "</div>" +
              "<div class='font-semibold text-white-800 ml-3'>" +
              stations[i][0] +
              "</div>" +
              "</div>" +
              "<div class='main-containerinterchange' style='box-shadow:1px 1px 10px " + stations[i][2]+",-1px -1px 10px " + stations[i][1] + ";'>" +
              // "<div class='line-container'>" +
              //   "<div id='theline-container-" +
              //   (i + 1) +
              //   "' class='theline-container'>" +
              //   "</div>" +
              //   "<div class='thelist-number'>" +
              //   (i + 1) +
              //   "</div>" +
              // "</div>" +
              "<div class='font-semibold text-white-800 ml-3' style='font-size: 3rem; color:rgb(155,155,155);'>" +
              " <i class='fa-solid fa-shuffle'>"+"</i>" +
              // stations[i][0] +
              " Change Here - From " +
              stations[i][1] +
              " line to " +
              stations[i][2] +
              " line" +
              "</div>" +
              "</div>" +

              "<div class='main-container'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container' style='background-color:" +
              stations[i][2] +
              ";'>" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][2] +
              ";'>" +
              // (i + 2) +
              "</div>" +
              "</div>" +
              "<div class='font-semibold text-white-800 ml-3'>" +
              stations[i][0] +
              "</div>" +
              "</div>";
          } else {
            completelist.innerHTML +=
              "<div class='main-container'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container' style='background-color:" +
              stations[i][1] +
              ";'>" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][1] +
              ";'>" +
              // (i + 1) +
              "</div>" +
              "</div>" +
              "<div class='font-semibold text-white-800 ml-3'>" +
              stations[i][0] +
              "</div>" +
              "</div>";
          }
        }
        
        path.scrollIntoView();
      });
    });
  }
}



// let first = false, last = false;
// if (i === 0) { first = true; }
// if (i === n - 1) { last = true; }
// let thelistNumberClass = " ";
// if (first) { thelistNumberClass += " first"; }
// if (last) { thelistNumberClass += " last"; }
// " + thelistNumberClass + " tis will be used in if in the line container class
