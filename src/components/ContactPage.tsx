import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  Clock, 
  CheckCircle2, 
  FileText,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactPageProps {
  onOpenRfqModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRfqModal }) => {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Tender Inquiry / RFQ');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg('Please fill in your Name, Email address, and Message.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          organization: org,
          email,
          phone,
          subject,
          message
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(`Thank you! Your message (Ref ID: ${data.data.refNumber}) has been submitted to Lideta HQ.`);
        setName('');
        setOrg('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please call +251915321018 / +251254660322 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-16 bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
            Headquarters: Addis Ababa • Regional Office: Harar
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional Contact & Procurement Desk
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Reach out to our senior procurement team in Addis Ababa or Harar to discuss tender specs, proforma invoices, equipment imports, or delivery schedules across Ethiopia.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary HQ Card */}
            <div className="bg-white border border-slate-200 p-6 shadow-xs space-y-6">
              <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span>Addis Ababa Headquarters</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-sm">
                      {COMPANY_DETAILS.legalName}
                    </span>
                    <span className="text-slate-600 block mt-0.5">
                      {COMPANY_DETAILS.headquarters.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">Telephone / Mobile:</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.contact.phone}`}
                      className="font-mono font-extrabold text-slate-900 hover:text-slate-700 text-sm transition-colors"
                    >
                      {COMPANY_DETAILS.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">Procurement Email:</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.email}`}
                      className="font-bold text-slate-900 hover:text-slate-700 text-xs transition-colors"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">Web Domain & Telegram:</span>
                    <span className="font-extrabold text-slate-900 block">
                      {COMPANY_DETAILS.contact.website}
                    </span>
                    <span className="text-slate-700 font-mono font-bold block text-[11px]">
                      {COMPANY_DETAILS.contact.socialHandle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-slate-50 p-4 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  <Clock className="w-4 h-4 text-slate-900" />
                  <span>HQ Office Hours:</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Monday – Friday:</span>
                  <span className="font-bold text-slate-900">8:30 AM – 5:30 PM (EAT)</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Saturday:</span>
                  <span className="font-bold text-slate-900">8:30 AM – 12:30 PM (EAT)</span>
                </div>
              </div>
            </div>

            {/* Second Office - Harar Branch Card */}
            <div className="bg-white border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span>Regional Branch Office — Harar</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block text-sm">
                      Harar / East Hararghe Office
                    </span>
                    <span className="text-slate-600 block mt-0.5">
                      {COMPANY_DETAILS.secondOffice.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">Branch Direct Line:</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.secondOffice.phone}`}
                      className="font-mono font-extrabold text-slate-900 hover:text-slate-700 text-sm transition-colors"
                    >
                      {COMPANY_DETAILS.secondOffice.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Visual Card */}
            <div className="bg-slate-900 text-white p-6 border border-slate-800 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Addis Ababa Location
              </span>
              <h4 className="font-extrabold text-base text-white">
                Lideta Awash Building First Floor
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located near Awash Bank Lideta Branch, accessible for tender document handovers and client consultations.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone}`}
                  className="bg-white text-slate-900 font-bold uppercase text-xs tracking-wider px-4 py-2 inline-flex items-center gap-1.5 hover:bg-slate-100"
                >
                  <Phone className="w-3.5 h-3.5" /> Direct Call
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact / RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                    Institutional Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct transmission to Adil Jundi Procurement Desk
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenRfqModal}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 border border-slate-200 flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>RFQ Builder</span>
                </button>
              </div>

              {successMsg && (
                <div className="bg-slate-100 border border-slate-300 text-slate-900 p-4 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ato Million Tadesse"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ministry of Innovation & Tech"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@organization.gov.et"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900"
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
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Subject / Category
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900 bg-white"
                  >
                    <option value="Tender Inquiry / RFQ">Tender Inquiry / Request for Quotation (RFQ)</option>
                    <option value="Fiber Optics & Telecom">Fiber Optic Cables & Telecom Supplies</option>
                    <option value="Generators & Power Solutions">Generators & Standby Power</option>
                    <option value="Water Pumps & Irrigation">Pumps & Water Supply Infrastructure</option>
                    <option value="Construction Machinery">Construction Machinery & Rig Drilling</option>
                    <option value="Office Furniture & IT">Office Furniture & IT Computer Equipment</option>
                    <option value="General Corporate Contact">General Corporate Contact</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details regarding quantities, required delivery timeline, or tender bid parameters..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase text-xs tracking-widest py-3.5 shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
