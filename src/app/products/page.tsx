import Link from "next/link";
import styles from "./page.module.css";

const products = ["pants", "skirt", "shoes", "shirt"];

const Products = () => {
  return (
    <>
      <h1>Products Index</h1>
      <ul className={styles.productList}>
        {products.map((product, index) => (
          <li key={`${index}_${product}`} >
            <Link href={`/products/${product}`}>
              {product}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
