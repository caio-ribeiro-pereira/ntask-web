const request = require("browser-request");
const NTask = require("./ntask.js");

class Auth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  getToken(done) {
    let opts = {
      method: "POST",
      url: `${NTask.URL}/token`,
      body: {
        email: this.email,
        password: this.password
      }
    };
    request(opts, (err, resp, body) => done(body));
  }
}
module.exports = Auth;
