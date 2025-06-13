import React from "react";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

import ComponentScreensHandler from "./ComponentScreensHandler";
import { PropDataHandler } from "./Context/PropDataHandler";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <PropDataHandler>
          <Router>
            <ComponentScreensHandler />
          </Router>
        </PropDataHandler>
      </AuthContextProvider>
    </div>
  );
};

export default App;