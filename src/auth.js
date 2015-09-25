const request = require("browser-request");
const NTask = require("./ntask.js");

class Auth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  getToken(done) {
    request({
      method: "POST",
      url: `${NTask.URL}/token`,
      body: {
        email: this.email,
        password: this.password
      }
    }, (err, resp, body) => {
      console.log(err);
      console.log(resp);
      done(body);
    });
  }
}
module.exports = Auth;
