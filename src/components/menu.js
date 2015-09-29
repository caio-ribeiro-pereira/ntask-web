import NTask from "../ntask.js";
import Template from "../templates/footer.js";

class Menu extends NTask {

  constructor(body) {
    super();
    this.body = body;
  }

  render(path) {
    this.body.innerHTML = Template.render(path);
    this.addEventListener();
  }

  addEventListener() {
    let links = this.body.querySelectorAll("a");
    for(let i = 0, max = links.length; i < max; i++) {
      links[i].addEventListener("click", (e) => {
        e.preventDefault();
        let link = e.target.parentElement;
        let path = link.getAttribute("data-path");
        this.emit("click", path);
      }.bind(this));
    }
  }
}

module.exports = Menu;
