const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://dimitirjekrnic:Jomba05@cluster0.kgtmjsc.mongodb.net";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

// error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})
