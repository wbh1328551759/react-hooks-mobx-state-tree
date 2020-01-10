import React from "react";
import GitHubButton from "react-github-btn";
import logo from "./assets/mstlogo.png";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import { Provider, rootStore } from "./models/Root";

const App: React.FC = () => {
  return (
    <Provider value={rootStore}>
      <div className="container mx-auto">
        <img src={logo} alt="mst logo" className="block w-64 h-auto mx-auto" />
        <div className="relative">
          <h1 className="text-3xl font-bold text-center">
            react-hooks-mobx-state-tree
          </h1>
          <div className="absolute flex justify-center w-full mt-3">
            <GitHubButton
              href="https://github.com/impulse/react-hooks-mobx-state-tree"
              data-icon="octicon-star"
              data-size="large"
              data-show-count={true}
              aria-label="Star impulse/react-hooks-mobx-state-tree on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
        <Counter />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
