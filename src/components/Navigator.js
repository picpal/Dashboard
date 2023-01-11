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
    this.#target.setAttribute(
      "class",
      "w-20 h-full bg-gray-800 absolute top-0 left-0 z-10"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
    <div>
      <h2 class='hidden'>MENU</h2>
      <ul class="text-white text-center mt-9">
        <li>
          <a class="block w-full cursor-pointer">
            <i class="fa-xl fa-solid fa-chart-simple"></i>
          </a>
        </li>
      </ul>
    </div>`;
  };
}
