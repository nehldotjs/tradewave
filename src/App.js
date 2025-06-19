import React from "react";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

import ComponentScreensHandler from "./ComponentScreensHandler";
import { PropDataHandler } from "./Context/PropDataHandler";
import "./app.css";
import { BalanceProvider } from "./Context/BalanceProvider";

const App = () => {
  return (
    <div className="App">
      <BalanceProvider>
        <AuthContextProvider>
          <PropDataHandler>
            <Router>
              <ComponentScreensHandler />
            </Router>
          </PropDataHandler>
        </AuthContextProvider>
      </BalanceProvider>
    </div>
  );
};

export default App;
