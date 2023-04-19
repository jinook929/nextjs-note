import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { slug } = params;
  return {
    title: `Wonderful Items | ${slug.toUpperCase()}`,
    description: `Check our wonderful ${slug}!`,
  };
};

const ProductPage = ({ params }: Props) => {
  const slug = params.slug;
  if (slug === "nothing") {
    notFound();
  }
  return <h1>{slug.toUpperCase()} Page</h1>;
};

export default ProductPage;

export const generateStaticParams = () => {
  const products = ["pants", "skirt", "shirt"];
  const params = products.map((product) => ({
    slug: product,
  }));

  return params;
};
