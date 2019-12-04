import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CoinPage(props) {
  const [coinData, setCoinData] = useState({
    image: {},
    description: {}
  });

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins${props.location.pathname}`)
      .then(response => {
        setCoinData(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <div>
      <h2 className="coin__title">{coinData.name}</h2>
      <h4 className="coin__symbol">{coinData.symbol}</h4>
      <div className="coin__logo">
        <img src={coinData.image.thumb} height="40" alt={coinData.name} />
      </div>
  <p>{coinData.description.en}</p>
      {console.log(coinData)}
    </div>
  );
}
