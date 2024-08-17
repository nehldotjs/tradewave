import React from "react";

import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

import ComponentScreensHandler from "./ComponentScreensHandler";
import { PropDataHandler } from "./Context/PropDataHandler";

const App = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
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