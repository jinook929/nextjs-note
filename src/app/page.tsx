import Image from "next/image";
// import { notFound } from "next/navigation";
// import os from "os"; // node.js module API
import styles from "./page.module.css";
import Counter from "@/components/Counter";

export default function Home() {
  console.log("### server: Homepage ###");
  // console.log(os.hostname());
  // notFound();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🔥 Homepage 🔥</h1>
      <Counter />
      <div className={styles.imgs}>
        <div className={styles.imgWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Picture of the author"
            fill
          />
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
            alt="Picture of the author"
            fill
          />
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
            alt="Picture of the author"
            fill
          />
        </div>
      </div>
    </main>
  );
}
