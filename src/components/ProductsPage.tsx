import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ShoppingCart, 
  FileText, 
  Zap, 
  HardHat,
  Cpu,
  ShieldCheck, 
  ChevronRight,
  Info,
  PackageCheck,
  Camera,
  Upload,
  RotateCcw,
  ImagePlus,
  Maximize2,
  Download,
  Share2,
  Sparkles,
  Layers,
  Check,
  Trash2,
  Eye
} from 'lucide-react';
import { NavPage, ProductItem } from '../types';
import { PRODUCT_CATEGORIES, PRODUCT_ITEMS, PRODUCT_SECTIONS } from '../data/companyData';
import { SafeImage } from './SafeImage';
import { processAndSaveImage, clearCustomImage, getCustomImage, getAllCustomImages } from '../utils/imageUploadStore';

interface ProductsPageProps {
  currency: 'USD' | 'ETB';
  addToCart: (product: ProductItem) => void;
  onOpenRfqModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ currency, addToCart, onOpenRfqModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<ProductItem | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [fitModeMap, setFitModeMap] = useState<Record<string, 'contain' | 'cover'>>({});
  const [showViscreManager, setShowViscreManager] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleImageFileUpload = async (productId: string, file: File) => {
    if (!file) return;
    try {
      setUploadingId(productId);
      await processAndSaveImage(productId, file);
      showToast(`High-resolution photo successfully upscaled (1920px HD) & attached to position ${productId}`);
    } catch (err) {
      console.error('Failed to process HD image:', err);
      showToast('Error uploading image. Please try again with a valid photo.');
    } finally {
      setUploadingId(null);
    }
  };

  const handleClearImage = (productId: string) => {
    clearCustomImage(productId);
    showToast(`Reverted position ${productId} to default vector specification image.`);
  };

  const toggleFitMode = (productId: string) => {
    setFitModeMap((prev) => ({
      ...prev,
      [productId]: prev[productId] === 'cover' ? 'contain' : 'cover'
    }));
  };

