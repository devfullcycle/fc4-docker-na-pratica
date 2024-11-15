const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
