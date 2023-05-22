/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

//should contain the datas date
const Time = () => {
  const [time, setTime] = useState({});
  const [estTime, setEstTime] = useState(Date());
  const [refresh, setRefresh] = useState(false);
  const [ttr, setTTR] = useState(); // Time to Refresh

  const fetchAPIData = async () => {
    const API = " https://api.coindesk.com/v1/bpi/currentprice.json"; //The API link
    const {
      data: { time }, //gets the time from the api
    } = await axios.get(API); // gets API

    setTime(time);
    setEstTime(Date.parse(time["updated"]).toLocaleString());
  };
  useEffect(() => {
    fetchAPIData();
  }, []);

  const refreshStatus = () => {
    setRefresh(false);
    setTTR(
      setTimeout(() => {
        setRefresh(true);
      }, 300000)
    );
  };
  return (
    <>
      <div>
        =====================
        <p data-testid="last">Last updated:</p>
        <p> {time["updated"]}</p>
      </div>

      <div>
        <p data-testid="local">Local time: {Date(estTime)}</p>
        <button onClick={refreshStatus}>Refresh</button>
      </div>
    </>
  );
};

export default Time;
