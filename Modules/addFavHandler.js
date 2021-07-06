"use strict";

const favModal = require("../Collections/Fav");

function addFavHandler(req, res) {
  const { strDrinkThumb, strDrink } = req.body;

  favModal.find({strDrink }, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      if (data.length == 0) {
        const newFav = new favModal({
          strDrinkThumb,
          strDrink,
        });
        console.log(newFav)
      } else {
        console.log("It's exist");
      }
    }
  });
}

module.exports = addFavHandler;
