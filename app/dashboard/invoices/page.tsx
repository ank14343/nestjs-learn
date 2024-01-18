export default async function InvoicePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Invoice Page</p>;
}
