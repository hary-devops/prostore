import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = async  ({ data, title, limit }: { data: Product[], title: string, limit?: number }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.slice(0, limit).map((product:Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) :  (
        <div>
          <p className="text-gray-500">No products available.</p>
        </div>
      )}
    </div> );
}
 
export default ProductList;