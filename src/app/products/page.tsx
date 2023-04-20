import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/services/products";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 10;

export default async function ProductsPage() {
  if(Math.random() < 0.1) {
    throw new Error();
  }
  const products = await getProducts();
  const catRes = await fetch("https://meowfacts.herokuapp.com/", {
    next: { revalidate: 3 },
    // cache: "no-store",
  });
  const catData = await catRes.json();
  const catFact = catData.data[0];

  return (
    <>
      <h1 className={styles.title}>All Products Index</h1>
      <Image className={styles.image} src={clothesImage} alt="clothes" />
      <ul className={styles.productList}>
        {products.map(({ id, name }) => (
          <li key={`${id}_${name}`}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{catFact}</article>
    </>
  );
}
