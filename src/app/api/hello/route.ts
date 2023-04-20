export async function GET(request: Request) {
  const res =  new Response(JSON.stringify({ greeting: "Hello, Next.js!" }));
  
  return res;
}
