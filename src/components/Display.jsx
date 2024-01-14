import React from "react";
import styles from "./display.module.css";

export default function Display({ input }) {
  return (
    <div>
      <input className={styles.display} value={input} type="text" />
    </div>
  );
}
