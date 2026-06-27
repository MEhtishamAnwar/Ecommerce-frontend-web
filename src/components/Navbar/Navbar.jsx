import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Cart', link: '/cart' },
];

const Navbar = ({ handleOrderPopup, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-40 bg-white shadow-md duration-200 dark:bg-slate-800 dark:text-white">
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div>
            <Link to="/" className="flex items-center gap-1 text-xl font-bold">
              <FiShoppingBag size="30" />
              E.Com
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] rounded-lg border border-gray-300 px-2 py-1 text-sm transition-all duration-300 group-hover:w-[300px] focus:border-[var(--primary)] focus:outline-none dark:border-gray-500 dark:bg-slate-800 sm:w-[200px]"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-800 group-hover:text-[var(--primary)]" />
            </div>

            <button
              onClick={handleOrderPopup}
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-1 text-white transition-all duration-200"
            >
              <span className="hidden transition-all duration-200 group-hover:block">Cart</span>
              <div className="relative">
                <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-[var(--primary)]">
                  {cartCount}
                </span>
              </div>
            </button>

            <div>
              <DarkMode />
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="rounded-full border border-gray-300 p-2 text-xl sm:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="hidden justify-center sm:flex">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link}
                className={({ isActive }) => `inline-block px-4 duration-200 ${isActive ? 'text-[var(--primary)]' : 'hover:text-[var(--primary)]'}`}
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 sm:hidden dark:border-gray-700 dark:bg-slate-800">
          <ul className="space-y-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
