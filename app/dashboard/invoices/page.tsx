'use client';

export default async function InvoicePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>Invoice Page</p>;
}
