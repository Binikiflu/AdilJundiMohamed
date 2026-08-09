import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight, 
  FileCheck 
} from 'lucide-react';
import { NavPage } from '../types';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from '../data/companyData';

interface FooterProps {
  setActivePage: (page: NavPage) => void;
  onOpenRfqModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenRfqModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner Accent */}
      <div className="bg-slate-800/80 border-b border-slate-700 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-[10px] uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded border border-blue-800/60">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Government & Institutional Tender Partner</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to submit a tender inquiry or equipment quote?
            </h3>
            <p className="text-slate-400 text-xs max-w-2xl leading-relaxed">
              We provide comprehensive specs, direct factory pricing, and port-to-site delivery for federal ministries, regional authorities, and universities across Ethiopia.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenRfqModal}
            className="shrink-0 bg-white text-slate-900 font-bold uppercase text-xs tracking-[0.15em] px-6 py-3.5 hover:bg-slate-100 transition-colors shadow-xs flex items-center gap-2"
          >
            <span>Request Official Tender Quote</span>
            <ArrowUpRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Profile Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white text-slate-900 flex items-center justify-center font-black text-sm tracking-tighter rounded-xs">
              AJ
            </div>
            <div>
              <span className="block font-extrabold text-base text-white tracking-tight">Adil Jundi</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold">Import Export Ltd.</span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-400 italic border-l-2 border-slate-700 pl-3">
            "{COMPANY_DETAILS.motto}"
          </p>

          <p className="text-xs leading-relaxed text-slate-400">
            Founded in 2007 (Ethiopian Calendar / 2015 G.C.), headquartered in Addis Ababa (Lideta, Awash Building) with a second office in Harar (East Hararghe). Connecting Ethiopia with global high-quality equipment.
          </p>

          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800 px-3 py-1.5 rounded border border-slate-700 font-mono">
              <FileCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>General Manager: {COMPANY_DETAILS.generalManager}</span>
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-b border-slate-800 pb-2">
            Company & Portal
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                Home Overview
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                About Us & History (2010 E.C.)
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('products'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                Core Products & Specifications
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('performance'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                Past Performance & Tender Proof
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('certificates'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                Government Certificates & Compliance
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('financials'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                Financial Metrics & Market Position
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                className="hover:text-white transition-colors text-slate-400"
              >
                RFQ Submission & Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Product Categories Column */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-b border-slate-800 pb-2">
            Core Import Sectors
          </h4>
          <ul className="space-y-2 text-xs">
            {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => { setActivePage('products'); window.scrollTo({ top: 0, behavior: 'smooth'}); }}
                  className="hover:text-white transition-colors text-slate-400 text-left"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-b border-slate-800 pb-2">
            Offices & Contact
          </h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">HQ: Addis Ababa</span>
              <div className="flex items-start gap-2 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-200 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.headquarters.fullAddress}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Branch 2: Harar</span>
              <div className="flex items-start gap-2 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-200 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.secondOffice.fullAddress}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
              <Phone className="w-3.5 h-3.5 text-slate-200 shrink-0" />
              <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="hover:text-white transition-colors font-mono">
                {COMPANY_DETAILS.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-200 shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY_DETAILS.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 px-4 sm:px-8 text-[10px] uppercase tracking-widest text-slate-400 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 Adil Jundi Mohamed Import Export Ltd. | {COMPANY_DETAILS.headquarters.fullAddress} | +251915321018 / +251254660322</div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <span>Gov Tender Performance: Platinum Class</span>
            <span>Compliance: ISO 9001:2015</span>
            <span>Email: adiljundimohamed@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
