import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const Pants = ({ params }: Props) => {
  const slug = params.slug;
  if (slug === "nothing") {
    notFound();
  }
  return <h1>{slug} Page</h1>;
};

export default Pants;

export const generateStaticParams = () => {
  const products = ["pants", "shoes", "shirts"];
  return products.map((product) => ({
    slug: product,
  }));
};
