import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [integerPart,decimalPart] = num.toFixed(2).split(".");
  return decimalPart ? `${integerPart}.${decimalPart.padEnd(2,"0")}` : `${integerPart}.00`;
}