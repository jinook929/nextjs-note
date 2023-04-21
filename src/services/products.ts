import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getProducts = async (): Promise<Product[]> => {
  await sleep(500);

  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  
  return JSON.parse(data);
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
  const product = (await getProducts()).find((product) => product.id === id);

  return product;
}
