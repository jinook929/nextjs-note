import { getProducts } from "@/services/products";

export async function GET(request: Request) {
  const products = await getProducts();
  const res =  new Response(JSON.stringify(products));
  
  return res;
}
