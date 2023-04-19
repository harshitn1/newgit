const path = require('path') 
const express = require('express') 
const hbs = require('hbs') 
 
const app = express() 
// Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../template/views') 
const partialsPath = path.join(__dirname, '../template/partials') 
 
// Setup handlebars engine and views location 
app.set('view engine', 'hbs') 
app.set('views', viewsPath) 
hbs.registerPartials(partialsPath) 
 
// Setup static directory to serve 
app.use(express.static(publicDirectoryPath)) 
 
app.get('', (req, res) => { 
    res.render('index', { 
        title: 'ExpressApp', 
        name: 'MyName' 
    }) 
}) 
app.get('/about', (req, res) => { 
    res.render('about', { 
        title: 'About Me', 
        name: 'MyName' 
    }) 
}) 

app.get('/about/location', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        error: 'Location not found!!!'
    })
})


app.get('/about/Sourcecode', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        error: 'Source Code isnt Available!!!!'
    })
})


 
app.get('/help', (req, res) => { 
    res.render('help', { 
        helpText: 'This is some helpful text.', 
        title: 'Help', 
        name: 'MyName' 
    }) 
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        error: 'Help article not found!!'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'MyName',
        error: 'Page not found.'
    })
}) 
 
app.listen(3000, () => { 
    console.log('Server is up on port 3000.') 
})



