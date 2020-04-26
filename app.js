// // const functions = require('./functions')
// // functions.helloWorld()
// // functions.sum(6,7)

// const http = require('http');
// const handler = (require, response) => {
//     console.log('25.04')
//     response.end('Hello')
// }
// const serwer = http.createServer(handler);
// const port = 3000;

// serwer.listen(port, (err) => {
//     console.log('server działa na porcie', port)
//     if (err) { return console.log('Coś się popsuło', err)    }
// } )

// po zainstalowaniu express
// const express = require('express');

// const app = express();
// const port = 3000;

// app.get('/', function (req, res) {
//     res.send('Hallo Welt!');
// })

// app.get('/portfolio', function (req, res) {
//     res.send('My portfolio is the best');
// })

// app.listen(port, (err) => {
//     console.log('server działa na porcie', port)
//     if (err) { return console.log('Coś się popsuło', err)    }
// } )

// dodanie plików hbs
const express = require('express');
const path = require('path');
const importFunc = require('./functions.js')

const app = express();
// const port = 3000; //bo używam Heroku
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

app.listen(port, (err) => {
    console.log('server działa na porcie', port)
    if (err) { return console.log('Coś się popsuło', err)    }
} )
//podpisnam css
app.use('/assets', express.static(path.join(__dirname, "./assets")));
//podpinam func.js
app.use('/js', express.static(path.join(__dirname, "./js")));   

//5.4
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
app.listen

