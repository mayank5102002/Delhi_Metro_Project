const source1 = document.getElementById('source1')
const source2 = document.getElementById('source2')
const button = document.getElementById('routeButton')
const path = document.getElementById('path')

const stations = {}
stations['KASHMERE GATE'] = 16
stations['NEHRU PLACE'] = 10
stations['KALKAJI MANDIR'] = 19
stations['RAJ BAGH'] = 1

button.addEventListener('click', (e) => {
    e.preventDefault()

    const source = source1.value
    const destination = source2.value

    if(source != destination){

        const src = stations[source]
        const des = stations[destination]

        const url = "/path?source=" + src + "&destination=" + des

        fetch(url).then((result) => {
            result.json().then((data) => {
                path.textContent = data.path
            })
        })
    }
})