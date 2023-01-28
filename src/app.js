const express = require('express')
const path = require('path')
const hbs = require('hbs')
const algo = require('./utils/Algo.js')
const validator = require('./utils/stationValidator.js')
const firebaseApp = require("./utils/firebaseInitialization")

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')

//Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewspath)

//Setup partials for handlebars
hbs.registerPartials(partialspath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/path', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (!req.query.source || !req.query.destination) {
        return res.json({
            error: 101,
            message: "Invalid Credentials"
        })
    }

    const source = req.query.source
    const destination = req.query.destination

    if (validator(source, destination)) {

        var path = algo.driverCode(source, destination)

        return res.json({
            status : "Successfull",
            timeTaken : path.timeTaken,
            totalStations : path.totalStations,
            stations : path.stationsInOrder
        })

    } else {
        return res.json({
            error: 101,
            message: "Invalid Credentials"
        })
    }
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})
