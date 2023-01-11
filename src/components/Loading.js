export default class Loading {
  #app;
  #state;
  #target;

  constructor(params) {
    this.#app = params.$app;
    this.#state = params.initState;

    this.createTarget();
    this.render();
  }

  createTarget = () => {
    this.#target = document.createElement("div");
    this.#target.setAttribute(
      "class",
      "loading w-full h-full bg-gray-800 bg-opacity-90 absolute z-50 top-0 left-0"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
    <div class="content">
      <img class="mt-30" src="/src/assets/images/nyan-cat.gif" />
    </div>`;
    this.#target.style.display = this.#state ? "block" : "none";
  };
}
