import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  FileText, 
  Globe, 
  Zap, 
  Droplets, 
  Network, 
  HardHat, 
  Armchair, 
  Monitor, 
  Cpu, 
  Sun,
  ChevronRight,
  ExternalLink,
  Users,
  Calendar,
  MapPin
} from 'lucide-react';
import { NavPage, ProductCategory, ProductItem, PastPerformanceProject } from '../types';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES, PRODUCT_ITEMS, PAST_PERFORMANCE_PROJECTS, CERTIFICATES_DATA, FINANCIAL_METRICS } from '../data/companyData';
import { SafeImage } from './SafeImage';

interface HomePageProps {
  setActivePage: (page: NavPage) => void;
  onOpenRfqModal: () => void;
  currency: 'USD' | 'ETB';
  addToCart: (product: ProductItem) => void;
  onSelectProject: (proj: PastPerformanceProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onOpenRfqModal,
  currency,
  addToCart,
  onSelectProject
}) => {
  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      {/* Hero Section with Blended Global Shipping & Multimodal Logistics Image */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800 py-12 sm:py-20 lg:py-24">
        {/* Background Image Layer - Blended Multimodal Shipping Logistics (Cargo Ship, Freight Trucks, Air Freight) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
            alt="Global Multimodal Freight & Shipping Logistics"
            className="w-full h-full object-cover filter contrast-110 brightness-90 opacity-65 sm:opacity-60 scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Balanced gradient overlays: image is vividly visible while text remains 100% crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/50 sm:to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column - ADIL JUNDI MOHAMED IMPORT EXPORT LTD Primary Focus */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* High-Visibility Brand Badge */}
              <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 bg-gradient-to-r from-slate-900/95 via-amber-950/60 to-slate-900/95 border border-amber-500/50 backdrop-blur-md shadow-xl max-w-full">
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-[12px] px-3.5 py-1.5 uppercase tracking-wider shrink-0 shadow-md">
                  <Building2 className="w-4 h-4 shrink-0 text-slate-950" />
                  <span>ADIL JUNDI MOHAMED IMPORT EXPORT LTD</span>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <span className="flex items-center gap-1.5 text-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Addis Ababa HQ</span>
                  </span>
                  <span className="hidden sm:inline text-amber-500/60 font-extrabold">•</span>
                  <span className="flex items-center gap-1.5 text-slate-100">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Harar Branch</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-amber-400 text-xs sm:text-sm font-black uppercase tracking-[0.25em] block">
                  Federal Republic of Ethiopia • Trade License: FDRE-MOTRI/2015
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-white tracking-tight">
                  ADIL JUNDI MOHAMED IMPORT EXPORT LTD
                </h1>
                <p className="text-base sm:text-xl font-medium text-amber-100/90 leading-snug">
                  Ethiopia’s Premier Multi-Sector Import & Institutional Procurement Partner.
                </p>
              </div>

              <p className="text-xs sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Empowering Ethiopia’s government ministries, public utilities, and infrastructure projects since 2007 E.C. Delivering fiber optic telecom networks, heavy water engineering, power transformers, solar systems, and heavy machinery nationwide.
              </p>

              {/* Metric Highlights Grid - Mobile Optimized Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-800/80">
                <div className="border-l-4 border-amber-400 pl-3.5 py-2 bg-slate-900/70 sm:bg-transparent border border-slate-800/60 sm:border-none">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">$2.8M</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-bold">Annual Procurement Revenue</div>
                </div>
                <div className="border-l-4 border-amber-400 pl-3.5 py-2 bg-slate-900/70 sm:bg-transparent border border-slate-800/60 sm:border-none">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">Grade A</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-bold">Federal Import Clearance</div>
                </div>
                <div className="border-l-4 border-amber-400 pl-3.5 py-2 bg-slate-900/70 sm:bg-transparent border border-slate-800/60 sm:border-none">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 font-bold">Tender Delivery Completion</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
                <button
                  type="button"
                  onClick={onOpenRfqModal}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white text-slate-950 font-bold uppercase text-xs tracking-[0.2em] hover:bg-slate-100 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-slate-900" />
                  <span>Submit Official RFQ</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePage('products')}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 border border-slate-700 font-bold uppercase text-xs tracking-[0.2em] text-white hover:bg-slate-800/80 transition-colors backdrop-blur-xs text-center flex items-center justify-center"
                >
                  Browse Products
                </button>
              </div>
            </div>

            {/* Right Interactive Card / Company Profile & License Image Preview */}
            <div className="lg:col-span-5 w-full bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between mt-4 lg:mt-0">
              <div>
                {/* Header Badge */}
                <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <h3 className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                        Official Business License
                      </h3>
                      <p className="text-[10px] text-slate-400 font-mono">TIN: 0038451236 • Est. 2007 E.C.</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest shrink-0">
                    Verified Active
                  </span>
                </div>

                {/* Company Profile & License Document Preview Image */}
                <div className="relative h-48 sm:h-56 lg:h-60 bg-slate-950 overflow-hidden group border-b border-slate-800">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                    alt="Adil Jundi Mohammed Official Business License & Company Credentials"
                    title="Official Trade License & Company Registration"
                    subtitle="Federal Democratic Republic of Ethiopia"
                    fallbackType="certificate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end text-white pointer-events-none">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-300 block">
                          Federal Democratic Republic of Ethiopia
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                          Ministry of Trade & Regional Integration
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActivePage('certificates')}
                        className="bg-white/90 hover:bg-white text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 transition-colors shadow-xs flex items-center gap-1 shrink-0"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Inspect</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Credentials List */}
                <div className="p-4 sm:p-5 space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400 font-medium">General Manager:</span>
                    <span className="font-bold text-white">{COMPANY_DETAILS.generalManager}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400 font-medium">License Number:</span>
                    <span className="font-mono font-bold text-amber-400">{COMPANY_DETAILS.licenseNo}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400 font-medium">Primary HQ:</span>
                    <span className="font-medium text-slate-200 text-right">Addis Ababa, Lideta (Awash Bldg)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400 font-medium">Regional Branch:</span>
                    <span className="font-bold text-white text-right">Harar (Adele, East Hararghe)</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setActivePage('certificates')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>View All Official Certificates & License Documents</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ADIL JUNDI MOHAMED IMPORT EXPORT LTD — Corporate Spotlight Focus Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/80 border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
          {/* Subtle Watermark Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Top Corporate Badge Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/30 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 rounded-lg shrink-0 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-amber-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 border border-amber-500/40">
                      Primary Focus Area
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-0.5 border border-emerald-500/40">
                      TIN: 0038451236
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight mt-1">
                    ADIL JUNDI MOHAMED IMPORT EXPORT LTD
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Commercial & Institutional Procurement Enterprise • Est. 2007 E.C. (2015 G.C.)
                  </p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setActivePage('certificates')}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>Inspect Licenses</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenRfqModal}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-700 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Submit RFQ</span>
                </button>
              </div>
            </div>

            {/* Corporate Spotlight Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Box 1: General Manager */}
              <div className="bg-slate-900/90 border border-amber-500/30 p-5 space-y-3 relative group hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    General Management
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Obbo Mohamed Salah
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  General Manager. Leading national procurement strategies, international vendor partnerships, and public tender operations across Ethiopia.
                </p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Signatory Authority</span>
                  <span className="text-emerald-400 font-bold">Authorized</span>
                </div>
              </div>

              {/* Box 2: Institutional Infrastructure Scope */}
              <div className="bg-slate-900/90 border border-slate-800 p-5 space-y-3 relative group hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Import Capabilities
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Multi-Sector Supply Chain
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct import authorization for Fiber Optics, High-Voltage Power Transformers, Heavy Water Drilling Rigs, Solar PV Systems, IT Servers, and Executive Office Furnishings.
                </p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Import Clearance</span>
                  <span className="text-amber-400 font-bold">Grade A FDRE</span>
                </div>
              </div>

              {/* Box 3: National Presence & Honors */}
              <div className="bg-slate-900/90 border border-slate-800 p-5 space-y-3 relative group hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    National Accreditation
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Gold Level Taxpayer & Civic Leader
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recognized by the Oromia Regional Government (Shimalis Abdisaa), CBE Preferred Customer, and contributor of ETB 120,000+ to national COVID-19 and community relief funds.
                </p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Tax Integrity Status</span>
                  <span className="text-amber-300 font-bold">Gold Level Award</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FINANCIAL_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] block">
                {metric.label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {metric.value}
                </span>
                {metric.trend && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {metric.trend}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Product Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Equipment & Institutional Sectors
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('products')}
            className="text-xs font-bold text-slate-900 uppercase tracking-widest hover:text-blue-700 flex items-center gap-1 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => {
            return (
              <div
                key={cat.id}
                className="bg-white p-6 border border-slate-200 hover:border-slate-900 transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                      Category
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                      {cat.itemCount}+ Line Items
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-900 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Key Deliverables:</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {cat.highlightItems.map((hl, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActivePage('products')}
                    className="w-full py-2 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-900 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Browse Specs & RFQ</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Past Performance & Tender Wins */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block mb-1">
                Institutional Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Major Government & University Tender Deliveries
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setActivePage('performance')}
              className="text-xs font-bold text-white uppercase tracking-widest hover:text-slate-300 flex items-center gap-1"
            >
              <span>Explore All Tenders</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAST_PERFORMANCE_PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-800 p-6 border border-slate-700 space-y-4 hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-blue-950 text-blue-300 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded border border-blue-800">
                      {proj.clientCategory}
                    </span>
                    <span className="text-slate-400 font-mono">{proj.year}</span>
                  </div>

                  <h3 className="font-bold text-base text-white">
                    {proj.client}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {proj.scopeSummary}
                  </p>

                  <div className="bg-slate-900 p-3 border border-slate-700 text-xs font-mono">
                    <span className="text-slate-400 block text-[10px] uppercase">Tender Value:</span>
                    <span className="text-white font-extrabold text-sm">
                      {proj.valueETB || proj.valueEstimateUSD}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(proj)}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <span>Inspect Tender Case</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Alignment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">
              Strategic Market Position
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Aligned with Ethiopia’s Infrastructure Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ethiopia’s total import market reached <strong>US $17.05 Billion in 2023</strong>, driven heavily by Machinery ($1.93B) and Electrical Equipment ($1.33B). Capital goods represent nearly 17% of total imports.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Furthermore, the heavy equipment market for Ethiopia and Djibouti is projected to expand to <strong>US $496.1 Million by 2026</strong>. Adil Jundi Mohamed Import Export Ltd. is directly positioned to fulfill this demand.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActivePage('financials')}
                className="bg-slate-900 text-white px-6 py-3 font-bold uppercase text-xs tracking-[0.15em] hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <span>View Full Financial Charts</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 border border-slate-200 space-y-4 text-xs">
            <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-200 pb-2">
              Macroeconomic Import Indicators
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                  <span>Total Ethiopian Imports</span>
                  <span>$17.05 Billion</span>
                </div>
                <div className="w-full bg-slate-200 h-2">
                  <div className="bg-slate-900 h-2 w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                  <span>Machinery Imports</span>
                  <span>$1.93 Billion</span>
                </div>
                <div className="w-full bg-slate-200 h-2">
                  <div className="bg-slate-700 h-2 w-[60%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                  <span>Electrical Equipment & ICT</span>
                  <span>$1.33 Billion</span>
                </div>
                <div className="w-full bg-slate-200 h-2">
                  <div className="bg-slate-500 h-2 w-[42%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Leadership Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-slate-200 p-8 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 bg-slate-900 text-white p-6 space-y-4 text-center">
            <div className="w-16 h-16 bg-white text-slate-900 font-extrabold text-xl rounded-full flex items-center justify-center mx-auto">
              MS
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                {COMPANY_DETAILS.leadership.ceoName}
              </h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">
                {COMPANY_DETAILS.leadership.ceoTitle}
              </p>
            </div>
            <div className="text-[11px] text-slate-300 pt-2 border-t border-slate-800">
              Directing specialized sourcing, customs logistics, and after-sales support across Ethiopia.
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">
              Leadership Excellence
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Driven by Operational Precision & Trust
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the leadership of General Manager <strong>Mr. Mohamed Salah</strong>, Adil Jundi Mohamed Import Export Ltd. operates with passion, intelligence, and commitment to every project — from international sourcing and customs clearance to client service.
            </p>
            
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActivePage('about')}
                className="text-xs font-bold text-slate-900 uppercase tracking-widest hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-md border border-slate-800">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block">
              Institutional Contact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Partner with Ethiopia’s Trusted Import Trading Partner
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Contact our Lideta Awash Office in Addis Ababa to discuss your tender specs, proforma invoices, or procurement timelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenRfqModal}
              className="bg-white text-slate-900 font-bold uppercase text-xs tracking-[0.2em] px-8 py-3.5 hover:bg-slate-100 transition-colors shadow-xs"
            >
              Submit Online RFQ
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="border border-slate-700 hover:bg-slate-800 text-white font-bold uppercase text-xs tracking-[0.2em] px-6 py-3.5 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-slate-300" />
              <span>Call +251915321018 / +251254660322</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
