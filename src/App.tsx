import { CartProvider } from "@/context/cart-context";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { CollectionsPage } from "@/pages/CollectionsPage";
import { HomePage } from "@/pages/HomePage";
import { ContactPage } from "@/pages/ContactPage";
import { GiftSetsPage } from "@/pages/GiftSetsPage";
import { OrderPage } from "@/pages/OrderPage";
import { ProductPage } from "@/pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/gift-sets" element={<GiftSetsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
