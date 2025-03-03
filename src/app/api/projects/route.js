export async function GET() {
  const response = await fetch(
    "https://mannyggb-portfolio-server.vercel.app/data"
  );
  const data = await response.json();
  const stringgedData = JSON.stringify(data);
  return new Response(stringgedData);
}
