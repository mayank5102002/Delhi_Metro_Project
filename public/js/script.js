const source1 = document.getElementById('source1')
const source2 = document.getElementById('source2')
const button = document.getElementById('routeButton')
const path = document.getElementById('path')

var completelist = document.getElementById("thelist");
var completelistnumber = document.getElementById("thelistnumber");


button.addEventListener('click', (e) => {
    e.preventDefault()

    const source = source1.value
    const destination = source2.value
    
    if(!source || !destination){
        alert("Input Both Source and Destination")
    }else{
        getPath();
    }
})

function getPath() {
    if (source != destination) {

        const url = "/path?source=" + source + "&destination=" + destination

        fetch(url).then((result) => {
            result.json().then((data) => {

                if(data.error === 101){
                    alert("Enter Correct Source and Destination")
                    return;
                }
                completelist.innerHTML = ""
                completelistnumber.innerHTML = ""

                path.textContent = "Total Time taken : " + data.timeTaken

                var stations = data.stations

                var n = stations.length

                for (let i = 0; i < n; i++) {
                    completelistnumber.innerHTML += "<div>" + (i + 1) + "</div>";
                    completelist.innerHTML += "<div class='font-semibold text-white-800'>" + stations[i] + "</div>";
                }

            })
        })
    }
}

function show() {
    var s1 = document.getElementById("source1").value;
    var s2 = document.getElementById("source2").value;

    if (!s1 && !s2) {
        document.getElementByClassName('content').style.display = "none";
    } else if (s1 != "" && s2 != "" && s1 !== s2) {
        document.getElementById('content').style.display = "block";
    } else if (s1 === s2) {
       
        document.getElementById('content').style.display = "none";
    } else if (s1 == "" && s2 != "") {
        
        document.getElementById('content').style.display = "none";
    } else if (s2 == "") {

        document.getElementById('content').style.display = "none";
    } else {
        document.getElementById('content').style.display = "none";
    }


}
for (let i = 0; i < n; i++) {

    completelistnumber.innerHTML += "<div>" + (i + 1) + "</div>";
    completelist.innerHTML += "<div class='font-semibold text-white-800'>" + stations[i] + "</div>";

}


