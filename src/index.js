import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import CoinPage from "./components/CoinPage";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Charts coinData={coinData} /> */}

        <Route
          exact
          path="/"
          render={props => {
            return <Charts {...props} coinData={coinData} />;
          }}
        />
        <Route
          exact
          path={coinData.map(coin => {
            return `/${coin.id}`;
          })}
          render={props => {
            return <CoinPage {...props} />;
          }}
        />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
