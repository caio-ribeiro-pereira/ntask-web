exports.render = (user) => {
  return `<form>
    <div class="list">
      <label class="item item-input item-stacked-label">
        <span class="input-label">Email</span>
        ${user.email}
      </label>
      <label class="item item-input item-stacked-label">
        <span class="input-label">Nome</span>
        <input type="text" value="${user.name}" data-name>
      </label>
      <label class="item item-input item-stacked-label">
        <span class="input-label">Mudar senha</span>
        <input type="password" data-password>
      </label>
    </div>
    <div class="padding">
      <button class="button button-positive button-block">
        <i class="ion-person"></i> Atualizar
      </button>
    </div>
  </form>`;
};
