const source1 = document.getElementById('source1')
const source2 = document.getElementById('source2')
const button = document.getElementById('routeButton')
const path = document.getElementById('path')

button.addEventListener('click', (e) => {
    e.preventDefault()

    const source = source1.value
    const destination = source2.value

    if(source != destination){

        const url = "/path?source=" + source + "&destination=" + destination

        fetch(url).then((result) => {
            result.json().then((data) => {

                path.textContent = "Total Time taken : " + data.timeTaken
                
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
    }else if(s1 != "" && s2 != "" && s1 !== s2){
        document.getElementById('content').style.display = "block";
    }else if(s1 === s2) {
        alert("Values are same. Please re-enter different values.");
        document.getElementById('content').style.display = "none";
    } else if (s1 == "" && s2 != "") {
        alert("Please enter Source value");
        document.getElementById('content').style.display = "none";
    }else if (s2 == "" ) {
        alert("Please enter Destination value");
        document.getElementById('content').style.display = "none";
    }else{
        document.getElementById('content').style.display = "none";
    }
    
    
}