/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

/*
the c conversion rates [converter.jsx]
-allows the user to sort exchange rate with a button

*/
const converter = ({ cur }) => {
  const [curType, setCurType] = useState("USD"); //Types of Currency USD,GBP,EUR
  const [curAmnt, setCurAmnt] = useState(1); // Amount of currecny 1 for clarity;
  const [index, setIndex] = useState(0);
  const [click, setClick] = useState(false);
  const [sort, setSort] = useState(false);

  let cUSD = cur.USD;
  let cEUR = cur.EUR;
  let cGBP = cur.GBP;

  // let currencies = [cUSD, cEUR, cGBP];
  const currencies = {
    USD: cUSD,
    EUR: cEUR,
    GBP: cGBP,
  };

  const amountHandler = (e) => {
    setCurAmnt(e.target.value);
    console.log(e.target.value);
  };

  const currencyHandler = (e) => {
    if (e.target.value === "USD") {
      setIndex(0);
    } else if (e.target.value === "EUR") {
      setIndex(1);
    } else setIndex(2);
    setCurType(e.target.value);
    console.log(e.target.value);
  };

  function sortHandler() {
    //sort in ascending/descending order
    if (!sort) {
      setSort(true); //asc
    } else {
      setSort(false); //desc
    }
    sortCurrency();
  }

  function sortCurrency() {
    let data = {};
    if (sort) {
      data = {
        ...Object.values(currencies).sort(
          (a, b) => currencies[b] - currencies[a]
        ),
      };
    } else {
      data = {
        ...Object.values(currencies).sort(
          (a, b) => currencies[a] - currencies[b]
        ),
      };
    }
    let temp = {};
    for (let i in data) {
      temp[data[i]] = currencies[data[i]];
    }

    console.log(data);
    console.log(currencies);
  }
  console.log(currencies);
  return (
    <div>
      <h1>Bitcoin Converter</h1>

      <div>
        <h3> Current Values</h3>
        <p>1 BTC is {1 / cur.USD} USD</p>
        <p>1 BTC is {1 / cur.EUR} EUR</p>
        <p>1 BTC is {1 / cur.GBP} GBP</p>
        <button onClick={sortHandler}> sort </button>
      </div>

      <div>
        <h3> Choose a Currency:</h3>
        <input type="text" value={curAmnt} onChange={amountHandler}></input>
        <select
          className="currency-select"
          name="currencies"
          id="currencies"
          value={curType}
          onChange={currencyHandler}
        >
          <option value="USD"> USD</option>
          <option value="EUR"> EUR</option>
          <option value="GBP"> GBP</option>
        </select>

        <p>
          {curAmnt} {curType} = {curAmnt / currencies[index]} BTC
        </p>
      </div>
    </div>
  );
};

export default converter;
