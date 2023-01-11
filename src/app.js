import Loading from "./components/Loading.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";

// 데이터 캐시
const cashe = {};

export default class App {
  #app;
  #state;
  #loading;
  #header;
  #dashboard;

  constructor(app) {
    this.#app = app;
    this.#state = {
      isLoading: false,
      dashboardData: null,
    };

    // create component
    this.#loading = new Loading({
      $app: this.#app,
      initState: this.#state.isLoading,
    });

    this.initContent();
  }

  initContent = () => {
    this.#header = new Header({ $app: this.#app, initState: {} });
    this.#dashboard = new Content({ $app: this.#app, initState: {} });
  };

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
