require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());

const getAllDataHandler = require("./Modules/getAllDataHandler");
const addFavHandler = require("./Modules/addFavHandler");
const getFavDataHandler = require("./Modules/getFavDataHandler");
const deleteFavDataHAndler = require("./Modules/deleteFavDataHAndler");
const updateFavDataHandler = require("./Modules/updateFavDataHandler");

const PORT = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGODB_URI}/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//////////functions/////////////////

server.get("/allData", getAllDataHandler);

server.post("/addFav", addFavHandler);

server.get("/getFavData", getFavDataHandler);

server.delete("/deleteFavData", deleteFavDataHAndler);

server.put("/updateFavData", updateFavDataHandler);

//////////////////////////////////////////////////
server.get("/", (req, res) => {
  res.send("home");
});

server.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
