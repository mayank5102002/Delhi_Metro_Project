const express = require('express')
const path = require('path')
const hbs = require('hbs')
const algo = require('./utils/Algo.js')

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
    if(!req.query.source || !req.query.destination){
        var path = algo.main()

        return res.send({
            path
        })
    }

    const source = req.query.source
    const destination = req.query.destination

    var path = algo.driverCode(source, destination)

    return res.send({
        path
    })
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})
