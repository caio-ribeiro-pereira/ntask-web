import NTask from "../ntask.js";
import Template from "../templates/user.js";
import Loading from "../templates/loading.js";

class User extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
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
      if (err) {
        this.emit("error", err);
      } else {
        this.body.innerHTML = Template.render(data);
        this.addEventListener();
      }
    }.bind(this));
  }
  addEventListener() {
    // eventos
  }
}

module.exports = User;
