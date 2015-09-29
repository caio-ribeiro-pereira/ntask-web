import NTask from "../ntask.js";
import Template from "../templates/signin.js";

class Signin extends NTask {

  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector("[data-email]").focus();
    this.addEventListener();
  }

  addEventListener() {
    let form = this.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let email = e.target.querySelector("[data-email]");
      let password = e.target.querySelector("[data-password]");
      let opts = {
        method: "POST",
        url: `${this.URL}/token`,
        json: true,
        body: {
          email: email.value,
          password: password.value
        }
      };
      this.request(opts, (err, resp, data) => {
        if (err) {
          this.emit("error", err);
        } else {
          this.emit("login", data.token);
        }
      });
    }.bind(this));
  }
}

module.exports = Signin;
