import { request, fakeRequest } from "../api/fetch.js";
import { deepCopy } from "../util/util.js";

export default class CountBoard {
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
  }

  createTarget = () => {
    this.#target = document.createElement("div");
    this.#target.setAttribute(
      "class",
      "w-1/2 flex flex-end flex-row flex-wrap gap-6"
    );
    this.#app.appendChild(this.#target);
  };

  setState = (newState) => {
    this.#state = newState;
    this.render();
  };

  // @fix require refactoring, low readability
  render = () => {
    this.#target.innerHTML = `
        <!-- 성공 건수 -->
        <div class="pt-5 pb-4 flex-grow flex-shrink-1 w-5/12 rounded-lg bg-gray-800">
          <div class="ratio_circle m-auto rounded-full bg-green-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
          <div class="count mt-3 text-white text-center">11,220 건</div>
          <div class="description -mt-1 text-white text-center">total Success count</div>
        </div>

        <!-- 실패 건수 -->
        <div class="pt-5 pb-4 flex-grow flex-shrink-1 w-5/12 rounded-lg bg-gray-800">
          <div class="ratio_circle m-auto rounded-full bg-red-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
          <div class="count mt-3 text-white text-center">11,220 건</div>
          <div class="description -mt-1 text-white text-center">total fail count</div>
        </div>

        <!-- 통신장애 건수 -->
        <div class="pt-5 pb-4 flex-grow flex-shrink-1 w-5/12 rounded-lg bg-gray-800">
          <div class="ratio_circle m-auto rounded-full bg-orange-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
          <div class="count mt-3 text-white text-center">11,220 건</div>
          <div class="description -mt-1 text-white text-center">total error count</div>
        </div>

        <!-- 타임아웃 건수 -->
        <div class="pt-5 pb-4 flex-grow flex-shrink-1 w-5/12 rounded-lg bg-gray-800">
          <div class="ratio_circle m-auto rounded-full bg-yellow-400 w-20 h-20 text-center text-white font-normal text-2xl pt-6">55%</div>
          <div class="count mt-3 text-white text-center">11,220 건</div>
          <div class="description -mt-1 text-white text-center">total timeout count</div>
        </div>
    `;
  };
}
