import React from "react";
import styles from "./Logo.module.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div>
      <img class={styles.icon} src={logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
