const source1 = document.getElementById('source1')
const source2 = document.getElementById('source2')
const button = document.getElementById('routeButton')
const path = document.getElementById('path')

var completelist = document.getElementById("thelist");

button.addEventListener('click', (e) => {
    e.preventDefault()

    const source = source1.value
    const destination = source2.value

    if (source != destination) {

        const url = "/path?source=" + source + "&destination=" + destination

        fetch(url).then((result) => {
            result.json().then((data) => {

                completelist.innerHTML = ""

                path.textContent = "Total Time taken : " + data.timeTaken

                var stations = data.stations

                var n = stations.length

                for (let i = 0; i < n; i++) {
                    completelist.innerHTML += "<div class=\"feed-item flex space-x-4 max-w-xl justify-center border-b py-2 mx-auto px-2\">" +
                    "<div class=\"flex flex-col w-full\">" +
                        "<div class=\"flex flex-row space-x-4 items-center justify-between\">" +
                            "<h1 class=\"font-semibold text-white-800\">" + stations[i] + "</h1>" +
                        "</div>" +
                    "</div>" +
                "</div>";
                }

            })
        })
    }
})

function show() {
    var s1 = document.getElementById("source1").value;
    var s2 = document.getElementById("source2").value;

    if (!s1 && !s2) {
        alert("Please enter Source and Destination values");
        document.getElementById('content').style.display = "none";
    } else if (s1 != "" && s2 != "" && s1 !== s2) {
        document.getElementById('content').style.display = "block";
    } else if (s1 === s2) {
        alert("Values are same. Please re-enter different values.");
        document.getElementById('content').style.display = "none";
    } else if (s1 == "" && s2 != "") {
        alert("Please enter Source value");
        document.getElementById('content').style.display = "none";
    } else if (s2 == "") {
        alert("Please enter Destination value");
        document.getElementById('content').style.display = "none";
    } else {
        document.getElementById('content').style.display = "none";
    }


}