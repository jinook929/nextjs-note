import Link from "next/link";
import styles from "./layout.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wonderful Items | All Items",
  description: "Check all of our wonderful items!",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Woman</Link>
        <Link href="/">Man</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
