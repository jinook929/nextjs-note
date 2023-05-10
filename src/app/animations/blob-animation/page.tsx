"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import BlobAnimation from "@/components/BlobAnimation";

export default function NowstalgiaPage() {
  const blobHero = useRef<HTMLDivElement>(null);
  const pronunciation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationDuration = 2000;
    console.log(blobHero.current?.childNodes);
    let nowstalgiaSpans: ChildNode[] = [];
    blobHero.current?.childNodes.forEach((child) => {
      nowstalgiaSpans = Array.from(child.childNodes);
    });

    function animateSpans() {
      nowstalgiaSpans.forEach((span, index) => {
        setTimeout(() => {
          if (span.nodeType === Node.ELEMENT_NODE) {
            const element = span as Element;
            element.classList.add(styles.animate);
          }
        }, index * animationDuration);

        setTimeout(() => {
          if (span.nodeType === Node.ELEMENT_NODE) {
            const element = span as Element;
            element.classList.remove(styles.animate);
          }
        }, (index + 1) * animationDuration);
      });

      setTimeout(animateSpans, nowstalgiaSpans.length * animationDuration);
    }
    animateSpans();

    const audio = new Audio("../../nowstalgia.mp3");    
    pronunciation.current?.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.blobHero} ref={blobHero}>
        <div  className={styles.heroBackground}>
          <BlobAnimation />
        </div>
        <h1>
          <span className={styles.default}>BLOB™</span>
          <span className={styles.purple}>BLOB™</span>
          <span className={styles.blue}>BLOB™</span>
          <span className={styles.red}>BLOB™</span>
          <span className={styles.gold}>BLOB™</span>
        </h1>
      </div>
    </main>
  );
}
