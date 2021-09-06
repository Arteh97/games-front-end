import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as themes from "./contexts/themes.json";
import { setToLS } from "./utils/storage";

const Index = () => {
  setToLS("all-themes", themes.default);

  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
