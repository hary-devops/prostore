import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ProductPrice } from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm border-gray-200">
      <CardHeader className="p-0 items-center">
        <Link href={`/products/${product.slug}`} />
        <Image
          src={product.images[0]}
          alt={product.name}
          width={200}
          height={200}
          priority={true } /> 
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/products/${product.slug}`} className="text-lg font-semibold hover:underline">
          <h2>{product.name}</h2>
        </Link>
        <div className="flex justify-between gap-4">
          <p>{product.rating.toString()} Stars </p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} className="text-lg" />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          ) } 
        </div> 
      </CardContent>
    </Card>
  );
}
 
export default ProductCard;