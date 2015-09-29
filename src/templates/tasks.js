var renderTasks = (tasks) => {
  return tasks.map((task) => {
    return `
      <li data-task="${task.id}" class="item item-button-right">
        <div class="item-checkbox">
          <label class="checkbox">
            <input type="checkbox"${task.done?' checked':''}>
          </label>
          ${task.title}
        </div>
        <button class="button button-assertive">
          <i class="ion-trash-a"></i>
        </button>
      </li>
    `;
  }).join("");
};

exports.render = (tasks) => {
  let taskList = renderTasks(tasks);
  if (taskList)
    return `<ul class="list">${taskList}</ul>`;
  return `<h4 class="text-center">Nenhuma tarefa ainda</h4>`;
};
