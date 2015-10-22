import NTask from "../ntask.js";
import Template from "../templates/user.js";
import Loading from "../templates/loading.js";

class User extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
    this.renderUserData()
  }
  addEventListener() {
    this.userCancelClick();
  }
  renderUserData(){
    const opts = {
      method: "GET",
      url: `${this.URL}/user`,
      json: true,
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    this.body.innerHTML = Loading.render();
    this.request(opts, (err, resp, data) => {
      if (err || resp.status === 412) {
        this.emit("error", err);
      } else {
        this.body.innerHTML = Template.render(data);
        this.addEventListener();
      }
    });
  }
  userCancelClick() {
    const button = this.body.querySelector("[data-remove-account]");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Tem certeza que deseja excluir sua conta?")) {
        const opts = {
          method: "DELETE",
          url: `${this.URL}/user`,
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
        this.request(opts, (err, resp, data) => {
          if (err || resp.status === 412) {
            this.emit("remove-error", err);
          } else {
            this.emit("remove-account");
          }
        });
      }
    });
  }
}

module.exports = User;
