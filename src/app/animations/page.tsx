import Image from "next/image";
import styles from "./page.module.scss";
import IconTrailing from "../../../public/assets/images/icon-trailing.png";
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
          <Link href="/animations/icon-trailing">
            <Image src={IconTrailing} alt="icon trailing capture" />
          </Link>
          <Link href="/animations/icon-trailing">
            <h2>Icon Trailing</h2>
          </Link>
          <p>Your mouse movement will trigger icons to light!</p>
        </div>
      </div>
    </main>
  );
}
