const express = require("express");
const app = express();
const config = require('config');
const {EmailService} = require('./EmailService');
const emailService = new EmailService();
const timezone = require('moment-timezone');
const moment = require('moment');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());

app.post('/v1/emails',bodyParser.json(),emailService.SendMail);
app.use('/v1/email/:id',emailService.HandleMailRecords);


app.listen(2010);
