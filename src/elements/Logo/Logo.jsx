import React from "react";
import styles from "./Logo.module.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className={styles.icon}>
      <img src={logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
