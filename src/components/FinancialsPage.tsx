import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Cell 
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart as PieIcon, 
  ShieldCheck, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  FINANCIAL_METRICS, 
  ETHIOPIA_IMPORT_MARKET_DATA, 
  HEAVY_EQUIPMENT_GROWTH_DATA 
} from '../data/companyData';

interface FinancialsPageProps {
  currency: 'USD' | 'ETB';
  onOpenRfqModal: () => void;
}

export const FinancialsPage: React.FC<FinancialsPageProps> = ({ currency, onOpenRfqModal }) => {
  return (
    <div className="space-y-12 pb-16 bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 bg-blue-950 text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-800">
            Financial Performance • Macroeconomic Data
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Financial Resilience & Market Positioning
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Adil Jundi Mohamed Import Export Ltd. maintains a steady growth trajectory driven by consistent tender participation, strategic international factory partnerships, and transparent financial management.
          </p>
        </div>
      </section>

      {/* Financial KPIs Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FINANCIAL_METRICS.map((metric, idx) => (
            <div key={idx} className="bg-white p-6 border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                {metric.label}
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-900">
                  {metric.value}
                </span>
                {metric.trend && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {metric.trend}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Summary Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-slate-200 p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">
            Financial Stability & Growth Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Over the past few years, <strong>Adil Jundi Mohamed Import Export Ltd.</strong> has maintained steady revenue growth generated primarily from the import and distribution of construction equipment, fiber optic telecommunication materials, generators, water pumps, and institutional supplies.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Despite fluctuations in foreign exchange rates and global shipping logistics costs, the company has demonstrated strong resilience through effective international sourcing strategies and transparent financial management. Our low debt-to-equity ratio of <strong>0.40</strong> provides a solid foundation of solvent capital to scale operations while executing multi-million dollar government tenders.
          </p>
        </div>
      </section>

      {/* Interactive Charts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1: Heavy Equipment Market Growth Projection */}
          <div className="bg-white p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  Heavy Equipment Market Projection
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Ethiopia & Djibouti Market (US $ Millions)</p>
              </div>
              <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2.5 py-1 uppercase tracking-wider">
                Allied Market Research
              </span>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={HEAVY_EQUIPMENT_GROWTH_DATA}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[250, 550]} />
                  <Tooltip 
                    formatter={(val: any) => [`$${val} Million USD`, 'Market Size']} 
                    contentStyle={{ borderRadius: '0px', fontSize: '12px', border: '1px solid #cbd5e1' }}
                  />
                  <Area type="monotone" dataKey="valueUSD" stroke="#0f172a" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Projected expansion from US $323.9M in 2018 to US $496.1M by 2026 reflects continuous national infrastructure investment.
            </p>
          </div>

          {/* Chart 2: Ethiopian Import Sector Breakdown (2023) */}
          <div className="bg-white p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  Ethiopian Import Market Breakdown (2023)
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Market: US $17.05 Billion</p>
              </div>
              <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2.5 py-1 uppercase tracking-wider">
                Trade.gov
              </span>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ETHIOPIA_IMPORT_MARKET_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="category" tick={{ fontSize: 10 }} interval={0} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    formatter={(val: any) => [`$${val} Billion USD`, 'Import Volume']} 
                    contentStyle={{ borderRadius: '0px', fontSize: '12px', border: '1px solid #cbd5e1' }}
                  />
                  <Bar dataKey="amountUSD" fill="#0f172a">
                    {ETHIOPIA_IMPORT_MARKET_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 || index === 1 ? '#1e293b' : '#64748b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Machinery ($1.93B) and Electrical Equipment ($1.33B) represent Adil Jundi's primary import domains.
            </p>
          </div>

        </div>
      </section>

      {/* Tender Finance CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block">
              Financial Solvency & Readiness
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Financing High-Volume Public Contracts
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We provide bank performance bonds, CPO guarantees, and credit terms for qualified ministry and university procurement programs.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenRfqModal}
            className="shrink-0 bg-white text-slate-900 font-bold uppercase text-xs tracking-[0.15em] px-6 py-3.5 hover:bg-slate-100 transition-colors shadow-xs"
          >
            Request Financial Package
          </button>
        </div>
      </section>
    </div>
  );
};
