import ProductList from "@/components/shared/product/product";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
};

export default function Home() {
  console.log("Sample Data:", sampleData);
  // await delay(20 00); // Simulate a delay for loading state
  return (
    <div className="flex justify-start h-screen p-8">
      <ProductList data={sampleData.products} title="Newest Available Products" limit={4} />
    </div>
  );
}
