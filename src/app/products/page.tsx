import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/services/products";
import Image from "next/image";
import clothesImage from "/public/assets/images/clothes.jpg";
import Jeans from "/public/assets/images/jeans.jpg";
import TShirt from "/public/assets/images/tshirt.jpg";
import Boots from "/public/assets/images/boots.jpg";
import Shoes from "/public/assets/images/shoes.jpg";
import Jacket from "/public/assets/images/jacket.jpg";
import Accessories from "/public/assets/images/accessories.jpg";

const images = [Jeans, TShirt, Boots, Shoes, Jacket, Accessories];

// export const revalidate = 10;

export default async function ProductsPage() {
  if (Math.random() < 0.1) {
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
    <div>
      <h1 className={styles.title}>All Products Index</h1>
      <Image
        className={styles.image}
        src={clothesImage}
        alt="clothes"
        placeholder="blur"
      />
      <ul className={styles.productList}>
        {products.map(({ id, name }, i) => (
          <li key={`${id}_${name}`}>
            <Image
              src={images[i]}
              alt={`${name} image`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjSN/R/R8ABd4CquKX7OIAAAAASUVORK5CYII="
              placeholder="blur"
            />
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{catFact}</article>
    </div>
  );
}
