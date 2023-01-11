import PieChartCard from "./PieChartCard.js";

export default class ChnlBoard {
  #app;
  #state;
  #target;
  #cards;

  constructor({ $app, initState = {} }) {
    this.#app = $app;
    this.#state = initState;
    this.#cards = {
      payment: null,
      regis: null,
      approval: null,
    };

    this.createTarget();
    this.render();
    this.initCard();
  }

  initCard = () => {
    // chnl card wrapper
    const $cardWrap = this.getCardWrap();

    // chnl list
    const selectBoxData = [
      { name: "대한항공", value: "DPAY" },
      { name: "EPIT", value: "EPIT" },
      { name: "I-Order", value: "IORD" },
      { name: "통합페이", value: "KIAT" },
      { name: "카라이프", value: "CLIF" },
    ];

    // card conponent initialize
    const cards = this.#cards;
    for (let key in cards) {
      cards[key] = new PieChartCard({
        $app: $cardWrap,
        initState: {
          id: key,
          boardDiv: "chnl",
          title: this.getCardTitle(key),
          selectBoxData,
          selectOption: "", // select box initail value
        },
      });
    }
  };

  createTarget = () => {
    this.#target = document.createElement("section");
    this.#target.setAttribute("id", "chnl_board");
    this.#target.setAttribute("class", "mt-6");
    this.#app.appendChild(this.#target);
  };

  getCardWrap = () => {
    return document.querySelector("#chnl_board .cardWrap");
  };

  getCardTitle = (id) => {
    const cartTitle = {
      payment: "채널 결제",
      regis: "채널 등록",
      approval: "채널 승인",
    };

    return cartTitle[id] || "No Title";
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
        <h2 class="hidden">채널 결제/등록/승인</h2>
        <div class="cardWrap flex flex-row gap-6"></div>
    `;
  };
}
