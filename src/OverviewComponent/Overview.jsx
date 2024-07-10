import { useState, useEffect } from "react";
import styles from "./overview.module.css";
import d01 from "../assets/animated/day.svg";
import n01 from "../assets/animated/night.svg";
import d02 from "../assets/animated/cloudy-day-2.svg";
import n02 from "../assets/animated/cloudy-night-2.svg";
import d03 from "../assets/animated/cloudy.svg";
import n03 from "../assets/animated/cloudy.svg";
import d04 from "../assets/animated/cloudy.svg";
import n04 from "../assets/animated/cloudy.svg";
import d09 from "../assets/animated/rainy-6.svg";
import n09 from "../assets/animated/rainy-6.svg";
import d10 from "../assets/animated/rainy-1.svg";
import n10 from "../assets/animated/rainy-5.svg";
import d11 from "../assets/animated/thunder.svg";
import n11 from "../assets/animated/thunder.svg";
import d13 from "../assets/animated/snowy-6.svg";
import n13 from "../assets/animated/snowy-6.svg";
import d50 from "../assets/animated/mist.svg";
import n50 from "../assets/animated/mist.svg";

function Overview({ location, temperature, weather, icon }) {
  const icons = {
    "01d": d01,
    "02d": d02,
    "03d": d03,
    "04d": d04,
    "09d": d09,
    "10d": d10,
    "11d": d11,
    "13d": d13,
    "50d": d50,
    "01n": n01,
    "02n": n02,
    "03n": n03,
    "04n": n04,
    "09n": n09,
    "10n": n10,
    "11n": n11,
    "13n": n13,
    "50n": n50,
  };
  const bgImg = {
    "01d": styles.sunnyweather,
    "02d": styles.sunnyweather,
    "03d": styles.cloudy,
    "04d": styles.cloudy,
    "09d": styles.rainy,
    "10d": styles.rainy,
    "11d": styles.thunder,
    "13d": styles.snowfall,
    "50d": styles.mist,
    "01n": styles.clearnight,
    "02n": styles.cloudynight,
    "03n": styles.cloudy,
    "04n": styles.cloudy,
    "09n": styles.rainy,
    "10n": styles.rainy,
    "11n": styles.thunder,
    "13n": styles.snowfall,
    "50n": styles.mist,
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let [time, setTime] = useState(new Date());
  let currentDate = new Date();
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  let showTime =
    time.getHours().toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    time.getSeconds().toString().padStart(2, "0");

  let dayDate = `${dayNames[currentDate.getDay()]}, ${currentDate.getDate()} ${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;
  return (
    <div className={bgImg[icon]}>
      <div className={styles.maincont}>
        <div className={styles.toppart}>
          <span className={styles.location}>{location}</span>
          <span className={styles.time}>{showTime}</span>
        </div>
        <div className={styles.bottompart}>
          <div className={styles.leftcont}>
            <span className={styles.temperature}>{temperature}</span>
            <span className={styles.weather}>{weather}</span>
            <span className={styles.date}>{dayDate}</span>
          </div>
          <div className={styles.imgcont}>
            <img src={icons[icon]} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
