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
          <div key={product.id} className="group relative">
            {/* Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              onClick={() => router.push(`/products/${product.id}`)}
              className="aspect-square w-full  cursor-pointer rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
            />

            {/* Info */}
            <div className="mt-4 flex justify-between px-2">
              <div>
                <h3 className="text-sm text-white">{product.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{product.color}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white ml-10">
                  ${product.price}
                </p>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center text-white bg-brand  box-border border border-gray-600 hover:border-2 focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-2 py-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
