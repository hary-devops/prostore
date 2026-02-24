import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/action/product.action";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const latestProduct = await getLatestProducts()
  return (
    <div className="flex justify-start h-screen p-8">
      <ProductList data={latestProduct} title="Newest Available Products"  />
    </div>
  );
}
