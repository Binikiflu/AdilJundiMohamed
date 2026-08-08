import React, { useState } from 'react';
import { NavPage, ProductItem, CartItem, CertificateItem, PastPerformanceProject } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { PerformancePage } from './components/PerformancePage';
import { CertificatesPage } from './components/CertificatesPage';
import { FinancialsPage } from './components/FinancialsPage';
import { ContactPage } from './components/ContactPage';
import { RfqModal } from './components/RfqModal';
import { CertificateModal } from './components/CertificateModal';
import { TenderDetailModal } from './components/TenderDetailModal';

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [currency, setCurrency] = useState<'USD' | 'ETB'>('USD');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);

  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PastPerformanceProject | null>(null);

  // Cart operations
  const addToCart = (product: ProductItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    setIsRfqModalOpen(true);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={totalCartCount}
        setIsCartOpen={setIsRfqModalOpen}
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
      />

      {/* Page Views Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
            currency={currency}
            addToCart={addToCart}
            onSelectProject={setSelectedProject}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            currency={currency}
            addToCart={addToCart}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}

        {activePage === 'performance' && (
          <PerformancePage
            onSelectProject={setSelectedProject}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}

        {activePage === 'certificates' && (
          <CertificatesPage
            onSelectCertificate={setSelectedCertificate}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}

        {activePage === 'financials' && (
          <FinancialsPage
            currency={currency}
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenRfqModal={() => setIsRfqModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
      />

      {/* RFQ Drawer / Cart Modal */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        onOpenRfq={() => setIsRfqModalOpen(true)}
      />

      {/* Tender Case Study Detail Modal */}
      <TenderDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenRfq={() => setIsRfqModalOpen(true)}
      />
    </div>
  );
}
