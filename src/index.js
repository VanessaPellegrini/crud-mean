const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//settings
app.set( 'port', process.env.PORT || 3000);

//~/mongodb/bin/mongod
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/mevn-db')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


//Middlewares - funciones

//mide velocidad respuesta
app.use(morgan ('dev'));
//permite entender json
app.use(express.json());

//Routes
app.use('/tasks',require('./routes/tasks'));


//static files
app.use(express.static(__dirname + '/public'));
//server is listening
app.listen(app.get('port'), () => {
    console.log('server on port' , app.get('port'));
});