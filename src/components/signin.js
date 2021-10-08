const NTask = require('../ntask.js');
const Template = require('../templates/signin.js');

class Signin extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector('[data-email]').focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
    this.signupClick();
  }

  formSubmit() {
    const form = this.body.querySelector('form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = e.target.querySelector('[data-email]');
      const password = e.target.querySelector('[data-password]');
      const body = {
        email: email.value,
        password: password.value
      };

      this.request.post('/token', body)
        .then(res => this.emit('signin', res.data.token))
        .catch(err => this.emit('error', err))
      ;
    });
  }

  signupClick() {
    const signup = this.body.querySelector('[data-signup]');
    signup.addEventListener('click', (e) => {
      e.preventDefault();
      this.emit('open_signup');
    });
  }
}

module.exports = Signin;
