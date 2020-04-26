const express = require('express');
const path = require('path');
const importFunc = require('./functions.js')

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
    res.render('index', {
    pageTitle: 'Lekcja Node.js 25.04',
    subTitle: importFunc.someTitle,
    newVar: sample,
    })
    })

app.get('/portfolio', function (req, res) {
    res.render('portfolio',{
        pageTitle: 'Lekcja Node.js 25.04',
        subTitle: 'portfolio'
        })
        })

app.listen(process.env.PORT || 3000, (port, err) => {
    console.log('server works on port', port)
    if (err) { return console.log('Something gone wrong', err)    }
} )
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));   

const fromAnotherFile = require("./functions")
app.get('/', function (req, res) {
res.render('index', {
pageTitle: "Lekcja01",
subTitle: fromAnotherFile.someTitle
})
})

const sample = () => {
    return 'proba'
    }
    app.get('/', function (req, res) {
    res.render('index', {
    anotherTitle: sample()
    })
    })


