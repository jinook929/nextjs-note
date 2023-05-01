"use client";

import React, { useEffect, useState } from "react";
import styles from "./PixelRippling.module.scss";

export default function PixelRippling() {
  const [boxes, setBoxes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    function fillViewport() {
      const boxSize = 32;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numBoxesWidth = Math.ceil(screenWidth / boxSize);
      const numBoxesHeight = Math.ceil(screenHeight / boxSize);
      const newBoxes = [];

      for (let i = 0; i < numBoxesHeight; i++) {
        for (let j = 0; j < numBoxesWidth; j++) {
          newBoxes.push(
            <div
              key={`${i}_${j}`}
              className={`${styles.box} ${
                (i + j) % 12 === 0
                  ? styles.dune
                  : (i + j) % 12 === 1
                  ? styles.blush
                  : (i + j) % 12 === 2
                  ? styles.jade
                  : (i + j) % 12 === 3
                  ? styles.glacier
                  : (i + j) % 12 === 4
                  ? styles.dawn
                  : (i + j) % 12 === 5
                  ? styles.magma
                  : (i + j) % 12 === 6
                  ? styles.grove
                  : (i + j) % 12 === 7
                  ? styles.monsoon
                  : (i + j) % 12 === 8
                  ? styles.ochre
                  : (i + j) % 12 === 9
                  ? styles.wine
                  : (i + j) % 12 === 10
                  ? styles.forest
                  : styles.navy
              }`}
            >
              <span className={styles.ripple1}></span>
              <span className={styles.ripple2}></span>
              <span className={styles.ripple3}></span>
            </div>
          );
        }
      }

      setBoxes(newBoxes);
    }

    fillViewport();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>{boxes}</div>
    </main>
  );
}
