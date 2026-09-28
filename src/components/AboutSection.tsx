import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  Users, 
  Stethoscope, 
  Clock, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface AboutSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, onOpenBooking }) => {
  const tr = t(language);

  const milestones = [
    { year: '2012', title: 'Foundation & Emergency Center', desc: 'Started with 100 beds and 24/7 dedicated trauma resuscitation unit.' },
    { year: '2016', title: 'Cath Lab & Cardiac Institute', desc: 'Inaugurated flat-panel digital Cath Lab with 24/7 primary angioplasty support.' },
    { year: '2019', title: 'NABH Accreditation', desc: 'Earned National Accreditation Board for Hospitals gold standard for clinical excellence.' },
    { year: '2022', title: 'Robotic Surgery & 3T MRI', desc: 'Pioneered robotic total knee replacement and high-speed silent 3-Tesla neuro-imaging.' },
    { year: '2026', title: 'State-wide Digital OP Network', desc: 'Serving over 42,000+ satisfied families across Andhra Pradesh and Telangana.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'మా గురించి & చరిత్ర' : 'History, Vision & Infrastructure'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.aboutTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.aboutSubtitle}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#101728] to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-rose-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {language === 'te' ? 'మా దార్శనికత (Vision)' : 'Our Vision'}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {language === 'te'
                ? 'ప్రతి పౌరుడికి నైతికమైన, అత్యున్నత ప్రమాణాలు గల సూపర్ స్పెషాలిటీ చికిత్సను అందుబాటులో ఉంచడం. అధునాతన వైద్య సాంకేతికతను మానవీయ సేవా దృక్పథంతో జోడించి వ్యాధి నిర్మూలన దిశగా నడవడం.'
                : 'To be the most trusted and patient-centric healthcare destination in South India, celebrated for compassionate clinical outcomes, technological leadership, and affordable care for every stratum of society.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#101728] to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {language === 'te' ? 'మా లక్ష్యం (Mission)' : 'Our Mission'}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {language === 'te'
                ? '24 గంటలూ అత్యవసర ప్రమాద చికిత్స మరియు గుండె జబ్బుల ప్రాణ రక్షణ. వైఎస్సార్ ఆరోగ్యశ్రీ మరియు కార్పొరేట్ ఇన్సూరెన్స్ ద్వారా ఒక్క రోగి కూడా ఆర్థిక కారణాలతో వైద్యం కోల్పోకుండా సంరక్షించడం.'
                : 'To deliver relentless 24/7 golden-hour emergency trauma care, ensure zero diagnostic delays with top specialists, and maintain an inclusive cashless desk where financial barriers never delay lifesaving medical treatment.'}
            </p>
          </div>
        </div>

        {/* Hospital Photo & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                alt="Lifeline Hospital Critical ICU & Emergency"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs uppercase font-extrabold text-rose-400 tracking-wider">State of the Art Facilities</div>
                  <div className="text-lg font-bold text-white">Level-1 Trauma Center & 60-Bed Dedicated ICU</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {language === 'te' ? 'రోగుల నమ్మకమే మా బలం' : 'Why Families Choose Lifeline Hospital'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'te'
                ? 'లైఫ్ లైన్ హాస్పిటల్ లో 45+ మంది నిపుణులైన సీనియర్ డాక్టర్లు, 350 పడకలు, మరియు 60 ఐసీయూ బెడ్స్ తో ప్రతి నిమిషం అప్రమత్తంగా సేవలందిస్తాము. మా వద్ద చికిత్స పొందిన వేలాది కుటుంబాలు సంపూర్ణ సంతృప్తి వ్యక్తం చేశాయి.'
                : 'Founded by visionary surgeons and cardiologists, Lifeline Hospital has grown from a specialized trauma unit into a 350-bed multi-speciality landmark. We combine international infection-control protocols with round-the-clock senior consultant coverage.'}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-sm font-bold text-white">NABH & NABL</div>
                <div className="text-xs text-slate-400">Standard Accredited</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-sm font-bold text-white">Dr. YSR Aarogyasri</div>
                <div className="text-xs text-slate-400">100% Cashless Coverage</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-sm font-bold text-white">24/7 Cath Lab</div>
                <div className="text-xs text-slate-400">Golden Hour Angioplasty</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-sm font-bold text-white">Robotic Surgery</div>
                <div className="text-xs text-slate-400">Joints & Laparoscopy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0c1220] border border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'te' ? 'మా ప్రస్థానం & విజయాలు' : 'Our Milestone Journey'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
                <span className="text-rose-400 font-mono font-black text-lg block">{m.year}</span>
                <h4 className="text-sm font-bold text-white mt-1">{m.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
