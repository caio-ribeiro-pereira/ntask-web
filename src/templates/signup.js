exports.render = () => {
  return `<form>
    <div class="list">
      <label class="item item-input">
        <input type="text" placeholder="Nome">
      </label>
      <label class="item item-input">
        <input type="text" placeholder="Email">
      </label>
      <label class="item item-input">
        <input type="password" placeholder="Senha">
      </label>
    </div>
    <div class="padding">
      <button class="button button-positive button-block">
        <i class="ion-thumbsup"></i> Cadastrar
      </button>
    </div>
  </form>`;
};
