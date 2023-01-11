import CountBoard from "./CountBoard.js";
import LineChartCard from "./LineChartCard.js";

export default class TotalBoard {
  #app;
  #state;
  #target;
  #cards;

  constructor(params) {
    this.#app = params.$app;
    this.#state = {};
    this.#cards = {
      count: null,
      periodFlow: null,
    };

    this.createTarget();
    this.render();
    this.initCard();
  }

  createTarget = () => {
    this.#target = document.createElement("section");
    this.#target.setAttribute("id", "total_board");
    this.#target.setAttribute("class", "");
    this.#app.appendChild(this.#target);
  };

  initCard = () => {
    const $cardWrap = this.getCardWrap();

    this.#cards.count = new CountBoard({
      $app: $cardWrap,
      boardDiv: "total",
      initState: {
        id: "count",
        title: "발생율",
      },
    });

    this.#cards.periodFlow = new LineChartCard({
      $app: $cardWrap,
      boardDiv: "total",
      initState: {
        id: "periodFlow",
        title: "기간 추세",
      },
    });
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  getCardWrap = () => {
    return document.querySelector("#total_board .cardWrap");
  };

  render = () => {
    this.#target.innerHTML = `
        <h2 class="hidden">전체 현황</h2>
        <div class="cardWrap flex flex-row gap-6"></div>
    `;
  };
}
