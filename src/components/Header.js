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
    this.#target.setAttribute("class", "h-20 w-full bg-gray-800");
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
      <div>
        <h1>logo</h1>
      </div>

      <div>
        <select name="" id="">
          <option value="7">for 7days</option>
          <option value="30">for 30days</option>
        </select>
      </div>

      <div>
        <div><img src="" alt=""></div>
        <div>user name</div>
      </div>
    `;
  };
}
