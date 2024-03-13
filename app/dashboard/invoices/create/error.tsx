'use client';

import { Button } from '@/app/ui/button';

export default function InvoiceError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Failed to create invoice. {error.message}</h1>
      <br />
      <Button onClick={reset}>Back</Button>
    </>
  );
}
