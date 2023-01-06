export default class ChnlBoard {
  #app;
  #state;
  #target;

  constructor(params) {
    this.#app = params.$app;
    this.#state = {};

    this.createTarget();
    this.render();
  }

  createTarget = () => {
    this.#target = document.createElement("section");
    this.#target.setAttribute("id", "chnl_board");
    this.#target.setAttribute("class", "mt-6");
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
      <h2 class="hidden">채널 결제/등록/승인</h2>
      <div class="flex flex-row gap-6">
        <!-- 결제 건수 -->
        <div id="chnl_payment_info" class="p-5 pl-6 w-4/12 h-72 rounded-lg bg-gray-800 flex-col">
          <h3 class="text-white">채널결제</h3>
        </div>

        <!-- 등록 건수 -->
        <div id="chnl_regis_info" class="p-5 pl-6 w-4/12 h-72 rounded-lg bg-gray-800">
          <h3 class="text-white">채널등록</h3>
        </div>

        <!-- 승인 건수 -->
        <div id="chnl_approval_info" class="p-5 pl-6 w-4/12 h-72 rounded-lg bg-gray-800">
          <h3 class="text-white">채널승인</h3>
        </div>
      </div>
    `;
  };
}