  const handleExportViscrePackage = () => {
    const images = getAllCustomImages();
    const packageData = {
      exportDate: new Date().toISOString(),
      appName: "Adil Jundi Mohamed Import Export Ltd.",
      deploymentPlatform: "Viscre",
      totalProductsMapped: PRODUCT_ITEMS.length,
      customPhotoOverridesCount: Object.keys(images).length,
      positionsMap: PRODUCT_ITEMS.map((p) => ({
        id: p.id,
        code: p.code,
        title: p.title,
        category: p.category,
        sectionId: p.sectionId,
        defaultImage: p.imageUrl,
        hasCustomPhoto: Boolean(images[p.id]),
        customPhotoDataUrl: images[p.id] || null
      }))
    };

    const blob = new Blob([JSON.stringify(packageData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `viscre-product-photos-positions-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Viscre deployment photo position package exported successfully!');
  };

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <PackageCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredProducts = PRODUCT_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSection = selectedSection === 'all' || item.sectionId === selectedSection;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSection && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16 bg-slate-50 relative">
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 border border-emerald-500 shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold font-mono">{notificationMsg}</span>
        </div>
      )}

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-block px-3 py-1 bg-blue-950 text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-800">
              Equipment Catalog • Organized into 3 Major Import Sub-Sections
            </div>

            {/* Viscre Deployment Manager Launcher */}
            <button
              type="button"
              onClick={() => setShowViscreManager(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-2.5 rounded-xs flex items-center gap-2 shadow-lg shrink-0 transition-transform active:scale-95"
            >
              <ImagePlus className="w-4 h-4 text-slate-950" />
              <span>Viscre Deployment Photo & Position Manager</span>
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Product Lines & Technical Specifications
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Explore our comprehensive inventory organized across 3 specialized divisions. Upload, upscale resolution, and attach custom equipment photos directly to each product position for deployment on Viscre or static hosting.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="bg-white p-4 sm:p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products, codes, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            {/* General RFQ & Viscre Export Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={handleExportViscrePackage}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold uppercase text-xs tracking-wider px-4 py-2.5 border border-slate-300 flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                <span>Export Photo Package</span>
              </button>
              <button
                type="button"
                onClick={onOpenRfqModal}
                className="bg-slate-900 text-white font-bold uppercase text-xs tracking-widest px-5 py-2.5 hover:bg-slate-800 transition-colors shrink-0 shadow-xs"
              >
                Custom RFQ Request
              </button>
            </div>
          </div>

          {/* Section Filter Tabs */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
              Filter By Major Sub-Section
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedSection('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedSection === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All 3 Sub-Sections ({PRODUCT_ITEMS.length})
              </button>

              {PRODUCT_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-2 ${
                    selectedSection === sec.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className="text-blue-400 font-mono text-[10px]">{sec.sectionNumber}</span>
                  <span>{sec.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0 mr-1">
              Category:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>

            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Organized Sub-Sections Display */}
        <div className="space-y-12">
          {PRODUCT_SECTIONS.filter(sec => selectedSection === 'all' || selectedSection === sec.id).map((sec) => {
            const sectionProducts = filteredProducts.filter(p => p.sectionId === sec.id);
            if (sectionProducts.length === 0) return null;

            return (
              <div key={sec.id} className="space-y-6">
                {/* Sub-Section Header Card */}
                <div className="bg-slate-900 text-white p-6 border-l-4 border-blue-500 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-950 text-blue-300 font-mono font-bold text-xs px-2.5 py-0.5 border border-blue-800">
                        {sec.sectionNumber}
                      </span>
                      {getSectionIcon(sec.iconName)}
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium">
                      {sec.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed pt-1">
                      {sec.description}
                    </p>
                  </div>
                  <div className="bg-slate-800 px-4 py-2 border border-slate-700 text-right shrink-0">
                    <span className="text-xs text-slate-400 uppercase font-mono block">Items in Section</span>
                    <span className="text-xl font-extrabold text-white font-mono">{sectionProducts.length} Products</span>
                  </div>
                </div>

                {/* Products Grid for this Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionProducts.map((product) => {
                    const customImage = getCustomImage(product.id);
                    const fitMode = fitModeMap[product.id] || 'contain';

                    return (
                      <div
                        key={product.id}
                        className="bg-white border border-slate-200 hover:border-slate-900 transition-all overflow-hidden flex flex-col justify-between group shadow-xs relative"
                      >
                        <div>
                          {/* Product Image Banner with Attachment Overlay Controls */}
                          <div className="relative h-64 bg-slate-950 overflow-hidden border-b border-slate-800 flex items-center justify-center p-2 group/img">
                            <SafeImage
                              id={product.id}
                              src={product.imageUrl}
                              alt={product.title}
                              title={product.title}
                              subtitle={`Code: ${product.code}`}
                              fallbackType="product"
                              className={`w-full h-full ${fitMode === 'cover' ? 'object-cover' : 'object-contain'} group-hover/img:scale-105 transition-transform duration-500`}
                            />

                            {/* Position Code Badge */}
                            <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-xs text-white font-mono font-bold text-[10px] px-2.5 py-1 uppercase tracking-widest border border-slate-700/80 pointer-events-none z-10 shadow-xs flex items-center gap-1.5">
                              <span className="text-amber-400">POS:</span>
                              <span>{product.code}</span>
                            </div>

                            {/* Stock/Lead Badge */}
                            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                              {customImage && (
                                <span className="bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider px-2 py-0.5 shadow-xs flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-slate-950" />
                                  <span>1920px HD Attached</span>
                                </span>
                              )}
                              {product.inStock ? (
                                <span className="bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 shadow-xs border border-emerald-600">
                                  In Stock
                                </span>
                              ) : (
                                <span className="bg-slate-800 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 shadow-xs border border-slate-700">
                                  Lead: {product.leadTimeDays} Days
                                </span>
                              )}
                            </div>

                            {/* Hover Overlay Controls: Upload Photo, Change Fit, Reset */}
                            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-20">
                              <label className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xs flex items-center gap-2 shadow-md transition-colors w-full justify-center">
                                <Upload className="w-4 h-4 text-white" />
                                <span>{uploadingId === product.id ? 'Upscaling 1920px...' : 'Upload & Upscale Photo'}</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                      handleImageFileUpload(product.id, e.target.files[0]);
                                    }
                                  }}
                                />
                              </label>

                              <div className="flex items-center gap-2 w-full">
                                <button
                                  type="button"
                                  onClick={() => toggleFitMode(product.id)}
                                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold uppercase py-1.5 border border-slate-700 flex items-center justify-center gap-1"
                                >
                                  <Maximize2 className="w-3 h-3 text-amber-400" />
                                  <span>Fit: {fitMode}</span>
                                </button>

                                {customImage && (
                                  <button
                                    type="button"
                                    onClick={() => handleClearImage(product.id)}
                                    className="bg-red-950/80 hover:bg-red-900 text-red-300 text-[11px] font-bold uppercase px-3 py-1.5 border border-red-800 flex items-center justify-center gap-1"
                                    title="Revert to vector default"
                                  >
                                    <RotateCcw className="w-3 h-3 text-red-400" />
                                    <span>Reset</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 space-y-3">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-900 flex justify-between items-center">
                              <span>{product.sectionTitle || sec.title}</span>
                              <span className="font-mono text-slate-400">ID: {product.id}</span>
                            </div>

                            <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-900 leading-snug">
                              {product.title}
                            </h3>

                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {product.shortDesc}
                            </p>

                            {/* Standard Compliance Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {product.standardCompliance.map((comp, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 border border-slate-200"
                                >
                                  {comp}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="p-5 pt-0 space-y-2">
                          <button
                            type="button"
                            onClick={() => setActiveSpecProduct(product)}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider py-2 transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Info className="w-3.5 h-3.5 text-slate-700" />
                            <span>Inspect Specs & Photo Position</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest py-2.5 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <ShoppingCart className="w-4 h-4 text-blue-400" />
                            <span>Add to RFQ List</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="bg-white p-12 text-center border border-slate-200 space-y-3">
              <PackageCheck className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
              <p className="text-xs text-slate-500">Try adjusting your category, section, or search filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSection('all');
                  setSearchQuery('');
                }}
                className="mt-2 inline-block px-4 py-2 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Viscre Deployment & Photo Position Manager Modal */}
      {showViscreManager && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="font-extrabold text-xl text-white tracking-tight">
                    Viscre Deployment Photo Position Manager
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Manage high-resolution photo attachments for all 25 catalog product positions (`prod-001` through `prod-025`). All attached photos are scaled up to 1920px HD quality.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowViscreManager(false)}
                className="text-slate-400 hover:text-white p-2 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Quick Export / Import Toolbar */}
            <div className="bg-slate-100 p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-mono text-slate-700">
                Total Catalog Positions: <strong className="text-slate-900">25 Products</strong> • Custom Photos Attached: <strong className="text-blue-700">{Object.keys(getAllCustomImages()).length} / 25</strong>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportViscrePackage}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold uppercase text-xs tracking-wider px-4 py-2 flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-blue-300" />
                  <span>Download Viscre Package (JSON)</span>
                </button>
              </div>
            </div>

            {/* Product Positions Grid List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-slate-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCT_ITEMS.map((item) => {
                  const customImg = getCustomImage(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white p-4 border border-slate-200 shadow-xs flex items-start gap-4"
                    >
                      {/* Thumbnail Preview */}
                      <div className="w-20 h-20 bg-slate-950 border border-slate-800 shrink-0 relative overflow-hidden flex items-center justify-center p-1">
                        <SafeImage
                          id={item.id}
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                        {customImg && (
                          <span className="absolute bottom-0 inset-x-0 bg-amber-500 text-slate-950 font-black text-[8px] text-center uppercase tracking-tighter py-0.5">
                            1920px HD
                          </span>
                        )}
                      </div>

                      {/* Specs & Position Info */}
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 border border-blue-200">
                            {item.code}
                          </span>
                          <span className="font-mono text-[9px] text-slate-400">ID: {item.id}</span>
                        </div>

                        <h4 className="text-xs font-extrabold text-slate-900 truncate">
                          {item.title}
                        </h4>

                        <div className="flex items-center gap-2 pt-1">
                          <label className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs flex items-center gap-1">
                            <Upload className="w-3 h-3 text-amber-400" />
                            <span>Upload HD Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files?.[0]) {
                                  handleImageFileUpload(item.id, e.target.files[0]);
                                }
                              }}
                            />
                          </label>

                          {customImg && (
                            <button
                              type="button"
                              onClick={() => handleClearImage(item.id)}
                              className="bg-slate-100 hover:bg-red-50 text-red-600 text-[10px] font-bold uppercase px-2 py-1 border border-slate-300 hover:border-red-300"
                            >
                              Reset
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-4 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">
                Viscre Deployment Target: All product image URLs & custom uploads synced to localStorage.
              </span>
              <button
                type="button"
                onClick={() => setShowViscreManager(false)}
                className="bg-white text-slate-900 font-extrabold uppercase tracking-widest px-5 py-2 hover:bg-slate-100"
              >
                Close Manager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Technical Spec Drawer / Modal */}
      {activeSpecProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full overflow-hidden border border-slate-200 shadow-xl">
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  {activeSpecProduct.code}
                </span>
                <h3 className="font-extrabold text-lg text-white leading-tight">
                  {activeSpecProduct.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSpecProduct(null)}
                className="p-1.5 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-slate-950 border border-slate-800 flex items-center justify-center h-60 overflow-hidden rounded-xs relative p-2">
                    <SafeImage
                      id={activeSpecProduct.id}
                      src={activeSpecProduct.imageUrl}
                      alt={activeSpecProduct.title}
                      title={activeSpecProduct.title}
                      subtitle={`Code: ${activeSpecProduct.code}`}
                      fallbackType="product"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Upload button inside modal */}
                  <label className="cursor-pointer bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-2 px-3 rounded-xs flex items-center justify-center gap-1.5 shadow-xs w-full">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    <span>Upload & Attach High-Res Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleImageFileUpload(activeSpecProduct.id, e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-500 uppercase text-[10px] tracking-widest">Short Summary</span>
                  <p className="text-slate-700 leading-relaxed">{activeSpecProduct.shortDesc}</p>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">Primary Target Institutions:</span>
                    <ul className="text-xs text-slate-800 space-y-0.5 mt-1">
                      {activeSpecProduct.primaryApplications.map((app, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Spec Sheet Table */}
              <div>
                <h4 className="font-bold text-xs uppercase text-slate-500 tracking-[0.2em] mb-2">
                  Technical Specifications Sheet
                </h4>
                <div className="border border-slate-200 text-xs">
                  {Object.entries(activeSpecProduct.specs).map(([key, val], idx) => (
                    <div
                      key={key}
                      className={`flex justify-between p-2.5 ${
                        idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                      }`}
                    >
                      <span className="font-bold text-slate-600">{key}:</span>
                      <span className="font-mono text-slate-900 font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveSpecProduct(null)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-bold uppercase tracking-wider"
                >
                  Close Specs
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToCart(activeSpecProduct);
                    setActiveSpecProduct(null);
                  }}
                  className="bg-slate-900 text-white font-bold uppercase text-xs tracking-widest px-5 py-2.5 hover:bg-slate-800 transition-colors"
                >
                  Add to RFQ List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

