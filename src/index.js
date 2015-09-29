import App from "./app.js"

window.onload = () => {
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");
  new App(main, footer).init();
};
