import styles from "./navbar.module.css";
import logo from "./assets/clouded-weather-svgrepo-com.svg";
import { useState } from "react";

function Navbar({ newCity }) {
  let [searchValue, setSearchValue] = useState("");
  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  }
  function handleClick() {
    if (searchValue && searchValue.trim() !== "") {
      newCity(searchValue);
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.logocont}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span>Weather</span>
      </div>
      <div className={styles.searchbox}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M372-297q-118 0-200.5-82.5T89-580q0-118 82.5-200.5T372-863q118 0 200.5 82.5T655-580q0 46-12 83.5T611-431l216 217q18 19 18 44.5T826-126q-18 18-44 18t-44-18L523-341q-29 20-67.5 32T372-297Zm0-126q66 0 111.5-45.5T529-580q0-66-45.5-111.5T372-737q-66 0-111.5 45.5T215-580q0 66 45.5 111.5T372-423Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
