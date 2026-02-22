import { cn } from "@/lib/utils";

export const ProductPrice = ({ value,className }: { value: number, className?: string }) => {
  // Make sure that the data has 2 decimal places and is formatted as a string
  const formattedPrice = value.toFixed(2);
  const [integerPart, decimalPart] = formattedPrice.split(".");
  return ( 
    <p className={cn('text-2xl font-bold', className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
}