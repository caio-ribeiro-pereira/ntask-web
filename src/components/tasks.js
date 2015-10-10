import NTask from "../ntask.js";
import Template from "../templates/tasks.js";
import Loading from "../templates/loading.js";

class Tasks extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }
  render() {
    this.renderTaskList(this);
  }
  addEventListener() {
    this.taskDoneCheckbox(this);
    this.taskRemoveClick(this);
  }
  renderTaskList(self) {
    const opts = {
      method: "GET",
      url: `${self.URL}/tasks`,
      json: true,
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    self.body.innerHTML = Loading.render();
    self.request(opts, (err, resp, data) => {
      if (err) {
        self.emit("error", err);
      } else {
        self.body.innerHTML = Template.render(data);
        self.addEventListener();
      }
    });
  }
  taskDoneCheckbox(self) {
    const dones = self.body.querySelectorAll("[data-done]");
    for(let i = 0, max = dones.length; i < max; i++) {
      dones[i].addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-task-id");
        const done = e.target.getAttribute("data-task-done");
        const opts = {
          method: "PUT",
          url: `${self.URL}/tasks/${id}`,
          headers: {
            authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            done: !done
          })
        };
        self.request(opts, (err, resp, data) => {
          if (err || resp.status === 412) {
            self.emit("update-error", err);
          } else {
            self.emit("update");
          }
        });
      });
    }
  }
  taskRemoveClick(self) {
    const removes = self.body.querySelectorAll("[data-remove]");
    for(let i = 0, max = removes.length; i < max; i++) {
      removes[i].addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Deseja excluir esta tarefa?")) {
          const id = e.target.getAttribute("data-task-id");
          const opts = {
            method: "DELETE",
            url: `${self.URL}/tasks/${id}`,
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
          self.request(opts, (err, resp, data) => {
            if (err || resp.status === 412) {
              self.emit("remove-error", err);
            } else {
              self.emit("remove");
            }
          });
        }
      });
    }
  }
}

module.exports = Tasks;
