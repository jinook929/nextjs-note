import { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getProductById, getProducts } from "@/services/products";
import styles from "./page.module.css";
import MeowArticle from "@/components/MeowArticle";
import BackToAllProducts from "@/components/BackToAllProducts";

export const revalidate = 3;

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = params;
  const product = await getProductById(id);

  return {
    title: `Wonderful Items${
      product ? " | " + product.name.toUpperCase() : ""
    }`,
    description: `Check our wonderful${
      product ? " " + product.name : " items!"
    }!`,
  };
};

export default async function ProductPage({ params: { id } }: Props) {
  const product = await getProductById(id);

  if (!product) {
    redirect("/products");
    // notFound();
  }

  return (
    <section>
      <h1 className={styles.title}>{product.name.toUpperCase()} Page</h1>
      <BackToAllProducts />
      <div className={styles.imgWrapper}>
        <Image
          src={`/assets/images/${product.image}`}
          alt={product.name}
          fill
        />
      </div>
      <MeowArticle />
    </section>
  );
}

export const generateStaticParams = async () => {
  const products = await getProducts();
  const params = products.map((product) => ({
    id: product.id,
  }));

  return params;
};
