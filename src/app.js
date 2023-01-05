import Loading from "./components/Loading.js";

// 데이터 캐시
const cashe = {};

export default class App {
  #app;
  #state;
  #loading;

  constructor(app) {
    this.#app = app;
    this.#state = {
      isLoading: false,
      dashboardData: null,
    };

    this.#loading = new Loading({
      $app: this.#app,
      initState: this.#state.isLoading,
    });
  }

  setState = (newState) => {
    // update state
    this.#state = newState;

    // update component state
    this.#loading.setState(this.#state.isLoading);

    // rendering
  };

  init = async () => {
    try {
      this.setState({
        ...this.#state,
        isLoading: true,
      });

      // request data

      // set data
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        ...this.#state,
        isLoading: false,
      });
    }
  };
}
