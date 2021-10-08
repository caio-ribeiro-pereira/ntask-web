const renderTasks = tasks => {
  return tasks.map(task => {
    let doneIcon = 'ios-circle-outline';
    let doneLabel = 'none';
    if (task.done) {
      doneIcon = 'ios-checkmark';
      doneLabel = 'line-through';
    }
    return `<li class="item item-icon-left item-button-right">
      <i class="icon ion-${doneIcon}" data-done
        data-task-done="${task.done ? 'done' : ''}"
        data-task-id="${task.id}"></i>
      <span style="text-decoration: ${doneLabel}">
        ${task.title}
      </span>
      <button data-remove data-task-id="${task.id}"
        class="button button-assertive">
        <i class="ion-trash-a"></i>
      </button>
    </li>`;
  }).join('');
};

exports.render = tasks => {
  if (tasks && tasks.length) {
    return `<ul class="list">${renderTasks(tasks)}</ul>`;
  }
  return `<h4 class="text-center">Nenhuma tarefa ainda</h4>`;
};