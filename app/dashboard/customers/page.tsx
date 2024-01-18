export default async function CustomerPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Customer Page</p>;
}
