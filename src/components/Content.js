import TotalBoard from "./TotalBoard.js";
import AgencyBoard from "./AgencyBoard.js";
import ChnlBoard from "./ChnlBoard.js";
import Navigator from "./Navigator.js";

export default class Content {
  #app;
  #state;
  #target;
  #navigator;
  #totalBoard;
  #agencyBoard;
  #chnlBoard;

  constructor(params) {
    this.#app = params.$app;
    this.#state = {};

    this.createTarget();
    this.render();
    this.initDashboardContent();
  }

  initDashboardContent = () => {
    const $dashboard = this.getDashboard();

    this.#navigator = new Navigator({ $app: $dashboard, initState: {} });
    this.#totalBoard = new TotalBoard({ $app: $dashboard, initState: {} });
    this.#agencyBoard = new AgencyBoard({ $app: $dashboard, initState: {} });
    this.#chnlBoard = new ChnlBoard({ $app: $dashboard, initState: {} });
  };

  createTarget = () => {
    this.#target = document.createElement("div");
    this.#target.setAttribute("class", "flex flex-row pl-20 relative");
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  getDashboard = () => {
    return document.querySelector("#dashboard_wrap");
  };

  render = () => {
    this.#target.innerHTML = `<div id="dashboard_wrap" class="w-full p-12 pt-8 pb-8"></div>`;
  };
}
