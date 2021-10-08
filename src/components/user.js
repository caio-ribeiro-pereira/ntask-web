const NTask = require('../ntask.js');
const Template = require('../templates/user.js');

class User extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.renderUserData();
  }

  addEventListener() {
    this.userCancelClick();
  }

  renderUserData() {
    this.request.get('/user')
      .then(res => {
        this.body.innerHTML = Template.render(res.data);
        this.addEventListener();
      })
      .catch(err => this.emit('error', err))
    ;
  }

  userCancelClick() {
    const btn = this.body.querySelector('[data-remove-account]');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Tem certeza que deseja excluir sua conta?')) {
        this.request.delete('/user')
          .then(() => this.emit('remove-account'))
          .catch(() => this.emit('remove-error', err))
        ;
      }
    });
  }
}

module.exports = User;
