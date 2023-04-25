"use client";

import { useRouter } from "next/navigation";
import styles from "./BackToAllProducts.module.scss";

export default function BackToAllProducts() {
  const router = useRouter();

  return (
    <div className={styles.backBtn}>
      <button onClick={() => {router.push("/products")}}>Back to All Products</button>
    </div>
  )
}
