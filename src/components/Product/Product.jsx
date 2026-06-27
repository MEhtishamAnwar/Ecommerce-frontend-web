import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <p data-aos="fade-up" className="text-sm text-[var(--primary)]">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Curated essentials for daily wear and effortless styling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <img src={data.img} alt={data.title} className="h-[220px] w-[150px] rounded-md object-cover" />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-[var(--primary)]">${data.price}</span>
                  <button onClick={() => onAddToCart(data)} className="rounded-full bg-[var(--primary)] px-3 py-1 text-sm text-white transition hover:scale-105">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
