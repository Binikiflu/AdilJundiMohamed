import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  Filter
} from 'lucide-react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DATA } from '../data/companyData';
import { SafeImage } from './SafeImage';

interface CertificatesPageProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  onOpenRfqModal: () => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({ onSelectCertificate, onOpenRfqModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Quality Standard', 'Tender Recognition', 'Excellence Award', 'Capacity & Training'];

  const filteredCertificates = selectedCategory === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16 bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                Compliance & Accreditation
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Verified Public Registry</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Official Certificates & Awards
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Adil Jundi Mohamed Import Export Ltd. holds official accreditation, quality compliance certificates, and excellence awards from federal ministries, regional state authorities, and financial institutions.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold text-slate-300 bg-slate-800/80 px-4 py-3 border border-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Authenticated Documents</span>
          </div>
        </div>
      </section>

      {/* Category Tabs & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-700" />
              Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat} {cat === 'All' ? `(${CERTIFICATES_DATA.length})` : ''}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-mono font-bold uppercase">
            Showing {filteredCertificates.length} verified records
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-slate-200 shadow-xs hover:border-slate-900 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div 
                  onClick={() => onSelectCertificate(cert)}
                  className="relative h-64 bg-slate-950 overflow-hidden border-b border-slate-800 p-2.5 flex items-center justify-center group-hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <SafeImage
                    id={cert.id}
                    src={cert.imageUrl}
                    alt={cert.title}
                    title={cert.title}
                    subtitle={`${cert.issuingAuthority} • ${cert.yearEth}`}
                    fallbackType="certificate"
                    className="max-w-full max-h-full object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-slate-700/80 pointer-events-none">
                    {cert.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 border border-amber-500/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <Eye className="w-3 h-3 text-amber-400" />
                    <span>Inspect Scan</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    <span>Issued: {cert.yearEth} ({cert.yearGregorian})</span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-slate-700 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 p-2.5 border border-slate-200">
                    Authority: {cert.issuingAuthority}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center">
                <button
                  type="button"
                  onClick={() => onSelectCertificate(cert)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest py-2.5 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="bg-white p-12 text-center border border-dashed border-slate-300 space-y-3">
            <Award className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              No certificates found in this category
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Select "All" to view the complete accredited registry of certificates.
            </p>
          </div>
        )}
      </section>

      {/* Compliance Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <ShieldCheck className="w-10 h-10 text-slate-900 mx-auto" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Tax Integrity & Quality Assurance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our operations maintain 100% tax compliance with the Ethiopian Ministry of Revenue, transparent international trade documentation, and adherence to ISO/IEC quality standards for all imported electrical, fiber, and mechanical equipment.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenRfqModal}
              className="bg-slate-900 text-white font-bold uppercase text-xs tracking-widest px-6 py-3 hover:bg-slate-800 transition-colors"
            >
              Request Compliance Binder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
