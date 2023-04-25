import Image from "next/image";
import styles from "./page.module.scss";
import IconTrailing from "../../../public/assets/images/icon-trailing.png";
import PixelHovering from "../../../public/assets/images/pixel-hovering.png";
import Link from "next/link";

export default function page() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Animations</h1>
        <p>Here are some cool animations!</p>
      </section>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Link className={styles.cardImage} href="/animations/icon-trailing">
              <Image src={IconTrailing} alt="icon trailing capture" fill />
          </Link>
          <Link href="/animations/icon-trailing">
            <h2>Icon Trailing</h2>
          </Link>
          <p>Your mouse movement will trigger icons to light!</p>
        </div>
        <div className={styles.card}>
          <Link className={styles.cardImage} href="/animations/pixel-hovering">
              <Image src={PixelHovering} alt="icon trailing capture" fill />
          </Link>
          <Link href="/animations/pixel-hovering">
            <h2>Pixel Hovering</h2>
          </Link>
          <p>Pixels will appear as your mouse hovers over!</p>
        </div>
      </div>
    </main>
  );
}
