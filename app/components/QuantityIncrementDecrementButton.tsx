"use client";
import { updateCartItemQuantity } from "../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

const QuantityIncrementDecrementButton = ({
  productId,
}: {
  productId: string;
}) => {
  const dispatch = useAppDispatch();

  // get current item from cart
  const cartItem = useAppSelector((state) =>
    state?.cart?.cartItems?.find((item) => item._id === productId),
  );

  const quantity = cartItem?.quantity || 1;

  const handleIncrement = () => {
    dispatch(
      updateCartItemQuantity({
        _id: productId,
        quantity: quantity + 1,
      }),
    );
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;

    dispatch(
      updateCartItemQuantity({
        _id: productId,
        quantity: quantity - 1,
      }),
    );
  };

  return (
    <div className="flex items-center justify-between md:order-3 md:justify-end">
      <div className="flex items-center">
        {/* Decrement */}
        <button
          type="button"
          onClick={handleDecrement}
          className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
        >
          <svg
            className="h-2.5 w-2.5 text-gray-900"
            viewBox="0 0 18 2"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M1 1h16"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Quantity */}
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center text-white text-sm font-medium bg-transparent border-0"
        />

        {/* Increment */}
        <button
          type="button"
          onClick={handleIncrement}
          className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
        >
          <svg
            className="h-2.5 w-2.5 text-gray-900"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantityIncrementDecrementButton;
