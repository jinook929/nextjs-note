import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/services/products";

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

export default async function ProductPage({ params }: Props) {
  const id = params.id;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <h1>{product?.name.toUpperCase()} Page</h1>;
}

export const generateStaticParams = async () => {
  const products = await getProducts();
  const params = products.map((product) => ({
    id: product.id,
  }));

  return params;
};
