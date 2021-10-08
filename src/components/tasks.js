const NTask = require('../ntask.js');
const Template = require('../templates/tasks.js');

class Tasks extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.renderTaskList();
  }

  addEventListener() {
    this.taskDoneCheckbox();
    this.taskRemoveClick();
  }

  renderTaskList() {
    this.request.get('/tasks')
      .then(res => {
        this.body.innerHTML = Template.render(res.data);
        this.addEventListener();
      })
      .catch(err => this.emit('error', err))
    ;
  }

  taskDoneCheckbox() {
    const dones = this.body.querySelectorAll('[data-done]');

    for(let i = 0; i < dones.length; i++) {
      dones[i].addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('data-task-id');
        const done = e.target.getAttribute('data-task-done');
        const body = {
          done: !done
        };
        this.request.put(`/tasks/${id}`, body)
          .then(() => this.emit('update'))
          .catch(err => this.emit('update-error', err))
        ;
      });
    }
  }

  taskRemoveClick() {
    const removes = this.body.querySelectorAll('[data-remove]');
    for(let i = 0; i < removes.length; i++) {
      removes[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Deseja excluir esta tarefa?')) {
          const id = e.target.getAttribute('data-task-id');
          this.request.delete(`/tasks/${id}`)
            .then(() => this.emit('remove'))
            .catch(err => this.emit('remove-error', err))
          ;
        }
      });
    }
  }
}

module.exports = Tasks;
