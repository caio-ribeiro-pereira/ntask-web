import Tasks from "./components/tasks.js";
import TaskForm from "./components/taskForm.js";
import User from "./components/user.js";
import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import Menu from "./components/menu.js";

class App {
  constructor(body, footer) {
    this.signin = new Signin(body);
    this.signup = new Signup(body);
    this.tasks = new Tasks(body);
    this.taskForm = new TaskForm(body);
    this.user = new User(body);
    this.menu = new Menu(footer);
  }
  init() {
    this.signin.render();
    this.addEventListener();
  }
  addEventListener() {
    this.signinEvents(this);
    this.signupEvents(this);
    this.tasksEvents(this);
    this.taskFormEvents(this);
    this.userEvents(this);
    this.menuEvents(this);
  }
  signinEvents(self) {
    self.signin.on("error", () => alert("Erro de autenticação"));
    self.signin.on("signin", (token) => {
      localStorage.setItem("token", `JWT ${token}`);
      self.menu.render("tasks");
      self.tasks.render();
    });
    self.signin.on("signup", () => self.signup.render());
  }
  signupEvents(self) {
    self.signup.on("error", () => alert("Erro no cadastro"));
    self.signup.on("signup", (user) => {
      alert(`${user.name} você foi cadastrado com sucesso!`);
      self.signin.render();
    });
  }
  tasksEvents(self) {
    self.tasks.on("error", () => alert("Erro ao listar tarefas"));
    self.tasks.on("remove-error", () => alert("Erro ao excluir"));
    self.tasks.on("update-error", () => alert("Erro ao atualizar"));
    self.tasks.on("remove", () => self.tasks.render());
    self.tasks.on("update", () => self.tasks.render());
  }
  taskFormEvents(self) {
    self.taskForm.on("error", () => alert("Erro ao cadastrar tarefa"));
    self.taskForm.on("submit", () => {
      self.menu.render("tasks");
      self.tasks.render();
    });
  }
  userEvents(self) {
    self.user.on("error", () => alert("Erro carregar usuário"));
    self.user.on("remove-error", () => alert("Erro ao excluir conta"));
    self.user.on("remove-account", () => {
      alert("Que pena! Sua conta foi excluída.");
      localStorage.clear();
      self.menu.clear();
      self.signin.render();
    });
  }
  menuEvents(self) {
    self.menu.on("click", (path) => {
      self.menu.render(path);
      self[path].render();
    });
    self.menu.on("logout", () => {
      localStorage.clear();
      self.menu.clear();
      self.signin.render();
    })
  }
}

module.exports = App;
