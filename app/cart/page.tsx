"use client";
import QuantityIncrementDecrementButton from "../components/QuantityIncrementDecrementButton";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { orderPriceSum } from "../helpers/orderPriceSum";
import { removeCartItem } from "../store/slices/cartSlice";
import Link from "next/link";
const cart = () => {
  const cartItems = useAppSelector((state) => state?.cart?.cartItems || []);
  const dispatch = useAppDispatch();

  const OrderTotalPrice = orderPriceSum(cartItems);
  const discount = OrderTotalPrice > 500 ? 50 : 0;

  return (
    <section className="py-18 antialiased">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="flex justify-center items-center my-8 text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="mx-auto w-full flex flex-col mb-1 lg:max-w-2xl xl:max-w-4xl"
                >
                  <div className="space-y-6">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20 "
                            src={item?.image}
                            alt="imac image"
                          />
                        </a>

                        <label htmlFor="counter-input-3" className="sr-only">
                          Choose quantity:
                        </label>
                        <QuantityIncrementDecrementButton
                          productId={item._id}
                        />

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <p className="text-base font-medium text-gray-900  dark:text-white">
                            {item?.name}
                          </p>
                          <p className="text-base font-medium text-gray-900  dark:text-white">
                            {item?.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <p className="inline-flex items-center text-sm font-medium text-white">
                              Price : ${item?.price}
                            </p>
                            <p className="inline-flex items-center text-sm font-medium text-white">
                              Total Price : ${item?.price * item?.quantity}
                            </p>
                            <button
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              onClick={() => dispatch(removeCartItem(item._id))}
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
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
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${OrderTotalPrice}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Discount over $500
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -${discount}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Delivery Charges
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $5
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total Amount
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      ${OrderTotalPrice - discount + 5}
                    </dd>
                  </dl>
                </div>

                <Link
                  href={"/checkout"}
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    href={"/products"}
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default cart;
