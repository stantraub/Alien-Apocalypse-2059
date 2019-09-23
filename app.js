const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose 
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB sucessfully"))
    .catch(err => console.log(err));


