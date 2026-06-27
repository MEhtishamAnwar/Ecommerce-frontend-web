import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopProducts = ({ products, onAddToCart, handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        <div className="mb-24 text-left">
          <p data-aos="fade-up" className="text-sm text-[var(--primary)]">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Premium picks chosen for comfort, quality, and everyday confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {products.map((data) => (
            <div key={data.id} data-aos="zoom-in" className="group relative max-w-[300px] rounded-2xl bg-white shadow-xl duration-300 hover:bg-black/80 hover:text-white dark:bg-gray-800 dark:hover:bg-[var(--primary)]">
              <div className="h-[100px]">
                <img src={data.img} alt={data.title} className="mx-auto block max-w-[140px] -translate-y-20 transform drop-shadow-md duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 text-center">
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm text-gray-500 duration-300 group-hover:text-white">{data.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[var(--primary)] group-hover:text-white">${data.price}</span>
                  <button className="rounded-full bg-[var(--primary)] px-4 py-1 text-white transition hover:scale-105 group-hover:bg-white group-hover:text-[var(--primary)]" onClick={() => onAddToCart(data)}>
                    Add to cart
                  </button>
                </div>
                <button className="mt-3 text-sm font-semibold underline" onClick={handleOrderPopup}>
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
