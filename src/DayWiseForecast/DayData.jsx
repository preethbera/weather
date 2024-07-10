import styles from "./daywiseforecast.module.css";
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

function DayData({ date, temp, icon, pop }) {
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

  return (
    <div className={styles.maincont}>
      <span className={styles.date}>{date}</span>
      <span className={styles.temp}>{temp}</span>
      <img src={icons[icon]} alt="weather_icon" />
      <span className={styles.pop}>{pop}</span>
    </div>
  );
}

export default DayData;
