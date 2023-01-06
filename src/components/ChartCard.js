export default class ChartCard {
  #app;
  #state;
  #target;

  constructor({ $app, id, title, selectBoxData, chartData }) {
    this.#app = $app;
    this.#state = {
      id,
      title,
      selectBoxData,
      chartData,
    };

    this.createTarget();
    this.render();
  }

  createTarget = () => {
    this.#target = document.createElement("div");
    this.#target.setAttribute(
      "class",
      "p-5 pl-6 w-4/12 h-72 rounded-lg bg-gray-800"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
      <div class="flex flex-row">
        <h3 class="text-white w-6/12">${this.#state.title}</h3>
        <select name="" class="h-9 w-6/12 block p-2 rounded-md bg-white border border-gray-400 text-sm">
          <option value="">A기관</option>
          <option value="">B기관</option>
        </select>
      </div>

      <div class="">
        <div id="piechart" class="w-10/12"></div>
      </div>
    `;
  };
}
