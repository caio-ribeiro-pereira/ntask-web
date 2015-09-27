let TasksTemplate = require("./templates/tasks.js");
let TaskFormTemplate = require("./templates/taskForm.js");
let SigninTemplate = require("./templates/signin.js");
let SignupTemplate = require("./templates/signup.js");
let UserFormTemplate = require("./templates/userForm.js");
const TASKS = [
  {id: 1, title: "Trabalhar", done: false},
  {id: 2, title: "Durmir", done: true},
];

const USER = {name: "Caio", email: "caio@mail.com"};

window.onload = () => {

  let main = document.querySelector("main");
  // main.innerHTML = TasksTemplate.render(TASKS);
  // main.innerHTML = TaskFormTemplate.render();
  // main.innerHTML = SigninTemplate.render();
  // main.innerHTML = SignupTemplate.render();
  main.innerHTML = UserFormTemplate.render(USER);

};
