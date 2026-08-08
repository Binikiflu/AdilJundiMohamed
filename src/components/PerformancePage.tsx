import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  Layers,
  ArrowRight,
  FileText,
  Search,
  Filter,
  Calculator,
  PieChart,
  Check,
  MapPin,
  Globe,
  Clock,
  Sparkles,
  Download
} from 'lucide-react';
import { NavPage, PastPerformanceProject } from '../types';
import { PAST_PERFORMANCE_PROJECTS } from '../data/companyData';

interface PerformancePageProps {
  onSelectProject: (proj: PastPerformanceProject) => void;
  onOpenRfqModal: () => void;
}

export const PerformancePage: React.FC<PerformancePageProps> = ({ onSelectProject, onOpenRfqModal }) => {
  const [activeTab, setActiveTab] = useState<'all-tenders' | 'eligibility-calculator' | 'analytics' | 'request-dossier'>('all-tenders');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Eligibility Calculator State
  const [calcEquipmentType, setCalcEquipmentType] = useState('water-pumps');
  const [calcQuantity, setCalcQuantity] = useState<number>(10);
  const [calcTargetRegion, setCalcTargetRegion] = useState('Oromia / Harari');
  const [calcRequiredDeliveryDays, setCalcRequiredDeliveryDays] = useState<number>(30);
  const [calcResult, setCalcResult] = useState<{
    score: number;
    status: string;
    details: string[];
    certificationMatch: string[];
  } | null>(null);

  // Filter tenders logic
  const filteredProjects = PAST_PERFORMANCE_PROJECTS.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.scopeSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.documentRef && p.documentRef.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.procurementAgency && p.procurementAgency.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = filterCategory === 'all' || p.clientCategory.toLowerCase().includes(filterCategory.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'Completed' && p.status === 'Completed') ||
      (filterStatus === 'In Progress' && p.status === 'In Progress') ||
      (filterStatus === 'Bidding Open' && p.status === 'Bidding Open');

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Handle Eligibility Check
  const runEligibilityCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 98;
    const details = [
      "TIN: 0038451236 active and in good standing with Oromia Revenue Authority (Gold Level).",
      "Trade License MTDD/04/384/493634/2007 permits Grade Class-A capital goods importation.",
      "Customs clearance track record at Djibouti Port & Mojo Dry Port verified.",
      "Bank performance guarantee backed by Commercial Bank of Ethiopia (CBE)."
    ];

    if (calcRequiredDeliveryDays < 14) {
      score -= 8;
      details.push("Fast-track air freight or direct bonded warehouse dispatch required for under 14 days.");
    } else {
      details.push("Standard maritime shipping & dry port transport fully matches target timeline.");
    }

    const certificationMatch = [
      "ISO 9001 / IEC Standard Equipment Warranty",
      "Ministry of Trade & Regional Integration Import Clearance",
      "Manufacturer Authorisation Letter (MAL) Provided",
      "Duty-Free / Tax Exemption Handling Compliance"
    ];

    setCalcResult({
      score,
      status: score >= 90 ? "ELIGIBLE & FULLY COMPLIANT" : "CONDITIONALLY ELIGIBLE",
      details,
      certificationMatch
    });
  };

  return (
    <div className="space-y-10 pb-16 bg-slate-50">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest">
              Tenders Portal
            </span>
            <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
              FDRE Ministry & Regional Procurement
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Institutional Tenders & Contract Track Record
          </h1>

          <p className="text-slate-300 text-xs sm:text-base max-w-3xl leading-relaxed">
            Adil Jundi Mohamed Import Export Ltd. has successfully executed major tenders for Ethiopian federal ministries, regional water authorities, state infrastructure corporations, and commercial banks. Inspect completed award records, ongoing contracts, or open tender opportunities below.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 max-w-4xl">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Total Tender Executed</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">ETB 760M+</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Completion Rate</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100% On-Time</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Grade Class</span>
              <span className="text-xl sm:text-2xl font-black text-white font-mono">Class-A Importer</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Verified Port</span>
              <span className="text-xl sm:text-2xl font-black text-blue-400 font-mono">Djibouti Corridor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-300 pb-px scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all-tenders')}
            className={`px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeTab === 'all-tenders'
                ? 'border-slate-900 bg-white text-slate-900 border-b-2 shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Tender Directory ({PAST_PERFORMANCE_PROJECTS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('eligibility-calculator')}
            className={`px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeTab === 'eligibility-calculator'
                ? 'border-slate-900 bg-white text-slate-900 border-b-2 shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>Eligibility & Compliance Calculator</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'border-slate-900 bg-white text-slate-900 border-b-2 shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>Track Record Analytics</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('request-dossier')}
            className={`px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeTab === 'request-dossier'
                ? 'border-slate-900 bg-white text-slate-900 border-b-2 shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Request Tender Dossier</span>
          </button>
        </div>
      </section>

      {/* TAB 1: ALL TENDERS DIRECTORY */}
      {activeTab === 'all-tenders' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          
          {/* Controls: Search Bar & Filter Buttons */}
          <div className="bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search tenders by keyword, client name, ref number, or item specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-300 focus:outline-none focus:border-slate-900 font-medium text-slate-900"
                />
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenRfqModal}
                className="bg-slate-900 text-white font-bold uppercase text-xs tracking-wider px-5 py-2.5 hover:bg-slate-800 transition-colors shadow-2xs shrink-0 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Submit Tender Bid Inquiry</span>
              </button>
            </div>

            {/* Sector & Status Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
              
              {/* Sector Filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">Sector:</span>
                {['all', 'Ministry', 'Regional Authority', 'Bank', 'University'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1 font-bold text-[11px] uppercase tracking-wider transition-colors ${
                      filterCategory === cat
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Clients' : cat}
                  </button>
                ))}
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">Status:</span>
                {['all', 'Completed', 'In Progress', 'Bidding Open'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilterStatus(st)}
                    className={`px-2.5 py-1 font-bold text-[10px] uppercase tracking-wider transition-colors ${
                      filterStatus === st
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {st === 'all' ? 'All Status' : st}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>Showing <strong>{filteredProjects.length}</strong> of {PAST_PERFORMANCE_PROJECTS.length} tenders</span>
            {(searchQuery || filterCategory !== 'all' || filterStatus !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setFilterCategory('all');
                  setFilterStatus('all');
                }}
                className="text-amber-700 font-bold hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Project / Tender Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-slate-200 shadow-2xs p-6 space-y-4 hover:border-slate-900 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  
                  {/* Header badges */}
                  <div className="flex items-center justify-between text-xs gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5">
                        {project.clientCategory}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 border ${
                        project.status === 'Completed' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                        project.status === 'In Progress' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                        'bg-amber-100 text-amber-900 border-amber-400 font-black'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <span className="text-slate-500 font-mono font-bold text-xs">{project.year}</span>
                  </div>

                  {/* Title and Client */}
                  <div>
                    <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {project.client}
                    </h3>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-0.5">
                      {project.title}
                    </h4>
                  </div>

                  {/* Scope Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 border border-slate-200/80">
                    {project.scopeSummary}
                  </p>

                  {/* Key Deliverables Highlights */}
                  {project.keyDeliverables && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">Key Deliverables:</span>
                      <ul className="text-xs text-slate-700 space-y-1 pl-1">
                        {project.keyDeliverables.slice(0, 2).map((del, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contract Value Bar */}
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Contract Value:</span>
                    <div className="text-right">
                      <span className="font-mono font-black text-slate-900 text-sm block">
                        {project.valueETB || 'On Request'}
                      </span>
                      {project.valueEstimateUSD && (
                        <span className="font-mono text-[10px] text-slate-500 font-bold block">
                          ~ {project.valueEstimateUSD}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Reference Number */}
                  {project.documentRef && (
                    <div className="bg-slate-900 text-white text-[11px] font-mono p-2.5 border border-slate-800 flex items-center justify-between">
                      <span className="truncate text-slate-300">Ref: <strong className="text-amber-400">{project.documentRef}</strong></span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.deliveredCategories.slice(0, 2).map((cat, i) => (
                      <span key={i} className="text-[9px] bg-slate-100 text-slate-700 font-bold uppercase tracking-wider px-2 py-0.5 border border-slate-200">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-700 flex items-center gap-1 shrink-0 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 transition-colors"
                  >
                    <span>Inspect Dossier</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: ELIGIBILITY & COMPLIANCE CALCULATOR */}
      {activeTab === 'eligibility-calculator' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 block mb-1">
                Interactive Institutional Tool
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Tender Eligibility & Compliance Checker
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Verify if your institutional procurement requirements match Federal Democratic Republic of Ethiopia (FDRE) Public Procurement Authority (FPPA) guidelines and Adil Jundi's Class-A importer credentials.
              </p>
            </div>

            <form onSubmit={runEligibilityCalculator} className="space-y-4 bg-slate-50 p-5 border border-slate-200 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1">
                    Equipment Category Required:
                  </label>
                  <select
                    value={calcEquipmentType}
                    onChange={(e) => setCalcEquipmentType(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 font-medium text-slate-900 focus:outline-none focus:border-slate-900"
                  >
                    <option value="water-pumps">High-Discharge Water Pumps & Submersibles</option>
                    <option value="generators">Industrial Silent Standby Generators (50kVA-1000kVA)</option>
                    <option value="fiber-telecom">Fiber Optic Cable (ADSS & Armored Outdoor)</option>
                    <option value="solar-pv">Solar PV Panels & Off-Grid Hybrid Inverters</option>
                    <option value="construction-machinery">Heavy Drilling Rigs & Road Rollers</option>
                    <option value="office-furniture">Executive Furniture & Archival Steel Storage</option>
                    <option value="computers-it">Institutional Workstation PCs & Core Network Switches</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1">
                    Estimated Quantity / Line Units:
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(Number(e.target.value))}
                    className="w-full p-2.5 bg-white border border-slate-300 font-medium text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1">
                    Target Delivery Region in Ethiopia:
                  </label>
                  <select
                    value={calcTargetRegion}
                    onChange={(e) => setCalcTargetRegion(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 font-medium text-slate-900 focus:outline-none focus:border-slate-900"
                  >
                    <option value="Addis Ababa">Addis Ababa (Central HQ / Awash Bldg)</option>
                    <option value="Oromia / Harari">Oromia & Harari Regional Hubs (Adele Branch)</option>
                    <option value="Somali / Afar">Somali / Afar Lowland Irrigation Schemes</option>
                    <option value="Dire Dawa">Dire Dawa Free Trade Corridor</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1">
                    Required Delivery Timeline (Days):
                  </label>
                  <input
                    type="number"
                    min={5}
                    value={calcRequiredDeliveryDays}
                    onChange={(e) => setCalcRequiredDeliveryDays(Number(e.target.value))}
                    className="w-full p-2.5 bg-white border border-slate-300 font-medium text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Evaluate Tender Eligibility & Compliance</span>
              </button>
            </form>

            {/* Result Box */}
            {calcResult && (
              <div className="bg-slate-950 text-white p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Compliance Rating</span>
                    <h3 className="font-extrabold text-xl text-white">{calcResult.status}</h3>
                  </div>
                  <div className="text-3xl font-black font-mono text-emerald-400 bg-slate-900 px-4 py-2 border border-slate-800">
                    {calcResult.score}%
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Verification Checks:</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {calcResult.details.map((dt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{dt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[10px] text-slate-400 font-mono">
                    Class-A Importer Grade Verified • Ready for Proforma
                  </span>
                  <button
                    type="button"
                    onClick={onOpenRfqModal}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest px-5 py-2.5 transition-colors"
                  >
                    Request Official Proforma Invoice
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 3: TRACK RECORD ANALYTICS */}
      {activeTab === 'analytics' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client Distribution</span>
              <h3 className="text-xl font-black text-slate-900">FDRE Ministries & Authorities</h3>
              <p className="text-xs text-slate-600">
                52% Federal Ministries • 25% Regional Water & Health Bureaus • 18% Commercial & Development Banks • 5% Universities.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sourcing Corridors</span>
              <h3 className="text-xl font-black text-slate-900">Direct Factory Procurement</h3>
              <p className="text-xs text-slate-600">
                Direct manufacturing contracts in Germany, Turkey, South Korea, Malaysia, Japan, and the United States.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Port Clearance</span>
              <h3 className="text-xl font-black text-slate-900">Djibouti & Mojo Freight</h3>
              <p className="text-xs text-slate-600">
                Dedicated shipping line arrangements guaranteeing expedited customs clearance at Djibouti Port and Mojo Dry Port.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 border border-slate-800 space-y-4">
            <h3 className="text-2xl font-black text-white">
              Institutional Quality Assurance Standard
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Every equipment shipment delivered under Adil Jundi Mohamed Import Export Ltd. tenders undergoes rigorous multi-stage testing: pre-shipment factory inspection, port container audit, customs verification, and final client site commissioning.
            </p>
          </div>

        </section>
      )}

      {/* TAB 4: REQUEST DOSSIER */}
      {activeTab === 'request-dossier' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="bg-white border border-slate-200 p-8 shadow-xs space-y-6">
            <div className="text-center space-y-2">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-black text-slate-900">
                Request Official Stamped Tender Dossier
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Government procurement officers can request official stamped copies of tax clearance certificates, bank performance guarantees, and past contract completion letters.
              </p>
            </div>

            <div className="bg-slate-50 p-6 border border-slate-200 text-center space-y-4">
              <p className="text-xs text-slate-800 font-bold">
                Click below to open our Request for Quotation (RFQ) & Document Request drawer:
              </p>
              <button
                type="button"
                onClick={onOpenRfqModal}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase text-xs tracking-widest px-8 py-3.5 shadow-xs transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Open Documentation Request Form</span>
              </button>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
