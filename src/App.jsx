import Display from "./../src/components/Display";
import Button from "./../src/components/Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [input, setInput] = useState();

  function getValue(item) {
    if (item === "C") {
      setInput("");
    } else if (item === "=") {
      const result = eval(input);
      setInput(result);
    } else {
      const newValue = input + item;
      setInput(newValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display input={input} />
      <Button getValue={getValue} />
    </div>
  );
}

export default App;
