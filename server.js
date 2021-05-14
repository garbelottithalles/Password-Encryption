const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const ejs = require('ejs');
const PORT = 3000;


//CONFIG
//  body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//  static files
app.use(express.static(__dirname + '/views/public'));

//  view engine
app.set('view engine', 'ejs');


//ROUTES
app.get('/', (req, res) => {
    console.log('ok');
});

app.get('/index', (req, res) => {
    res.render('public/index')
})


app.listen(PORT)

