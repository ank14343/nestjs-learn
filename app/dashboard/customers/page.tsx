'use client';

export default async function CustomerPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>Customer Page</p>;
}
