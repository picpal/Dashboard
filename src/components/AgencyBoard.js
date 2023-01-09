import ChartCard from "./ChartCard.js";

export default class AgencyBoard {
  #app;
  #state = {};
  #target;
  #cards;

  constructor({ $app, initState = {} }) {
    this.#app = $app;
    this.#state = initState;
    this.#cards = {
      cetification: null,
      regis: null,
      approval: null,
    };

    this.createTarget();
    this.render();
    this.initCard();
  }

  initCard = () => {
    // agency card wrapper
    const $cardWrap = this.getCardWrap();

    // agency list
    const selectBoxData = [
      { name: "현대카드", value: "C007" },
      { name: "블루월넛", value: "BWPG" },
    ];

    // card conponent initialize
    const cards = this.#cards;
    for (let key in cards) {
      cards[key] = new ChartCard({
        $app: $cardWrap,
        boardDiv: "agency",
        initState: {
          id: key,
          title: this.getCardTitle(key),
          selectBoxData,
          selectOption: "", // select box initail value
        },
      });
    }
  };

  createTarget = () => {
    this.#target = document.createElement("section");
    this.#target.setAttribute("id", "agency_board");
    this.#target.setAttribute("class", "mt-6");
    this.#app.appendChild(this.#target);
  };

  getCardWrap = () => {
    return document.querySelector("#agency_board .cardWrap");
  };

  getCardTitle = (id) => {
    const cartTitle = {
      cetification: "기관 인증",
      regis: "기관 등록",
      approval: "기관 승인",
    };

    return cartTitle[id] || "No Title";
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
        <h2 class="hidden">기관 인증/등록/승인</h2>
        <div class="cardWrap flex flex-row gap-6"></div>
    `;
  };
}
