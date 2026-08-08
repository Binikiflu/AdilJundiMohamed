import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Send, 
  CheckCircle2, 
  Building, 
  FileText, 
  Plus, 
  Minus,
  Loader2,
  AlertCircle,
  PackageCheck
} from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { SafeImage } from './SafeImage';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart
}) => {
  const [organizationName, setOrganizationName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institutionType, setInstitutionType] = useState('Ministry / Federal Commission');
  const [tenderRef, setTenderRef] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Addis Ababa Central Warehouse');
  const [customMessage, setCustomMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!organizationName || !contactPerson || !email) {
      setErrorMessage('Please fill in your Organization Name, Contact Person, and Email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const itemsPayload = cart.map((item) => ({
        code: item.product.code,
        title: item.product.title,
        quantity: item.quantity,
        notes: item.notes || ''
      }));

      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationName,
          contactPerson,
          email,
          phone,
          institutionType,
          tenderRef,
          deliveryLocation,
          message: customMessage,
          items: itemsPayload
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmittedResult(data.data);
        clearCart();
      } else {
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error connecting to the server. Please try calling +251915321018 / +251254660322.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedResult(null);
    setOrganizationName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setCustomMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-800 text-white flex items-center justify-center font-bold border border-slate-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white uppercase tracking-wider">
                Request for Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-400">
                Official Institutional Tender Inquiry — {COMPANY_DETAILS.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {submittedResult ? (
            /* Success View */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                RFQ Submitted Successfully
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your official quote request has been transmitted to our senior procurement desk in Lideta Awash Office, Addis Ababa.
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500 font-bold uppercase">Tender Ref:</span>
                  <span className="font-bold text-slate-900">{submittedResult.refNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500 font-bold uppercase">Organization:</span>
                  <span className="font-bold text-slate-900">{submittedResult.organizationName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500 font-bold uppercase">Contact:</span>
                  <span className="text-slate-900">{submittedResult.contactPerson} ({submittedResult.email})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold uppercase">Status:</span>
                  <span className="text-slate-900 font-bold uppercase">
                    {submittedResult.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-2">
                Our tender officers will review the specs and issue a formal Proforma Invoice to your email within 24 business hours.
              </p>

              <button
                type="button"
                onClick={handleResetForm}
                className="bg-slate-900 text-white font-bold uppercase text-xs tracking-widest px-6 py-3 hover:bg-slate-800 transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            /* Standard RFQ Form & Cart List */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cart Items Section */}
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-slate-900" />
                    <span>Selected Items ({cart.length})</span>
                  </h4>
                  {cart.length > 0 && (
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-[10px] uppercase font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear All
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="bg-slate-50 p-4 text-center border border-dashed border-slate-300">
                    <p className="text-xs text-slate-600 font-bold">
                      No specific catalog items added yet.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      You can still fill out the form below for a general tender inquiry, or browse the Products page to add line items.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-slate-50 border border-slate-200 p-3 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 overflow-hidden rounded-xs">
                            <SafeImage
                              id={item.product.id}
                              src={item.product.imageUrl}
                              alt={item.product.title}
                              title={item.product.title}
                              subtitle={`Code: ${item.product.code}`}
                              fallbackType="product"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="truncate">
                            <h5 className="font-bold text-slate-900 truncate">
                              {item.product.title}
                            </h5>
                            <span className="text-[10px] font-mono text-slate-500 block">
                              Code: {item.product.code}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-slate-300 bg-white">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-slate-100 text-slate-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-mono font-bold text-slate-900 text-xs">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-slate-100 text-slate-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-400 hover:text-slate-900 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Institution & Contact Details Form */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-900" />
                  <span>Institutional Procurement Details</span>
                </h4>

                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Organization / Ministry *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ministry of Agriculture"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Institution Category *
                    </label>
                    <select
                      value={institutionType}
                      onChange={(e) => setInstitutionType(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900 bg-white"
                    >
                      <option value="Ministry / Federal Commission">Ministry / Federal Commission</option>
                      <option value="Public University / Education">Public University / Educational Institution</option>
                      <option value="Regional Water / Health Authority">Regional Water / Health Authority</option>
                      <option value="Commercial Bank / Financial Institution">Commercial Bank / Financial Institution</option>
                      <option value="State Infrastructure / Construction Corp">State Infrastructure / Construction Corp</option>
                      <option value="Private Corporation / Contractor">Private Corporation / Commercial Buyer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Person Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ato Million Tadesse"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@organization.gov.et"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+251915321018 / +251254660322"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Tender Ref / Bid Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. MOI/NCB/05/2026"
                      value={tenderRef}
                      onChange={(e) => setTenderRef(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Specific Tender Scope & Technical Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify required quantities, voltage ratings, fiber core specifications, delivery site location in Ethiopia, or deadline..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                  Lideta Awash Office 1st Floor | +251915321018 / +251254660322
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase text-xs tracking-widest px-6 py-3 shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting RFQ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Official RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
