const TinyEmitter = require('tiny-emitter');
const axios = require('axios');

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = axios.create({
      baseURL: 'https://localhost:3000',
      headers: {
        authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
  }
}
module.exports = NTask;