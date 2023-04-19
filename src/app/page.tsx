import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os"; // node.js module API
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });
console.log("| :atom: | inter: ", inter);

export default function Home() {
  console.log("### server: Homepage ###");
  // console.log(os.hostname());
  // notFound();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🔥 Homepage 🔥</h1>
      <Counter />
    </main>
  );
}
