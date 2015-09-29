exports.render = (path) => {
  let activeTasks = path === "tasks" ? "active" : "";
  let activeTaskForm = path === "taskForm" ? "active" : "";
  return `
    <div class="tabs-striped tabs-color-calm">
      <div class="tabs">
        <a data-path="tasks" class="tab-item ${activeTasks}">
          <i class="icon ion-home"></i>
        </a>
        <a data-path="taskForm" class="tab-item ${activeTaskForm}">
          <i class="icon ion-compose"></i>
        </a>
      </div>
    </div>`;
};
