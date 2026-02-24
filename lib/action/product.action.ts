"use server"
import db from "@/lib/db";
import { Product } from "@/types";
import { LATEST_PRODUCT_LIMIT } from "../constant";
// Get Latest Product
export async function getLatestProducts(): Promise<Product[]> {
  const data = await db.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      numReviews: "desc"
    }
  })
  return data as unknown as Product[]
}