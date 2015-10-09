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
    this.formSubmit(this);
    this.signupClick(this);
  }
  formSubmit(self) {
    const form = self.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector("[data-email]");
      const password = e.target.querySelector("[data-password]");
      const opts = {
        method: "POST",
        url: `${self.URL}/token`,
        json: true,
        body: {
          email: email.value,
          password: password.value
        }
      };
      self.request(opts, (err, resp, data) => {
        if (err || resp.status === 401) {
          self.emit("error", err);
        } else {
          self.emit("signin", data.token);
        }
      });
    });
  }
  signupClick(self) {
    const signup = self.body.querySelector("[data-signup]");
    signup.addEventListener("click", (e) => {
      e.preventDefault();
      self.emit("signup");
    });
  }
}

module.exports = Signin;
