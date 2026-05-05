export const orderPriceSum = (cartItems: any[]) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
