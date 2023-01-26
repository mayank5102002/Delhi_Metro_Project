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