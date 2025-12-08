import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

import WhatsAppFloat from "./components/WhatsAppFloat";
import Cart from "./components/Cart";
import SpecsModal from "./components/SpecsModal";
import type { Product } from "./types/Product";
import "./styles/globals.css";

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };



  const showSpecs = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.length} onToggleCart={toggleCart} />
      <Hero />
      <Products
        onAddToCart={addToCart}
        onShowSpecs={showSpecs}
      />

      <WhatsAppFloat />
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onToggle={toggleCart}
        onRemoveItem={removeFromCart}
      />
      <SpecsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
