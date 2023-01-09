import { request, fakeRequest } from "./../api/fetch.js";
import { deepCopy } from "./../util/util.js";

export default class ChartCard {
  #app;
  #boardDiv;
  #target;
  #state = {};

  constructor({ $app, boardDiv, initState }) {
    this.#app = $app;
    this.#boardDiv = boardDiv;
    this.#state = deepCopy(initState);

    this.createTarget();
    this.render();
    this.chartRender();
    this.onChangeHandler();
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
    this.chartRender();
  };

  // @fix require refactoring, low readability
  render = () => {
    this.#target.innerHTML = `
      <div class="flex flex-row">
        <h3 class="text-white w-6/12">${this.#state.title}</h3>
        <select name="" data-chart-id="${
          this.#state.id
        }" class="h-9 w-6/12 block p-2 rounded-md bg-white border border-gray-400 text-sm">
          ${this.#state.selectBoxData
            .map((item) => {
              return `<option ${
                this.#state.selectOption === item.value ? "selected" : ""
              } value="${item.value}">${item.name}</option>`;
            })
            .join("")}
        </select>
      </div>

      <div class="">
        <div id="chart_${this.#boardDiv}_${
      this.#state.id
    }" class="w-10/12"></div>
      </div>
    `;
  };

  chartRender = () => {
    const { chartData } = fakeRequest(this.#state.id);

    const chartDonut = c3.generate({
      bindto: `#chart_${this.#boardDiv}_${this.#state.id}`,
      data: {
        json: [chartData],
        keys: {
          value: Object.keys(chartData),
        },
        type: "pie",
      },
      size: {
        height: 210,
      },
      legend: {
        position: "right",
      },
    });
  };

  onChangeHandler = () => {
    this.#target.addEventListener("change", (e) => {
      const $select = e.target.closest("select");
      const selectOption = $select.options[$select.selectedIndex].value;
      const dataSet = $select.dataset;

      if ($select && dataSet) {
        // real api request. parameter is url and jsonData
        // const chartData = request("url", { ... });

        // test data
        const { chartData } = fakeRequest(this.#state.id);

        // set State
        const newState = { ...this.#state, ...{ chartData, selectOption } };
        this.setState(newState);
      } else {
        alert("error");
      }
    });
  };
}
