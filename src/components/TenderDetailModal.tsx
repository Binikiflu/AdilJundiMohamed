import React from 'react';
import { 
  X, 
  Building2, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Download,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { PastPerformanceProject } from '../types';

interface TenderDetailModalProps {
  project: PastPerformanceProject | null;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const TenderDetailModal: React.FC<TenderDetailModalProps> = ({ project, onClose, onOpenRfq }) => {
  if (!project) return null;

  const handleDownloadSummary = () => {
    const textContent = `
===================================================================
ADIL JUNDI MOHAMED IMPORT EXPORT LTD. - TENDER & CONTRACT DOSSIER
===================================================================
CLIENT / AGENCY: ${project.client}
PROCUREMENT BODY: ${project.procurementAgency || project.clientCategory}
TENDER TITLE: ${project.title}
REFERENCE NO: ${project.documentRef || 'N/A'}
STATUS: ${project.status} (${project.tenderType || 'Institutional Tender'})
YEAR / PERIOD: ${project.year}
LOCATION: ${project.location || 'Ethiopia'}
VALUE (ETB): ${project.valueETB || 'N/A'}
VALUE (USD): ${project.valueEstimateUSD || 'N/A'}

SCOPE OF DELIVERY:
${project.scopeSummary}

KEY DELIVERABLES:
${project.keyDeliverables ? project.keyDeliverables.map(item => ` - ${item}`).join('\n') : ' - Standard equipment delivery'}

ORIGIN COUNTRIES: ${project.originCountries ? project.originCountries.join(', ') : 'International Direct Sourcing'}

OFFICIAL REFERENCE / AWARD TEXT:
${project.officialLetterText || 'Official completion letter verified and recorded in FDRE Procurement Registry.'}
===================================================================
TIN: 0038451236 | License No: MTDD/04/384/493634/2007
Headquarters: Awash Building, Lideta, Addis Ababa, Ethiopia
===================================================================
    `;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Tender_Dossier_${project.id}_AdilJundi.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-300 my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 bg-slate-800 text-amber-400 flex items-center justify-center font-bold border border-slate-700 shrink-0 mt-0.5">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-slate-800 px-2 py-0.5 border border-slate-700">
                  {project.clientCategory}
                </span>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 border ${
                  project.status === 'Completed' ? 'bg-emerald-950 text-emerald-300 border-emerald-800' :
                  project.status === 'In Progress' ? 'bg-blue-950 text-blue-300 border-blue-800' :
                  'bg-amber-950 text-amber-300 border-amber-800'
                }`}>
                  {project.status}
                </span>
                {project.tenderType && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-l border-slate-700 pl-2">
                    {project.tenderType}
                  </span>
                )}
              </div>
              <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                {project.client}
              </h3>
              {project.procurementAgency && (
                <p className="text-xs text-slate-400 mt-0.5 font-medium">
                  Agency: {project.procurementAgency}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Tender Title & Value Callout */}
          <div className="space-y-3">
            <h4 className="text-lg font-black text-slate-900 leading-snug">
              {project.title}
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 text-white p-4 border border-slate-800">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Contract Value (ETB)</span>
                <span className="font-mono font-extrabold text-sm sm:text-base text-amber-400 block mt-0.5">
                  {project.valueETB || 'On Request'}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">USD Equivalent</span>
                <span className="font-mono font-bold text-xs sm:text-sm text-slate-200 block mt-0.5">
                  {project.valueEstimateUSD || 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Period / Year</span>
                <span className="font-mono font-bold text-xs sm:text-sm text-slate-200 block mt-0.5">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Ref Number</span>
                <span className="font-mono font-bold text-[11px] text-emerald-400 block truncate mt-0.5">
                  {project.documentRef?.split('-')[0] || 'VERIFIED'}
                </span>
              </div>
            </div>
          </div>

          {/* Location & Origin Sourcing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 border border-slate-200">
            {project.location && (
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-slate-900 shrink-0" />
                <span><strong>Target Region:</strong> {project.location}</span>
              </div>
            )}
            {project.originCountries && (
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="w-4 h-4 text-slate-900 shrink-0" />
                <span><strong>Sourcing Origins:</strong> {project.originCountries.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Detailed Scope */}
          <div>
            <h5 className="text-[11px] font-bold uppercase text-slate-500 tracking-widest mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-900" />
              <span>Full Procurement & Execution Scope</span>
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 border border-slate-200">
              {project.scopeSummary}
            </p>
          </div>

          {/* Key Deliverables List */}
          {project.keyDeliverables && project.keyDeliverables.length > 0 && (
            <div>
              <h5 className="text-[11px] font-bold uppercase text-slate-500 tracking-widest mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                <span>Contract Deliverables & Line Items</span>
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-2.5 border border-slate-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1.5 shrink-0" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Simulated Official Award / Completion Certificate Text Box */}
          <div className="bg-slate-950 text-white p-5 border border-slate-800 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Award className="w-32 h-32 text-amber-400" />
            </div>
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-extrabold uppercase tracking-wider text-amber-400">
                  Official Award Certificate & Inspection Seal
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                Ref: {project.documentRef || 'FDRE-PUBLIC-RECORD'}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-serif italic leading-relaxed bg-slate-900/90 p-3.5 border border-slate-800/80">
              "{project.officialLetterText || 'This contract award is verified under Federal Democratic Republic of Ethiopia Public Procurement & Property Authority standards.'}"
            </p>

            <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-400 pt-1 font-mono">
              <span>Audited Entity: Adil Jundi Mohamed Import Export Ltd.</span>
              <span>TIN: 0038451236</span>
            </div>
          </div>

          {/* Delivered Product Categories */}
          <div>
            <h5 className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-2">
              Associated Technical Categories
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.deliveredCategories.map((cat, i) => (
                <span key={i} className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider px-3 py-1 text-[10px] border border-slate-300">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDownloadSummary}
            className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
          >
            <Download className="w-4 h-4 text-slate-700" />
            <span>Export Dossier (TXT)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenRfq();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase text-xs tracking-[0.15em] flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Inquire For Similar Tender Bid</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};
