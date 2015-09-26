var ListTasksTemplate = require("./templates/listTasks.js");
var NewTaskTemplate = require("./templates/newTask.js");
var SigninTemplate = require("./templates/signin.js");
var SignupTemplate = require("./templates/signup.js");
const TASKS = [
  {id: 1, title: "Trabalhar", done: false},
  {id: 2, title: "Durmir", done: true},
];

window.onload = () => {

  var main = document.querySelector("main");
  // main.innerHTML = ListTasksTemplate.render(TASKS);
  main.innerHTML = NewTaskTemplate.render();
  // main.innerHTML = SigninTemplate.render();
  // main.innerHTML = SignupTemplate.render();


};
