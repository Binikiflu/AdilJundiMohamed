import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  ShoppingCart,
  Home,
  Package,
  FileCheck,
  Award,
  TrendingUp
} from 'lucide-react';
import { NavPage } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeaderProps {
  activePage: NavPage;
  setActivePage: (page: NavPage) => void;
  currency: 'USD' | 'ETB';
  setCurrency: (curr: 'USD' | 'ETB') => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  onOpenRfqModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  currency,
  setCurrency,
  cartCount,
  setIsCartOpen,
  onOpenRfqModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: NavPage; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Building2 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'performance', label: 'Tenders', icon: FileCheck },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'financials', label: 'Financials', icon: TrendingUp },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (page: NavPage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-8 text-[11px] font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          {/* Phone + Location + Email + Import Status in one line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-slate-300">
            <a 
              href={`tel:${COMPANY_DETAILS.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-mono font-semibold">{COMPANY_DETAILS.contact.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{COMPANY_DETAILS.headquarters.fullAddress}</span>
            </div>
            <span className="text-slate-700">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{COMPANY_DETAILS.contact.email}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-bold text-white">Import Status:</span>
              <span className="text-emerald-400 font-mono font-bold">Fast-Track Customs Cleared</span>
            </div>
          </div>

          {/* License & Accreditation Badge */}
          <div className="hidden xl:flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-200 bg-slate-800 px-2.5 py-1 border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Ministry Reg #42189/15</span>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Company Brand Logo & Title */}
        <button 
          type="button" 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 bg-slate-900 flex items-center justify-center shadow-xs group-hover:bg-slate-800 transition-colors">
            <span className="text-white font-black text-lg tracking-tighter">AJ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-base sm:text-lg leading-none text-slate-900 group-hover:text-slate-700 transition-colors">
              ADIL JUNDI MOHAMED
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Import Export Ltd.
            </span>
          </div>
        </button>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* RFQ Cart Icon */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors"
            title="View Quote Request List"
          >
            <ShoppingCart className="w-4 h-4 text-slate-900" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick RFQ Button */}
          <button
            type="button"
            onClick={onOpenRfqModal}
            className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Submit RFQ</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 focus:outline-none border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Tabbed Navigation Bar (Desktop & Mobile Scrollable Tab Strip) */}
      <div className="bg-slate-100 border-t border-slate-200 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-1 sm:gap-2 text-xs font-bold uppercase tracking-wider">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-3 transition-all whitespace-nowrap border-b-2 font-bold ${
                  isActive
                    ? 'border-slate-900 bg-white text-slate-900 shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-900' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu Fallback */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b border-slate-800 px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                  isActive ? 'bg-white text-slate-900 font-extrabold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                onOpenRfqModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 font-bold uppercase text-xs tracking-widest py-3"
            >
              <FileText className="w-4 h-4" />
              <span>Submit Request for Quotation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

