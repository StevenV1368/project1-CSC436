import "./App.css";
import Time from "./components/Time.jsx";
import Converter from "./components/Converter";
import CurRates from "./components/curRates";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function App() {
  const [currency, setCurrency] = useState({});

  const fetchAPIData = async () => {
    const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const {
      data: { bpi },
    } = await axios.get(URL);

    //Make array of bpi values. uses reduce to reduce the keys to rate_float
    const bpiData = Object.keys(bpi).reduce((acc, currentVal) => {
      //acc is the array and currentVal is the index of the array
      //currentVal will either be USD,EUR or GBP
      acc[currentVal] = bpi[currentVal].rate_float;

      return acc;
    }, {});

    setCurrency(bpiData);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <>
      <CurRates cur={currency} />
      <Converter cur={currency} />
      <Time />
    </>
  );
}

export default App;
