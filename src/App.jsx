import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopProducts from './components/TopProducts/TopProducts';
import Products from './components/Product/Product';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import Img1 from './assets/women/women.png';
import Img2 from './assets/women/women2.jpg';
import Img3 from './assets/women/women3.jpg';
import Img4 from './assets/women/women4.jpg';
import Shirt1 from './assets/shirt/shirt.png';
import Shirt2 from './assets/shirt/shirt2.png';
import Shirt3 from './assets/shirt/shirt3.png';

const featuredProducts = [
  { id: 1, img: Img1, title: 'Women Ethnic', price: 89, rating: 5.0, color: 'White', aosDelay: '0' },
  { id: 2, img: Img2, title: 'Women Western', price: 74, rating: 4.5, color: 'Red', aosDelay: '200' },
  { id: 3, img: Img3, title: 'Goggles', price: 59, rating: 4.7, color: 'Brown', aosDelay: '400' },
  { id: 4, img: Img4, title: 'Printed T-Shirt', price: 39, rating: 4.4, color: 'Yellow', aosDelay: '600' },
  { id: 5, img: Img2, title: 'Fashion T-Shirt', price: 45, rating: 4.5, color: 'Pink', aosDelay: '800' },
  { id: 6, img: Img1, title: 'Luxury Kurta', price: 109, rating: 4.8, color: 'Beige', aosDelay: '1000' },
  { id: 7, img: Img3, title: 'Sport Sunglasses', price: 69, rating: 4.6, color: 'Black', aosDelay: '1200' },
  { id: 8, img: Img4, title: 'Summer Tee', price: 34, rating: 4.3, color: 'Mint', aosDelay: '1400' },
];

const topProducts = [
  { id: 101, img: Shirt1, title: 'Casual Wear', price: 120, description: 'Soft cotton comfort with a polished everyday look.', color: 'Navy' },
  { id: 102, img: Shirt2, title: 'Printed Shirt', price: 95, description: 'A breathable shirt that elevates your street style.', color: 'Blue' },
  { id: 103, img: Shirt3, title: 'Women Shirt', price: 100, description: 'Elegant layers made for work, brunch, and evenings out.', color: 'Cream' },
  { id: 104, img: Shirt1, title: 'Office Wear', price: 120, description: 'A refined option for everyday work and meetings.', color: 'Navy' },
  { id: 105, img: Shirt3, title: 'New Shirt', price: 310, description: 'A premium piece with a modern fit and premium finish.', color: 'Cream' },
  { id: 106, img: Shirt2, title: 'Printed Shirt', price: 195, description: 'Bold patterns designed for standout style.', color: 'Blue' },
  { id: 107, img: Shirt1, title: 'Weekend Jacket', price: 150, description: 'Relaxed layers for casual weekends and travel.', color: 'Olive' },
  { id: 108, img: Shirt3, title: 'Classic Shirt', price: 135, description: 'Minimal, timeless, and easy to pair with any outfit.', color: 'White' },
];

const categories = [
  { name: 'Men Wear', description: 'Smart casual and office-ready essentials.', badge: 'Trending' },
  { name: 'Women Wear', description: 'Fresh styles for everyday elegance.', badge: 'New' },
  { name: 'Accessories', description: 'Goggles, bags, and statement pieces.', badge: 'Best Seller' },
  { name: 'Footwear', description: 'Comfort-focused picks for every season.', badge: 'Hot' },
];

const App = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleOrderPopup = () => {
    navigate('/cart');
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title} added to cart`);
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty.');
      return;
    }

    setCartItems([]);
    toast.success('Purchase complete! Your cart has been cleared.');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartCount} handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <section className="container mx-auto my-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {categories.map((category) => (
                  <div key={category.name} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-sm font-semibold text-[var(--primary)]">{category.badge}</p>
                    <h3 className="mt-2 text-xl font-semibold">{category.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                  </div>
                ))}
              </section>
              <Products products={featuredProducts} onAddToCart={addToCart} />
              <TopProducts products={topProducts} onAddToCart={addToCart} handleOrderPopup={handleOrderPopup} />
              <Banner />
              <Subscribe />
              <Testimonials />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} onDecreaseQuantity={decreaseQuantity} onCheckout={handleCheckout} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;