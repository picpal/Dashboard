export default class Header {
  #app;
  #state;
  #target;

  constructor(params) {
    this.#app = params.$app;
    this.#state = {
      period: 7,
    };

    this.createTarget();
    this.render();
  }

  createTarget = () => {
    this.#target = document.createElement("header");
    this.#target.setAttribute(
      "class",
      "h-20 w-full bg-gray-800 flex flex-inline"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
      <div class="pt-0.5">
        <h1 class="h-full w-20 text-center text-white mt-7">
          <i class="fa-regular fa-b fa-xl"></i>
          <i class="fa-regular fa-w fa-xl -ml-1.5"></i>
        </h1>
      </div>

      <div class="w-full flex flex-inline justify-end">
        <div class="pt-0.5">
          <select name="" id="" class="h-9 w-52 block mt-5 p-2 rounded-md bg-white border border-gray-400 text-sm">
            <option value="7">for 7days</option>
            <option value="30">for 30days</option>
          </select>
        </div>

        <div>
          <div class="text-white mt-7 pl-6 pr-4">Status</div>
        </div>
      </div>
    `;
  };
}
