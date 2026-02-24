import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from "dotenv";
import { Pool } from 'pg';
import { PrismaClient } from "../lib/generated/prisma/client";
import sampleData from "./sample-data";
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });




async function main() {
  
  try {
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("Database connection successful!");  
    await prisma.product.createMany({ data: sampleData.products });
    console.log("Sample data seeded successfully!");
  }catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();