import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Users, 
  CheckCircle2, 
  FileText, 
  TrendingUp, 
  Globe 
} from 'lucide-react';
import { NavPage } from '../types';
import { COMPANY_DETAILS, TEAM_MEMBERS } from '../data/companyData';

interface AboutPageProps {
  setActivePage: (page: NavPage) => void;
  onOpenRfqModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenRfqModal }) => {
  return (
    <div className="space-y-12 pb-16 bg-slate-50">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 bg-blue-950 text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-800">
            Founded 2007 (Ethiopian Calendar) / 2015 G.C. • Addis Ababa & Harar, Ethiopia
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Adil Jundi Mohamed Import Export Ltd.
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Connecting Ethiopia with the world’s finest industrial equipment, fiber communications, generators, water pumps, and institutional supplies with unyielding quality and trust.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview & History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">
                Our Corporate Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Empowering Progress, Building Trust Since 2007 E.C. (2015 G.C.)
              </h2>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Founded in 2007 (Ethiopian Calendar / 2015 Gregorian), <strong>Adil Jundi Mohamed Import Export Ltd.</strong> (TIN: 0038451236) is a premier licensed Ethiopian trading enterprise headquartered in Addis Ababa, Lideta, Awash Building 1st Floor, with a secondary regional office in <strong>Harar (Adele Sub City, East Hararghe)</strong>. We specialize in importing vehicles, spare parts, generators, fiber optic infrastructure, water pumps, and institutional equipment.
            </p>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Our ability to deliver diverse, high-quality products makes us a preferred partner for both governmental and private institutions. Over the years, we have proudly served universities, federal ministries, regional state commissions, and water works enterprises across Ethiopia.
            </p>

            <div className="bg-slate-100 border-l-4 border-slate-900 p-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Our Corporate Motto</span>
              <p className="text-sm font-bold text-slate-900 italic">
                "{COMPANY_DETAILS.motto}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* HQ Card */}
            <div className="bg-white border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
              <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-200 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span>Primary HQ — Addis Ababa</span>
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-bold text-slate-900">Addis Ababa, Lideta</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Building:</span>
                  <span className="font-bold text-slate-900">Awash Building (1st Floor)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500 font-medium">HQ Phone:</span>
                  <span className="font-mono font-bold text-slate-900">{COMPANY_DETAILS.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Harar Branch Office Card */}
            <div className="bg-white border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
              <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-200 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span>Regional Office — Harar</span>
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Region/Zone:</span>
                  <span className="font-bold text-slate-900">Harar / East Hararghe</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Subcity/Kebele:</span>
                  <span className="font-bold text-slate-900">Adele Subcity, Kebele Adele</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500 font-medium">Harar Phone:</span>
                  <span className="font-mono font-bold text-slate-900">{COMPANY_DETAILS.secondOffice.phone}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenRfqModal}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Submit Tender Inquiry to HQ / Harar Desk</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">Our Corporate Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our mission is simple yet powerful: to connect Ethiopia with the world's best products, ensuring value, unyielding quality, and institutional trust in every delivery. At Adil Jundi, we are everywhere progress happens.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">Our Corporate Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To expand our global reach, diversify high-value import offerings, and embrace innovation to meet the evolving needs of our clients, remaining dedicated to being a dependable partner in building Ethiopia’s brighter and connected future.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Staff Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">
            Leadership & Organizational Strength
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Team & Culture
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Adil Jundi Mohamed Import Export Ltd. is powered by a team of talented and dedicated professionals led by General Manager Mr. Mohamed Salah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {member.name}
                </h3>
                <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                  {member.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                <span>Dept: {member.department}</span>
                <span className="font-bold text-slate-900">{member.experienceYears}+ Yrs Exp</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 space-y-8 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The Four Pillars of Adil Jundi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="bg-slate-800 p-5 border border-slate-700 space-y-2">
              <div className="w-8 h-8 bg-white text-slate-900 font-extrabold flex items-center justify-center">
                1
              </div>
              <h4 className="font-extrabold text-base text-white">Quality Assurance</h4>
              <p className="text-slate-300 leading-relaxed">
                We source exclusively from ISO-certified global manufacturers that pass international standards.
              </p>
            </div>

            <div className="bg-slate-800 p-5 border border-slate-700 space-y-2">
              <div className="w-8 h-8 bg-white text-slate-900 font-extrabold flex items-center justify-center">
                2
              </div>
              <h4 className="font-extrabold text-base text-white">Institutional Trust</h4>
              <p className="text-slate-300 leading-relaxed">
                Building long-term transparent relationships with ministries, universities, and banks.
              </p>
            </div>

            <div className="bg-slate-800 p-5 border border-slate-700 space-y-2">
              <div className="w-8 h-8 bg-white text-slate-900 font-extrabold flex items-center justify-center">
                3
              </div>
              <h4 className="font-extrabold text-base text-white">Timely Execution</h4>
              <p className="text-slate-300 leading-relaxed">
                Streamlined logistics from Djibouti port to field delivery across Ethiopia.
              </p>
            </div>

            <div className="bg-slate-800 p-5 border border-slate-700 space-y-2">
              <div className="w-8 h-8 bg-white text-slate-900 font-extrabold flex items-center justify-center">
                4
              </div>
              <h4 className="font-extrabold text-base text-white">Continuous Growth</h4>
              <p className="text-slate-300 leading-relaxed">
                Expanding our product lines and technical capabilities alongside Ethiopia's economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
