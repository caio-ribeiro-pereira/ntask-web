import NTask from "../ntask.js";
import Template from "../templates/user.js";
import Loading from "../templates/loading.js";

class User extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
    this.renderUserData(this);
  }
  addEventListener() {
    this.userCancelClick(this);
  }
  renderUserData(self) {
    const opts = {
      method: "GET",
      url: `${self.URL}/user`,
      json: true,
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    self.body.innerHTML = Loading.render();
    self.request(opts, (err, resp, data) => {
      if (err) {
        self.emit("error", err);
      } else {
        self.body.innerHTML = Template.render(data);
        self.addEventListener();
      }
    });
  }
  userCancelClick(self) {
    const button = self.body.querySelector("[data-remove-account]");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Tem certeza que deseja excluir sua conta?")) {
        const opts = {
          method: "DELETE",
          url: `${self.URL}/user`,
          json: true,
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
        self.request(opts, (err, resp, data) => {
          if (err || resp.status === 412) {
            self.emit("error", err);
          } else {
            self.emit("remove-account");
          }
        });
      }
    });
  }
}

module.exports = User;
