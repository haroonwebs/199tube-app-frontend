"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  color: string;
  price: number;
  image: string;
};

const ProductCard = () => {
  const router = useRouter();

  // ✅ Dummy Products (12 items)
  const products: Product[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Basic Tee ${i + 1}`,
    color: "Black",
    price: 35 + i,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  }));

  return (
    <div className="mx-auto max-w-screen px-4 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Top Products
      </h2>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative cursor-pointer"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            {/* Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />

            {/* Info */}
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">{product.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-white">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
