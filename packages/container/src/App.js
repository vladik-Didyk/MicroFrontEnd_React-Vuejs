import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </div>
=======
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
};
