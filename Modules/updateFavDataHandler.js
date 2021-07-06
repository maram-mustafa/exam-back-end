"use strict";

const favModal = require("../Collections/Fav");

function updateFavDataHandler(req, res) {
  const { strDrinkThumb, strDrink, target } = req.body;

  favModal.updateOne(
    { strDrink: target },
    { $set: { strDrinkThumb: strDrinkThumb, strDrink: strDrink } },
    (err, data) => {
      if (err) {
        res.status(500).send("there is an error");
      } else {
        res.send(data);
      }
    }
  );
}

module.exports = updateFavDataHandler;
