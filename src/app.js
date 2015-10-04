import Tasks from "./components/tasks.js";
import TaskForm from "./components/taskForm.js";
import Signin from "./components/signin.js";
import Menu from "./components/menu.js";

class App {
  constructor(body, footer) {
    this.body = body;
    this.footer = footer;
    this.signin = new Signin(body);
    this.tasks = new Tasks(body);
    this.taskForm = new TaskForm(body);
    this.menu = new Menu(footer);
  }
  init() {
    this.signin.render();
    this.addEventListener();
  }
  addEventListener() {
    this.signin.on("login", (token) => {
      localStorage.setItem("token", `JWT ${token}`);
      this.menu.render("tasks");
      this.tasks.render();
    }.bind(this));
    this.signin.on("error", (err) => {
      alert("Erro de autenticação");
    });
    this.menu.on("click", (path) => {
      this.menu.render(path);
      this[path].render();
    }.bind(this));
    this.taskForm.on("error", (err) => {
      alert("Erro no cadastro da tarefa");
    });
    this.taskForm.on("submit", () => {
      this.menu.render("tasks");
      this.tasks.render();
    });
  }
}

module.exports = App;
