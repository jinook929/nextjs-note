import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/services/products";
import { Product } from "@/services/products";

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <>
      <h1>Products Index</h1>
      <ul className={styles.productList}>
        {products.map(({ id, name }) => (
          <li key={`${id}_${name}`}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
