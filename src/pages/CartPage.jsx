import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onAddToCart, onRemoveFromCart, onDecreaseQuantity, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">Your bag</p>
            <h1 className="text-3xl font-bold">Shopping cart</h1>
          </div>
          <Link to="/" className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)] dark:border-gray-700 dark:text-gray-200">
            Continue shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold">Your cart is empty</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Add a few products to see your totals update instantly.</p>
            <Link to="/" className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:scale-105">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm dark:bg-gray-900 sm:flex-row sm:items-center">
                  <img src={item.img} alt={item.title} className="h-24 w-24 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.color}</p>
                    <p className="mt-2 font-semibold text-[var(--primary)]">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => onDecreaseQuantity(item.id)} className="h-9 w-9 rounded-full border text-lg">−</button>
                    <span className="min-w-6 text-center font-semibold">{item.quantity}</span>
                    <button onClick={() => onAddToCart(item)} className="h-9 w-9 rounded-full border text-lg">+</button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => onRemoveFromCart(item.id)} className="mt-2 text-sm text-red-500">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <h2 className="text-2xl font-semibold">Order summary</h2>
              <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="mt-6 w-full rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                onClick={onCheckout}
                disabled={cartItems.length === 0}
              >
                Buy now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
