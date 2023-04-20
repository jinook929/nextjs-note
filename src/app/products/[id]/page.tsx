import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/services/products";
import MeowArticle from "@/components/MeowArticle";

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
    notFound();
  }

  return (
    <section>
      <h1>{product.name.toUpperCase()} Page</h1>
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
