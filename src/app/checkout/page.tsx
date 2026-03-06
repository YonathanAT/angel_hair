"use client";
import { useCart } from "@/context/shopcarcontext";

export type CartItem =  {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const { shoppingCart, clearCart } = useCart();

  const total = shoppingCart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {shoppingCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {shoppingCart.map(item => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>£{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg font-bold mb-4">Total: £{total}</p>

          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}