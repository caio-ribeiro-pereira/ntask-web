const NTask = require('../ntask.js');
const Template = require('../templates/taskForm.js');

class TaskForm extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector('[data-task]').focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
  }

  formSubmit() {
    const form = this.body.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = e.target.querySelector('[data-task]');
      const body = {
        title: task.value
      };
      this.request.post('/tasks', body)
        .then(() => this.emit('submit'))
        .catch(err => this.emit('error', err))
      ;
    });
  }
}

module.exports = TaskForm;
