import EventEmitter from "events";

class NTask extends EventEmitter {
  constructor() {
    super();
    this.request = require("browser-request");
    this.URL = "http://localhost:3000";
  }
}

module.exports = NTask;
