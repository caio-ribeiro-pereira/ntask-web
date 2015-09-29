exports.render = () => {
  return `
    <div class="tabs-striped tabs-color-calm">
      <div class="tabs">
        <a class="tab-item active" data-render="tasks">
          <i class="icon ion-home"></i>
        </a>
        <a class="tab-item" data-render="taskForm">
          <i class="icon ion-compose"></i>
        </a>
        <a class="tab-item" data-render="userForm">
          <i class="icon ion-gear-a"></i>
        </a>
      </div>
    </div>`;
};
