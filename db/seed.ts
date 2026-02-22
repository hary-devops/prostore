import dotenv from "dotenv";
dotenv.config();
import sampleData from "./sample-data";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../lib/generated/prisma/client";
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    url: process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/prostore",
  }),
});




async function main() {
  
  try {
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("Database connection successful!");
      // Remove extra fields and allow missing brand
      const cleanedProducts = sampleData.products.map(product => {
        // Only include fields defined in schema
        const {
          name, description, price, rating, slug, numReviews, stock, isFeatured, category, banner, brand, images
        } = product;
        return {
          name, description, price, rating, slug, numReviews, stock, isFeatured, category, banner, brand, images
        };
      });
      await prisma.product.createMany({ data: cleanedProducts });
    console.log("Sample data seeded successfully!");
  }catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();