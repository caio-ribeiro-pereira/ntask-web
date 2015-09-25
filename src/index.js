var Auth = require("./auth.js");

var auth = new Auth("caio@mail.com", "12345");

auth.getToken((body) => {
  console.log("TOKEN!");
  alert(JSON.stringify(body));
});
