import React, { useState, useEffect } from 'react';
import { 
  X, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2, 
  Image as ImageIcon
} from 'lucide-react';
import { CertificateItem } from '../types';
import { SafeImage } from './SafeImage';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  onOpenRfq: () => void;
  onUpdateImage?: (certId: string, newImageUrl: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ 
  certificate, 
  onClose, 
  onOpenRfq
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>('');

  useEffect(() => {
    if (certificate) {
      setCurrentImageUrl(certificate.imageUrl);
    }
  }, [certificate]);

  // Handle Escape key to close modal or lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else if (certificate) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, certificate, onClose]);

  if (!certificate) return null;

  return (
    <>
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-60 bg-slate-950/95 flex flex-col items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close fullscreen view"
            className="absolute top-4 right-4 text-white hover:text-amber-400 p-2.5 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 transition-colors flex items-center gap-1.5 px-4 text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <X className="w-5 h-5" />
            <span>Close</span>
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2">
            <SafeImage
              src={currentImageUrl}
              alt={certificate.title}
              title={certificate.title}
              subtitle={`${certificate.issuingAuthority} • ${certificate.yearEth}`}
              fallbackType="certificate"
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-slate-700"
            />
          </div>
          <div className="text-center mt-4 text-white space-y-1">
            <h4 className="font-bold text-sm">{certificate.title}</h4>
            <p className="text-xs text-slate-400 font-mono">
              {certificate.issuingAuthority} • {certificate.yearEth} ({certificate.yearGregorian})
            </p>
          </div>
        </div>
      )}

      {/* Main Certificate Modal */}
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="bg-white shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300">
          {/* Header */}
          <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-800 text-white flex items-center justify-center font-bold border border-slate-700">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Official Document Verification
                </span>
                <h3 className="font-extrabold text-base text-white leading-tight">
                  {certificate.title}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              title="Close"
              className="px-3 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <X className="w-4 h-4 text-amber-400" />
              <span>Cancel</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Certificate Header details */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-bold uppercase text-[10px] block">Issuing Authority:</span>
                <span className="font-bold text-slate-900 text-sm">{certificate.issuingAuthority}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold uppercase text-[10px] block">Issue Year:</span>
                <span className="font-mono font-bold text-slate-900 text-sm">
                  {certificate.yearEth} ({certificate.yearGregorian})
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-bold uppercase text-[10px] block">Category:</span>
                <span className="font-bold text-slate-800 uppercase">{certificate.category}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold uppercase text-[10px] block">Status:</span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-800 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Authenticated & Verified
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Certificate Scope & Description:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Certificate Image Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5 text-slate-700" />
                  Official Document Scan / Image
                </span>

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white border border-slate-900 flex items-center gap-1 transition-colors shadow-xs"
                >
                  <Maximize2 className="w-3 h-3 text-amber-400" />
                  <span>Fullscreen View</span>
                </button>
              </div>

              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative border border-slate-700 bg-slate-950 min-h-[280px] max-h-[420px] p-3 flex items-center justify-center group overflow-hidden cursor-pointer"
              >
                <SafeImage
                  id={certificate.id}
                  src={currentImageUrl}
                  alt={certificate.title}
                  title={certificate.title}
                  subtitle={`${certificate.issuingAuthority} • ${certificate.yearEth}`}
                  fallbackType="certificate"
                  className="max-w-full max-h-[380px] object-contain group-hover:scale-102 transition-transform duration-300 shadow-xl"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-2 shadow-lg flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-slate-900" />
                    Click to Enlarge Document
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 px-4 py-2 flex items-center justify-between text-white text-[10px] font-mono">
                  <span>Adil Jundi Verification Copy</span>
                  <span className="text-amber-400 font-bold">Harari / Oromia / Federal Seal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <X className="w-4 h-4 text-slate-700" />
              <span>Cancel / Close</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Request Certified Copies</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
