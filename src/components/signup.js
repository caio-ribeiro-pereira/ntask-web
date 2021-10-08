const NTask = require('../ntask.js');
const Template = require('../templates/signup.js');

class Signup extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector('[data-name]').focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
  }

  formSubmit() {
    const form = this.body.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = e.target.querySelector('[data-name]');
      const email = e.target.querySelector('[data-email]');
      const password = e.target.querySelector('[data-password]');
      const body = {
        name: name.value,
        email: email.value,
        password: password.value
      };

      this.request.post('/users', body)
        .then(res => this.emit('signup', res.data))
        .catch(err => this.emit('error', err))
      ;
    });
  }
}

module.exports = Signup;
