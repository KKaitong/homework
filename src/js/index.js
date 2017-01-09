/**
 * Created by User on 2017/1/6.
 */


import '../css/main.scss'



var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World!</h1>';
app.appendChild(sub());
document.body.appendChild(app);