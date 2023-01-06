import ChartCard from "./ChartCard.js";

export default class AgencyBoard {
  #app;
  #state;
  #target;
  #cards;

  constructor({ $app, initState }) {
    this.#app = $app;
    this.#state = {};
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

    // card conponent initialize
    const cards = this.#cards;
    for (let key in cards) {
      cards[key] = new ChartCard({
        $app: $cardWrap,
        id: key,
        title: this.getCardTitle(key),
        selectBoxData: [],
        chartData: {},
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
    let result = "";
    switch (id) {
      case "cetification":
        result = "인증";
        break;
      case "regis":
        result = "등록";
        break;
      case "approval":
        result = "승인";
        break;
    }

    return result;
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  // selectBox 이벤트가 발생한 영역에서의 랜더링만 새로 하기 위해 부모에서 이벤트 관리
  setCardData = (id) => {
    if (!id) return;

    // api request

    // parsing data

    // setSate card
    const card = this.#cards[id];
    card.setState({
      title: this.getCardTitle(id),
      selectBoxData: null,
      chartData: null,
    });
  };

  render = () => {
    this.#target.innerHTML = `
        <h2 class="hidden">기관 인증/등록/승인</h2>
        <div class="cardWrap flex flex-row gap-6"></div>
    `;
  };
}
