import Home from "./components/home.js";
import Signin from "./components/signin.js";

class App {

  constructor(main) {
    this.main = main;
    this.signin = new Signin(main);
    this.home = new Home(main);
  }

  init() {
    this.signin.init();

    this.addEventListener();
  }

  addEventListener() {
    let self = this;
    this.signin.on("login", (token) => {
      localStorage.setItem("token", `JWT ${token}`);
      self.home.init();
    });
    this.signin.on("error", (err) => {
      alert("Erro de autenticação");
    });
  }
}

module.exports = App;
