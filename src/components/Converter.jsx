/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Converter = ({ cur }) => {
  const [curType, setCurType] = useState("USD");
  const [curAmnt, setCurAmnt] = useState(1);
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState(false);

  const currencies = {
    USD: cur.USD,
    EUR: cur.EUR,
    GBP: cur.GBP,
  };

  const amountHandler = (e) => {
    setCurAmnt(e.target.value);
  };

  const currencyHandler = (e) => {
    if (e.target.value === "USD") {
      setIndex(0);
    } else if (e.target.value === "EUR") {
      setIndex(1);
    } else {
      setIndex(2);
    }
    setCurType(e.target.value);
  };

  const sortHandler = () => {
    setSort(!sort);
  };

  const sortCurrency = () => {
    if (sort) {
      return Object.keys(currencies)
        .sort((a, b) => currencies[b] - currencies[a])
        .reduce((acc, cur) => {
          acc[cur] = currencies[cur];
          return acc;
        }, {});
    } else {
      return Object.keys(currencies)
        .sort((a, b) => currencies[a] - currencies[b])
        .reduce((acc, cur) => {
          acc[cur] = currencies[cur];
          return acc;
        }, {});
    }
  };

  const sortedCurrencies = sortCurrency();

  return (
    <div>
      <h1>Bitcoin Converter</h1>

      <div className="flex justify-center">
        <div className="flex">
          <h3 className="flex justify-center"> Current Values</h3>
          {Object.entries(sortedCurrencies).map(([currency, rate]) => (
            <p key={currency}>
              1 BTC is {1 / rate} {currency}
            </p>
          ))}
          <button className="" onClick={sortHandler}>
            Sort
          </button>
        </div>
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
          {Object.keys(sortedCurrencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <p>
          {curAmnt} {curType} = {curAmnt / sortedCurrencies[curType]} BTC
        </p>
      </div>
    </div>
  );
};

export default Converter;
