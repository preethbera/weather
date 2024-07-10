import styles from "./currentweatherdata.module.css";
import Overview from "../OverviewComponent/Overview";
import Parameter from "../ParameterComponent/Parameter";
import logo1 from "../assets/thermometer.svg";
import logo2 from "../assets/wind.svg";
import logo3 from "../assets/droplet-03.svg";
import logo4 from "../assets/visibility.svg";
import logo5 from "../assets/pressure.svg";
import logo6 from "../assets/UVicon.svg";

function CurrentWeatherData(props) {
  return (
    <div className={styles.maincont}>
      <Overview
        location={props.location}
        temperature={`${props.temperature} °C`}
        weather={props.weather}
        icon={props.icon}
      ></Overview>
      <div className={styles.parametercont}>
        <Parameter
          paralogo={logo1}
          paraname={"Feels like"}
          paravalue={`${props.feelsLike} °C`}
        ></Parameter>
        <Parameter
          paralogo={logo2}
          paraname={"Wind"}
          paravalue={`${props.wind} km/h`}
        ></Parameter>
        <Parameter
          paralogo={logo3}
          paraname={"Humidity"}
          paravalue={`${props.humidity}%`}
        ></Parameter>
        <Parameter
          paralogo={logo6}
          paraname={"UV"}
          paravalue={"Weaker"}
        ></Parameter>
        <Parameter
          paralogo={logo4}
          paraname={"Visibility"}
          paravalue={`${props.visibility} km`}
        ></Parameter>
        <Parameter
          paralogo={logo5}
          paraname={"Pressure"}
          paravalue={`${props.pressure} hPa`}
        ></Parameter>
      </div>
    </div>
  );
}

export default CurrentWeatherData;
