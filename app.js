const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser"); // 
const app = express ();

mongoose.connect("mongodb+srv://adm_dindin_master:em2tcz8qKjbQ8Ta@cluster0-dnqcd.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

module.exports = app;