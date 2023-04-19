"use client";

import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  console.log("Hello! from ### client ###");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className={styles.counterTitle}>Counter</h2>
      <p className={styles.count}>{count}</p>
      <div className={styles.btns}>
        <button onClick={() => setCount((num) => num + 1)}>Increase</button>
        <button onClick={() => setCount((num) => num - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
