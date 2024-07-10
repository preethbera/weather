import styles from "./error.module.css";
import { useState } from "react";

function Error(props) {
  function handleClick() {
    props.handleErrorMessage();
  }
  return (
    <div className={styles.backgroundcont}>
      <div className={styles.errorcont}>
        <div className={styles.buttoncont}>
          <span>Error Message</span>
          <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>
        </div>
        <div className={styles.errormessage}>{`${props.children}`}</div>
      </div>
    </div>
  );
}

export default Error;
