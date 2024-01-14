import React, { useState } from "react";
import styles from "./button.module.css";

const buttons = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

export default function Button({ getValue }) {
  return (
    <div className={styles.buttoncontainer}>
      {buttons.map((items) => {
        return (
          <button
            key={items}
            className={styles.button}
            onClick={() => getValue(items)}
          >
            {items}
          </button>
        );
      })}
    </div>
  );
}
