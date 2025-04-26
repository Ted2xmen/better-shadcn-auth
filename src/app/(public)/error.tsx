"use client";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const clearError = () => {
    reset();
  };

  return (
    <section className="flex flex-col gap-3 p-5 text-primary justify-center items-center w-full">
      <h2 className="uppercase text-2xl font-serif">{error.message || "an error occurred"}</h2>
      <Button variant="outline" className="cursor-pointer" onClick={clearError}>
        Try Again
      </Button>
    </section>
  );
}
