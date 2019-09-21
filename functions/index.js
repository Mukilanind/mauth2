const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();
const authServer = require('./routes/auth')

// Loggers/Interceptors to be defined here 

app.use('/auth', authServer)

app.get('*', function(req, res){
    res.sendFile('404.html', {
        root: path.join(__dirname, '../public')
    })
});
exports.app = functions.https.onRequest(app);