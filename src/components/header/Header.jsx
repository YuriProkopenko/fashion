import logo from "../../graphics/icons/logo.svg";
import Menu from "./Menu";

import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [links, setLinks] = useState([
    "CATALOGUE",
    "FASHION",
    "FAVOURITE",
    "LIFESTYLE",
    "SIGN UP",
  ]);

  return (
    <header className={styles["wrapper"]}>
      <div className={styles["logo"]}>
        <img className={styles["logo-icon"]} src={logo} alt="logo.svg" />
        <span className={styles["logo-title"]}>FASHION</span>
      </div>
      <Menu links={links} />
    </header>
  );
};

export default Header;
