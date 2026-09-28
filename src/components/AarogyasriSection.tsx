import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  FileText, 
  Building, 
  Clock, 
  AlertCircle,
  MessageCircle,
  UserCheck
} from 'lucide-react';
import { Language } from '../types';
import { INSURANCE_LIST, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface AarogyasriSectionProps {
  language: Language;
}

export const AarogyasriSection: React.FC<AarogyasriSectionProps> = ({ language }) => {
  const tr = t(language);
  const [filterType, setFilterType] = useState<'ALL' | 'government' | 'private_tpa'>('ALL');
  
  // Instant Eligibility Checker form
  const [patientCardType, setPatientCardType] = useState('Aarogyasri Card (BPL / White Card)');
  const [treatmentNeeded, setTreatmentNeeded] = useState('Cardiac Angioplasty / Stenting');
  const [checkResult, setCheckResult] = useState<string | null>(null);

  const filteredInsurance = INSURANCE_LIST.filter(
    (ins) => filterType === 'ALL' || ins.type === filterType
  );

  const handleVerifyEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckResult(
      language === 'te'
        ? `అర్హత నిర్ధారించబడింది: "${treatmentNeeded}" చికిత్స ${patientCardType} కింద లైఫ్ లైన్ హాస్పిటల్ లో 100% ఉచితంగా వర్తిస్తుంది. గ్రౌండ్ ఫ్లోర్ లోని ఆరోగ్య మిత్ర కౌంటర్ (హెల్ప్‌లైన్: ${HOSPITAL_INFO.emergencyPhone}) వద్ద మీ కార్డును చూపించి ఉచిత అడ్మిషన్ పొందవచ్చు.`
        : `Verified Eligible: "${treatmentNeeded}" is 100% covered under ${patientCardType} at Lifeline Hospital with zero out-of-pocket advance. Please report to our 24/7 Aarogya Mithra / TPA Helpdesk at the hospital entrance.`
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080c14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'te' ? '100% ఉచిత వైద్యం & నగదు రహిత సేవలు' : '100% Cashless Medical Care'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.aarogyasriTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.aarogyasriSubtitle}
          </p>
        </div>

        {/* Aarogya Mithra 24/7 Desk Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0c1a16] to-[#0c1220] border border-emerald-500/40 shadow-2xl mb-12 flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{language === 'te' ? '24/7 ఆరోగ్య మిత్ర సహాయ కేంద్రం' : '24/7 Dedicated Aarogya Mithra Helpdesk'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {language === 'te'
                ? 'డాక్టర్ వైఎస్సార్ ఆరోగ్యశ్రీ & ఈహెచ్ఎస్ రోగులకు పూర్తి ఉచితం'
                : 'Free Treatment under Dr. YSR Aarogyasri & Govt Schemes'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'te'
                ? 'వైట్ రేషన్ కార్డు లేదా ఆరోగ్యశ్రీ కార్డు ఉన్న రోగులకు గుండె జబ్బులు, ఎముకల సర్జరీలు, అత్యవసర ఐసీయూ చికిత్సలకు ఒక్క రూపాయి కూడా చెల్లించాల్సిన అవసరం లేదు. ఉచిత మందులు మరియు రవాణా భత్యం కూడా లభిస్తుంది.'
                : 'Eligible BPL families, white ration cardholders, and government employees receive 100% cashless medical & surgical treatment up to ₹25 Lakhs per family per year.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Aarogya Mithra Desk</span>
            </a>

            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent('Namaste, I want to inquire about Aarogyasri / Insurance Cashless coverage at Lifeline Hospital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Query</span>
            </a>
          </div>
        </div>

        {/* Interactive Cashless Eligibility Checker Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-slate-800 shadow-xl mb-12">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-400" />
                <span>{language === 'te' ? 'క్యాష్‌లెస్ అర్హత తనిఖీ (Instant Eligibility Checker)' : 'Instant Cashless Eligibility Checker'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'te' ? 'మీ కార్డు లేదా ఇన్సూరెన్స్ వివరాలను ఎంచుకుని ఉచిత చికిత్సను పరిశీలించండి' : 'Select your health scheme or insurance policy to check pre-authorization approval guidelines.'}
              </p>
            </div>

            <form onSubmit={handleVerifyEligibility} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Card / Insurance Policy
                </label>
                <select
                  value={patientCardType}
                  onChange={(e) => setPatientCardType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Dr. YSR Aarogyasri (AP & TS White Card)">Dr. YSR Aarogyasri (AP & TS White Card)</option>
                  <option value="EHS (AP/TS State Govt Employees)">EHS (State Govt Employees & Pensioners)</option>
                  <option value="Star Health Insurance">Star Health Insurance</option>
                  <option value="HDFC ERGO Health">HDFC ERGO Health</option>
                  <option value="Care Health Insurance">Care Health Insurance (Religare)</option>
                  <option value="Medi Assist TPA Corporate">Medi Assist TPA Corporate</option>
                </select>
              </div>

              <div className="md:col-span-4">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Treatment / Surgery Needed
                </label>
                <select
                  value={treatmentNeeded}
                  onChange={(e) => setTreatmentNeeded(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Cardiac Angioplasty / Stenting">Cardiac Angioplasty / Stenting</option>
                  <option value="Knee / Hip Joint Replacement">Knee / Hip Joint Replacement</option>
                  <option value="Emergency Polytrauma / Fracture">Emergency Polytrauma / Fracture</option>
                  <option value="Laparoscopic Gallbladder / Appendix">Laparoscopic Surgery</option>
                  <option value="Maternity & Delivery Care">Maternity & Delivery Care</option>
                  <option value="ICU & Ventilator Support">Critical ICU Care</option>
                </select>
              </div>

              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer"
                >
                  Verify Now
                </button>
              </div>
            </form>

            {checkResult && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>{checkResult}</div>
              </div>
            )}
          </div>
        </div>

        {/* Filter Toggle: All vs Government vs Private */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filterType === 'ALL'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Providers ({INSURANCE_LIST.length})
          </button>
          <button
            onClick={() => setFilterType('government')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filterType === 'government'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Government Schemes (YSR Aarogyasri / EHS)
          </button>
          <button
            onClick={() => setFilterType('private_tpa')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filterType === 'private_tpa'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Corporate & Private TPA
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInsurance.map((ins) => (
            <div
              key={ins.id}
              className="p-6 rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {ins.logoText}
                  </span>
                  <span className="text-[10px] text-slate-400">{ins.cashlessPreAuthHours}</span>
                </div>

                <h4 className="text-base font-bold text-white">{ins.name}</h4>
                <div className="text-xs text-slate-400 mt-1">{ins.coverageType}</div>

                <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3">
                  {ins.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call TPA Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
