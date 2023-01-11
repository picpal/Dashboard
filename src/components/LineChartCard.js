import { request, fakeRequest } from "../api/fetch.js";
import { deepCopy } from "../util/util.js";

export default class LineChartCard {
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
  }

  createTarget = () => {
    this.#target = document.createElement("div");
    this.#target.setAttribute(
      "class",
      "w-1/2 rounded-lg p-2 pt-4 pb-4 bg-gray-800"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
    this.chartRender();
  };

  render = () => {
    const charId = `chart_${this.#boardDiv}_${this.#state.id}`;

    this.#target.innerHTML = `
      <div class="flex flex-row">
        <h3 class="text-white w-6/12">${this.#state.title}</h3>
      </div>
      <div class="mt-11">
        <div id="${charId}" class="w-full"></div>
      </div>
    `;
  };

  chartRender = () => {
    // api request
    const lineChartData = ["data1", 100, 200, 100, 30, 300];

    var chart = c3.generate({
      bindto: `#chart_${this.#boardDiv}_${this.#state.id}`,
      data: {
        columns: [lineChartData],
        colors: {
          data1: d3.rgb(255, 175, 200),
        },
      },
      type: "bar",
      size: {
        height: 250,
      },
      legend: {
        position: "bottom",
      },
    });
  };
}
