exports.render = () => {
  return `<form>
    <div class="list">
      <label class="item item-input">
        <input type="text" placeholder="Nome da tarefa">
      </label>
    </div>
    <div class="padding">
      <button class="button button-positive button-block">
        <i class="ion-compose"></i> Salvar
      </button>
    </div>
  </form>`;
};
