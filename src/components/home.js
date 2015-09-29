import NTask from "../ntask.js";
import Template from "../templates/tasks.js";
import Footer from "../templates/footer.js";
import Loading from "../templates/loading.js";

class Home extends NTask {

  constructor(body) {
    super();
    this.body = body;
    this.token = localStorage.getItem("token");
  }

  init() {
    var self = this;
    this.body.innerHTML = Loading.render();
    this.request({
      method: "GET",
      url: `${self.URL}/tasks`,
      json: true,
      headers: {
        authorization: self.token
      }
    }, (err, resp, data) => {
      if (err) {
        self.emit("error", err);
      } else {
        self.render(data);
        self.addEventListener();
      }
    });
  }

  render(tasks) {
    let template = Template.render(tasks);
    let footer = Footer.render();
    this.body.innerHTML = template + footer;
  }

  addEventListener() {
    
  }
}

module.exports = Home;
