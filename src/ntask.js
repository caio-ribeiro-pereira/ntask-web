import TinyEmitter from "tiny-emitter";
import Request from "browser-request";

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = Request;
    this.URL = "https://localhost:3000";
  }
}

module.exports = NTask;
