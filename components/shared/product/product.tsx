import ProductCard from "./product-card";
const ProductList = async  ({ data, title, limit }: { data: any, title: string, limit?: number }) => {
  console.log("Rendering ProductList with data:", data);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.slice(0, limit).map((product:any) => (
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