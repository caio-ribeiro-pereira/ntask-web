const express = require("express");

var app = express();

app.set("port", 80);
app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(`Ntask Web - porta ${app.get("port")}`);
});
