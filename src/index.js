let ListTasksTemplate = require("./templates/listTasks.js");
let NewTaskTemplate = require("./templates/newTask.js");
let SigninTemplate = require("./templates/signin.js");
let SignupTemplate = require("./templates/signup.js");
let ShowUserTemplate = require("./templates/showUser.js");
const TASKS = [
  {id: 1, title: "Trabalhar", done: false},
  {id: 2, title: "Durmir", done: true},
];

const USER = {name: "Caio", email: "caio@mail.com"};

window.onload = () => {

  let main = document.querySelector("main");
  // main.innerHTML = ListTasksTemplate.render(TASKS);
  // main.innerHTML = NewTaskTemplate.render();
  // main.innerHTML = SigninTemplate.render();
  // main.innerHTML = SignupTemplate.render();
  main.innerHTML = ShowUserTemplate.render(USER);

};
