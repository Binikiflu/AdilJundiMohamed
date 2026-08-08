import React, { useState, useEffect } from 'react';
import { Award, PackageCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getCustomImage } from '../utils/imageUploadStore';

interface SafeImageProps {
  id?: string;
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'product' | 'certificate';
  title?: string;
  subtitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  id,
  src,
  alt,
  className = "max-w-full max-h-full object-contain shadow-md",
  fallbackType = 'product',
  title,
  subtitle
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customSrc, setCustomSrc] = useState<string | null>(null);

  useEffect(() => {
    const updateSrc = () => {
      if (id) {
        const custom = getCustomImage(id);
        setCustomSrc(custom);
        if (custom) setImageError(false);
      }
    };
    updateSrc();
    window.addEventListener('custom-images-updated', updateSrc);
    return () => window.removeEventListener('custom-images-updated', updateSrc);
  }, [id]);

  const activeSrc = customSrc || src;

  if (imageError || !activeSrc) {
    if (fallbackType === 'certificate') {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-amber-950/90 via-slate-950 to-slate-900 p-4 sm:p-5 border-2 border-amber-500/50 flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-2xl">
          {/* Decorative Gold Certificate Border & Watermark Grid */}
          <div className="absolute inset-1.5 border border-amber-400/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          
          {/* Header Seal */}
          <div className="flex items-center justify-between w-full relative z-10 pt-1">
            <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2 py-0.5 border border-amber-500/30">
              FDRE Ministry Accredited
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-400">
              REF: ETH-CERT-2024
            </span>
          </div>

          {/* Central Award Graphic */}
          <div className="my-2 flex flex-col items-center space-y-2 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div className="space-y-1 px-2 max-w-sm">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-300 block">
                {subtitle || 'Official Government Certificate'}
              </span>
              <p className="text-xs sm:text-sm font-black text-white line-clamp-2 leading-snug">
                {title || alt}
              </p>
            </div>
          </div>

          {/* Bottom Seal Bar */}
          <div className="w-full relative z-10 pt-2 border-t border-amber-500/30 flex items-center justify-between text-[9px] font-bold text-amber-200">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Authentic Seal</span>
            </div>
            <span className="text-slate-400 font-mono">Adil Jundi Mohamed Import LTD</span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full min-h-[220px] bg-slate-950 p-4 sm:p-5 border border-slate-800 flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        
        {/* Top Spec Header */}
        <div className="flex items-center justify-between w-full relative z-10 pt-1">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 border border-blue-800">
            {subtitle || 'Heavy Commercial Specification'}
          </span>
          <span className="text-[9px] font-mono text-emerald-400 font-bold">ISO 9001 Approved</span>
        </div>

        {/* Central Product Icon */}
        <div className="my-2 flex flex-col items-center space-y-2 relative z-10">
          <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shadow-md">
            <PackageCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1 px-2 max-w-sm">
            <p className="text-xs sm:text-sm font-extrabold text-white line-clamp-2 leading-snug">
              {title || alt}
            </p>
            <span className="text-[9px] font-mono text-slate-400 block">
              Adil Jundi Mohamed Import & Supply Division
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full relative z-10 pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] font-bold">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Duty Paid / In Stock</span>
          </span>
          <span className="text-slate-500 font-mono">FDRE Customs Approved</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center text-slate-700">
          <PackageCheck className="w-8 h-8 opacity-40 animate-bounce" />
        </div>
      )}
      <img
        src={activeSrc}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
