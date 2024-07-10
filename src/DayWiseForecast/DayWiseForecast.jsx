import styles from "./daywiseforecast.module.css";
import DayData from "./DayData";
// import { useState, useEffect } from "react";

function DayWiseForecast({ data }) {
  // let [dataDayWise, setDataDayWise] = useState([]);
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth() + 1;
  // const day = today.getDate() + 1;

  // try {

  //   for (let i = 0; ; i++) {
  //     let temp = `${year}-${month.toString().padStart(2, "0")}-${(day + i)
  //       .toString()
  //       .padStart(2, "0")}`;

  //     // for (let j = 0; j < data.list.length; j++) {
  //     //   if (temp == data.list[j].dt_txt.slice(0, 10)) {
  //     //     if (j == 0) {
  //     //       setDataDayWise([...dataDayWise, [data.list[j]]]);
  //     //       console.log(dataDayWise);
  //     //     } else {
  //     //       setDataDayWise([
  //     //         // ...dataDayWise.slice(0, dataDayWise.length - 1),
  //     //         // [...dataDayWise[dataDayWise.length - 1], data.list[j]],
  //     //       ]);
  //     //     }
  //     //   }
  //     // }
  //     if (temp == data.list[data.list.length - 1].dt_txt.slice(0, 10)) {
  //       console.log(dataDayWise);
  //       break;
  //     }
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className={styles.daywisecontainer}>
      <h2 className={styles.secHeading}>Daily Forecast</h2>
      <DayData
        date={`09-07-2024`}
        temp={`${32} °C`}
        icon={"03d"}
        pop={`${40} %`}
      ></DayData>
      <DayData
        date={`10-07-2024`}
        temp={`${30} °C`}
        icon={"10d"}
        pop={`${50} %`}
      ></DayData>
      <DayData
        date={`11-07-2024`}
        temp={`${28} °C`}
        icon={"10d"}
        pop={`${70} %`}
      ></DayData>
      <DayData
        date={`12-07-2024`}
        temp={`${31} °C`}
        icon={"09d"}
        pop={`${20} %`}
      ></DayData>
      <DayData
        date={`13-07-2024`}
        temp={`${33} °C`}
        icon={"11n"}
        pop={`${100} %`}
      ></DayData>
    </div>
  );
}

export default DayWiseForecast;
