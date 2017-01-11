/**
 * Created by User on 2017/1/6.
 */


import '../css/main.scss'

var sub = require('./sub');
var app  = document.createElement('div');
var $ = require('jquery');
var moment = require('moment');

app.innerHTML = '<h1>Hello World!</h1>';
app.appendChild(sub());
document.body.appendChild(app);

$('body').append('<p>look at me! now is ' + moment().format() + '</p>');