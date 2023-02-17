const source1 = document.getElementById("source1");
const source2 = document.getElementById("source2");
const button = document.getElementById("routeButton");
const path = document.getElementById("path");
const loadingBar = document.getElementById("loading-bar");

var completelist = document.getElementById("thelist");
var section = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function () {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const source = source1.value;
    const destination = source2.value;

    if (!source) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Source Station",
        confirmButtonColor: "#28a745",
      });
    } else if (!destination) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Destination Station",
        confirmButtonColor: "#28a745",
      });
    } else if (source === destination) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Both Source and Destination are Same",
        confirmButtonColor: "#28a745",
      });
    } else {
      console.log("Scroll");

      getPath(source, destination);
      callDisclaimer();

      // if (window.innerWidth <= 1200) {
      //   setTimeout(function() {
      //     callDisclaimer();
      //   }, 1600);
      // } else {
      //   callDisclaimer();
      // }
    }
  });
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
            text: "Please Enter Source and Destination Correct",
            confirmButtonColor: "#28a745",
          });

          document.getElementByClassName("content").style.display = "none";
          return;
        } else {
          loadingBar.style.display = "block";
          section.style.display = "block";
        }

        completelist.innerHTML = "";

        path.textContent = "Total Time Taken : " + data.timeTaken + "mins";

        var stations = data.stations;

        var n = stations.length;

        for (let i = 0; i < n; i++) {
          if (stations[i].length == 3) {
            completelist.innerHTML +=
              "<div class='main-container' style='opacity: 1;'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container'>" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][1] +
              ";'>" +
              "</div>" +
              "</div>" +
              "<div class='maincontainertext'>" +
              stations[i][0] +
              "</div>" +
              "</div>" +
              "<div class='main-containerinterchange' style='box-shadow:1px 1px 10px opacity: 1;' " +
              stations[i][2] +
              ",-1px -1px 10px " +
              stations[i][1] +
              ";'>" +
              "<div class='maininterchangetext'>" +
              " <i class='fa-solid fa-shuffle'>" +
              "</i>" +
              " Change Here - From " +
              stations[i][1] +
              " line to " +
              stations[i][2] +
              " line" +
              "</div>" +
              "</div>" +
              "<div class='main-container' style='opacity: 1;'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container' >" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][2] +
              ";'>" +
              // (i + 2) +
              "</div>" +
              "</div>" +
              "<div class='maincontainertext'>" +
              stations[i][0] +
              "</div>" +
              "</div>";
          } else {
            completelist.innerHTML +=
              "<div class='main-container' style='opacity: 1;'>" +
              "<div class='line-container'>" +
              "<div id='theline-container-" +
              (i + 1) +
              "' class='theline-container' >" +
              "</div>" +
              "<div class='thelist-number'  style='background-color:" +
              stations[i][1] +
              ";'>" +
              // (i + 1) +
              "</div>" +
              "</div>" +
              "<div class='maincontainertext'>" +
              stations[i][0] +
              "</div>" +
              "</div>";
          }
        }
        path.scrollIntoView();
        loadingBar.style.display = "none";
      });
    });
  }
}

function callDisclaimer() {
  const Toast = Swal.mixin({
    width: 800,
    toast: true,
    opacity: 0.5,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    showCloseButton: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "warning",
    title:
      "Disclaimer: The information provided by the website i.e. timings, and route, is indicative and subject to change. Commuters are advised to plan their journey in advance as actual journey time may vary as per the prevailing conditions. We will not be liable for any direct or indirect loss (of any nature whatsoever) arising from the material contained in this website.",
  });
}
