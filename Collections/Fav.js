"use strict";

const mongoose = require("mongoose");

//schema

const facCockail = new mongoose.Schema({
  strDrinkThumb: String,
  strDrink: String,
});

const Fav = mongoose.model("facCockail", facCockail);

module.exports = Fav;
