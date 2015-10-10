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
  clear() {
    this.body.innerHTML = "";
  }
  addEventListener() {
    this.pathsClick(this);
    this.logoutClick(this);
  }
  pathsClick(self) {
    const links = self.body.querySelectorAll("[data-path]");
    for(let i = 0, max = links.length; i < max; i++) {
      links[i].addEventListener("click", (e) => {
        e.preventDefault();
        const link = e.target.parentElement;
        const path = link.getAttribute("data-path");
        self.emit("click", path);
      });
    }
  }
  logoutClick(self) {
    const link = self.body.querySelector("[data-logout]");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      self.emit("logout");
    })
  }
}

module.exports = Menu;
