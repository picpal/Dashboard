export default class TotalBoard {
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
    this.#target.setAttribute("class", "flex flex-row gap-6");
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  render = () => {
    this.#target.innerHTML = `
        <h2 class="hidden">전체 현황</h2>

        <div class="w-4/12 flex flex-row gap-6">
          <!-- 성공 건수 -->
          <div id="total_success_info" class="p-2 pt-5 pb-4 w-6/12 rounded-lg bg-gray-800">
            <div class="ratio_circle m-auto rounded-full bg-green-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
            <div class="count mt-3 text-white text-center">11,220 건</div>
            <div class="description -mt-1 text-white text-center">total Success count</div>
          </div>

          <!-- 실패 건수 -->
          <div id="total_fail_info" class="p-2 pt-5 pb-4 w-6/12 rounded-lg bg-gray-800">
            <div class="ratio_circle m-auto rounded-full bg-red-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
            <div class="count mt-3 text-white text-center">11,220 건</div>
            <div class="description -mt-1 text-white text-center">total fail count</div>
          </div>
        </div>

        <div class="w-4/12 flex flex-row gap-6">
          <!-- 통신장애 건수 -->
          <div id="total_error_info" class="p-2 pt-5 pb-4 w-6/12 rounded-lg bg-gray-800">
            <div class="ratio_circle m-auto rounded-full bg-orange-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
            <div class="count mt-3 text-white text-center">11,220 건</div>
            <div class="description -mt-1 text-white text-center">total error count</div>
          </div>

          <!-- 타임아웃 건수 -->
          <div id="total_timeout_info" class="p-2 pt-5 pb-4 w-6/12 rounded-lg bg-gray-800">
            <div class="ratio_circle m-auto rounded-full bg-yellow-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
            <div class="count mt-3 text-white text-center">11,220 건</div>
            <div class="description -mt-1 text-white text-center">total timeout count</div>
          </div>
        </div>

        <!-- 기간 추세 그래프 -->
        <div id="total_flow_info" class="w-4/12 rounded-lg p-2 pt-4 pb-4 bg-gray-800">
          
        </div>
    `;
  };
}
