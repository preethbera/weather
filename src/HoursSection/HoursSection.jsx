import styles from "./hourssection.module.css";
import HoursInfo from "./HourInfo";

//   time: data.list[i].dt_txt,
//   temp: Math.round(Number(data.list[i].main.temp)),
//   icon: data.list[i].weather[0].icon,
//   pop: 100 * Number(data.list[i].pop),

function HoursSection({ data }) {
  let hourlyForecast = [];
  for (let i = 0; i < 8; i++) {
    hourlyForecast[i] = {
      time: data.list[i].dt_txt.substring(11, 16),
      temp: Math.round(Number(data.list[i].main.temp)),
      icon: data.list[i].weather[0].icon,
      pop: Math.round(100 * Number(data.list[i].pop)),
    };
  }
  return (
    <div className={styles.hourssec}>
      <h2 className={styles.secHeading}>Hourly Forecast</h2>
      {hourlyForecast.map((hourData, index) => (
        <HoursInfo
          key={index}
          time={hourData.time}
          temp={`${hourData.temp} °C`}
          icon={hourData.icon}
          pop={`${hourData.pop} %`}
        ></HoursInfo>
      ))}
    </div>
  );
}

export default HoursSection;
