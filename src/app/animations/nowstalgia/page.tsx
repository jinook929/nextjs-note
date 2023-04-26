"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import PixelHoveringPage from "../pixel-hovering/page";

export default function NowstalgiaPage() {
  const nowstalgiaHero = useRef<HTMLDivElement>(null);
  const pronunciation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationDuration = 2000;
    console.log(nowstalgiaHero.current?.childNodes);
    let nowstalgiaSpans: ChildNode[] = [];
    nowstalgiaHero.current?.childNodes.forEach((child) => {
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
      <div className={styles.nowstalgiaHero} ref={nowstalgiaHero}>
        <div  className={styles.heroBackground}>
          <PixelHoveringPage />
        </div>
        <h1>
          <span className={styles.default}>Nowstalgia™</span>
          <span className={styles.purple}>Nowstalgia™</span>
          <span className={styles.blue}>Nowstalgia™</span>
          <span className={styles.red}>Nowstalgia™</span>
          <span className={styles.gold}>Nowstalgia™</span>
        </h1>
      </div>

      <div className={styles.nowstalgiaContent}>
        <div className={styles.title}>
          <h2 className={styles.word}>
            noun |{" "}
            <span className={styles.pronunciation} ref={pronunciation}>
              &apos;nau̇-&apos;stal-jə
            </span>
          </h2>
          <h2 className={styles.definition}>
            The{" "}
            <span className={styles.highlight}>
              <span>feeling of a memory</span>
            </span>{" "}
            from the{" "}
            <span className={styles.highlight}>
              <span>past</span>
            </span>
            , and the{" "}
            <span className={styles.highlight}>
              <span>future</span>
            </span>
            , in the{" "}
            <span className={styles.highlight}>
              <span>present</span>
            </span>
            .
          </h2>
        </div>

        <div className={styles.content}>
          <p>
            In the context of marketing, this principle aids in the development
            of brand identities and experiences that feel familiar yet new. It
            ensures that a brand never seems to be exclusively of its time. New
            brands must be created with care to avoid looking dated just a few
            short years down the line. Google the phrase “adorkable” and
            you&rsquo;ll get our point. At the same time, the legacy of older
            brands must be respected as it evolves and modernizes.
          </p>

          <p>
            When the balance is just right, it generates a feeling best
            described as going back to the future. Not in the theatrical sense
            but a more grounded and achievable one. Kind of like driving a
            vintage car while listening to Miley Cyrus on a wireless bluetooth
            speaker in the back seat.
          </p>

          <div className={styles.btn}>
            <a
              className={styles.button}
              href="https://madwell.com"
              target="_blank"
            >
              Time Travel With Us &gt;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
