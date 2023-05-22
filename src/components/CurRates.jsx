/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
//current conversion rates

/*
the current rates of conversion [curRates.jsx]

-USD to BTC and BTC to USD
=EURO to BTC and BTC to Euro
=GBP to BTC and BTC to GBP

*/
const CurRates = ({ cur }) => {
  let cUSD = cur.USD;
  let cEUR = cur.EUR;
  let cGBP = cur.GBP;

  return (
    <>
      <h1> Current Conversion Rates</h1>
      <div>
        <p>1 BTC is {1 / cur.USD}</p>
        <p>1 BTC is {1 / cur.EUR}</p>
        <p>1 BTC is {1 / cur.GBP}</p>
        <p> 1 USD to BTC: {cur.USD}</p>
        <p> 1 EUR to BTC: {cur.EUR} </p>
        <p> 1 GBP to BTC: {cur.GBP} </p>
        =====================
      </div>
    </>
  );
};
export default CurRates;
