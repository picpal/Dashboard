export default class Navigator {
  #app;
  #state;
  #target;

  constructor(params) {
    this.#app = params.$app;
    this.#state = {};

    this.createTarget();
    this.render();
  }

  createTarget = () => {
    this.#target = document.createElement("nav");
    this.#target.setAttribute("class", "w-20");
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `<div class="bg-gray-800 w-20 h-screen absolute top-0 left-0 z-50"></div>`;
  };
}
