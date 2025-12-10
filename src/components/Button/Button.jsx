import React from "react";
import styles from "./Button.module.css";

function Button({ children, size, onClick }) {
  const buttonStyles = `${styles.button} ${styles[size]}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
