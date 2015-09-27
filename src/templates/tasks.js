var renderTasks = (tasks) => {
  return tasks.map((task) => {
    return `
      <li data-task="${task.id}"
          class="item item-checkbox item-button-right">
        <label class="checkbox">
          <input type="checkbox"${task.done?' checked':''}>
        </label>
        ${task.title}
        <button class="button button-assertive">
          <i class="ion-trash-a"></i>
        </button>
      </li>
    `;
  }).join("");
};

exports.render = (tasks) => {
  return `<ul class="list">${renderTasks(tasks)}</ul>`;
};
