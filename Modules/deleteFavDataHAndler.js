"use strict";

const favModal = require("../Collections/Fav");

function deleteFavDataHAndler(req, res) {
  let strDrink = req.params.strDrink;

  favModal.deleteOne({ strDrink }, (err, data) => {
    favModal.deleteOne({}, (err, data) => {
      if (err) {
        res.status(500).send("there is an error");
      } else {
        res.send(data);
      }
    });
  });
}

module.exports = deleteFavDataHAndler;
