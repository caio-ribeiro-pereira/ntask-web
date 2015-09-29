import NTask from "../ntask.js";
import Template from "../templates/signin.js";

class Signin extends NTask {

  constructor(body) {
    super();
    this.body = body;
  }

  init() {
    this.render();
    this.addEventListener();
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector("[data-email]").focus();
  }

  addEventListener() {
    let self = this;
    let form = this.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let email = e.target.querySelector("[data-email]");
      let password = e.target.querySelector("[data-password]");
      self.request({
        method: "POST",
        url: `${self.URL}/token`,
        json: true,
        body: {
          email: email.value,
          password: password.value
        }
      }, (err, resp, data) => {
        if (err) {
          self.emit("error", err);
        } else {
          self.emit("login", data.token);
        }
      });
    });
  }
}

module.exports = Signin;
