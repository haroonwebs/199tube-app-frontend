"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { addCartItem } from "../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { products } from "../constantProducts";

type Product = {
  id: string;
  title: string;
  colors: string[];
  price: number;
  image: string;
  description: string;
};

const ProductCard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state?.cart?.cartItems || []);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addCartItem({
        _id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        quantity: 1,
      }),
    );
  };

  return (
    <div className="mx-auto max-w-screen px-4 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Top Products
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item._id === product.id);

          return (
            <div key={product.id} className="group relative">
              {/* Image */}
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                loading="lazy"
                onClick={() => router.push(`/products/${product.id}`)}
                className="aspect-square w-full cursor-pointer rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
              />

              {/* Info */}
              <div className="mt-4 flex justify-between px-2">
                <div>
                  <h3 className="text-sm text-white">{product.title}</h3>
                </div>

                <div>
                  <p className="text-sm font-medium text-white ml-10">
                    ${product.price}
                  </p>

                  <button
                    type="button"
                    disabled={isInCart}
                    onClick={() => handleAddToCart(product)}
                    className={`inline-flex items-center text-white box-border border shadow-xs font-medium leading-5 rounded-base text-sm px-2 py-2 focus:outline-none
                      ${
                        isInCart
                          ? "bg-linear-to-r from-blue-500 to-blue-950 cursor-not-allowed opacity-70"
                          : "bg-brand border-gray-600 hover:border-2 focus:ring-1 focus:ring-brand-medium"
                      }
                    `}
                  >
                    <svg
                      className="w-4 h-4 me-1.5"
                      xmlns="http://www.w3.org/2000/svg"
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

                    {isInCart ? "Added" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
