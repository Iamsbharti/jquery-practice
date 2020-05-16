const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let port = 3400;

let app = express();

app.listen(port, console.log(`app listining at port ${port}`));

app.use(cors(), bodyParser.urlencoded({ extended: true }, bodyParser.json()));
const astronouts = {
  message: "success",
  number: 3,
  people: [
    {
      name: "Astro1",
      craft: "souge1",
    },
    {
      name: "Astro2",
      craft: "discovery",
    },
    {
      name: "Astro3",
      craft: "Intersteller",
    },
  ],
};
//server files/json data
app.get("/astronouts", (req, res) => {
  res.send(astronouts);
});
