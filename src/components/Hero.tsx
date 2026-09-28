import React from 'react';
import { 
  Calendar, 
  Phone, 
  Ambulance, 
  ShieldCheck, 
  Star, 
  Clock, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  FileText
} from 'lucide-react';
import { Language, ActivePage } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface HeroProps {
  language: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
  onOpenAmbulance: () => void;
  onSelectDoctor?: (doctorId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onNavigate,
  onOpenBooking,
  onOpenAmbulance
}) => {
  const tr = t(language);

  const stats = [
    { label: language === 'te' ? 'పడకల సామర్థ్యం' : 'Inpatient Beds', value: '350+', sub: '60 ICU Beds' },
    { label: language === 'te' ? 'స్పెషలిస్ట్ వైద్యులు' : 'Super Specialists', value: '45+', sub: 'DM / MCh / FRCS' },
    { label: language === 'te' ? 'విజయవంతమైన సర్జరీలు' : 'Surgeries Done', value: '42,000+', sub: '99.4% Success' },
    { label: language === 'te' ? 'గూగుల్ రేటింగ్' : 'Google Rating', value: '4.9 ★', sub: '3,480+ Reviews' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#080c14] via-[#0d1424] to-[#080c14] border-b border-slate-800">
      {/* Dynamic Ambient Glow Orbs in Instagram-style Rose & Purple Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>{tr.heroBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-medium">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'te' ? 'NABH & NABL గుర్తింపు పొందిన ఆసుపత్రి' : 'NABH & NABL Gold Standard Accredited'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'te' ? 'డా. వైఎస్సార్ ఆరోగ్యశ్రీ 100% ఉచితం' : 'Dr. YSR Aarogyasri 100% Cashless'}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {language === 'te' ? (
                <>
                  <span className="block text-slate-200">అత్యాధునిక సాంకేతికత,</span>
                  <span className="text-insta-gradient block mt-1">ప్రాణ రక్షక సూపర్ స్పెషాలిటీ.</span>
                </>
              ) : (
                <>
                  <span className="block text-slate-100">{tr.heroTitlePrefix}</span>
                  <span className="text-insta-gradient block mt-1">{tr.heroTitleHighlight}</span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {language === 'te'
                ? `${HOSPITAL_INFO.nameTe} - 45+ మంది నిపుణులైన సీనియర్ డాక్టర్లు, 24/7 ఎమర్జెన్సీ అంబులెన్స్ సర్వీస్, ఆన్‌లైన్ ఓపీ టోకెన్లు, మరియు వైఎస్సార్ ఆరోగ్యశ్రీ క్యాష్‌లెస్ సేవలతో ఆంధ్రప్రదేశ్ మరియు తెలంగాణ ప్రజల ఆరోగ్య రక్షకుడు.`
                : `${HOSPITAL_INFO.name} offers round-the-clock emergency polytrauma, state-of-the-art Cath Lab angioplasties, robotic joint replacements, computerised online OP booking, and full Aarogyasri cashless coverage.`}
            </p>

            {/* Prominent Emergency Number Highlight in Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-slate-900 border border-rose-500/40 shadow-xl flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center shadow-lg shadow-rose-900/60 animate-pulse-ring">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-rose-400">
                    {language === 'te' ? '24/7 అత్యవసర & అంబులెన్స్ హాట్‌లైన్' : '24/7 Emergency & Trauma Hotline'}
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                    className="text-xl sm:text-2xl font-black text-white hover:text-rose-300 transition tracking-wide flex items-center gap-1.5"
                  >
                    <span>{HOSPITAL_INFO.emergencyPhone}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenAmbulance}
                  className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Ambulance className="w-4 h-4 text-white" />
                  <span>{language === 'te' ? 'అంబులెన్స్ పిలవండి' : 'Dispatch 108'}</span>
                </button>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-rose-900/50 flex items-center gap-2.5 transition active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{tr.bookAppointment}</span>
                <ChevronRight className="w-4 h-4 text-rose-200" />
              </button>

              <button
                onClick={() => onNavigate('doctors')}
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 flex items-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-rose-400" />
                <span>{tr.doctorTimings}</span>
              </button>

              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent('Namaste Lifeline Hospital, I would like to book an appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 font-bold text-sm border border-emerald-500/40 flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>{language === 'te' ? 'తక్షణ వాట్సాప్ & ఈమెయిల్ కన్ఫర్మేషన్' : 'Instant WhatsApp & Email Token'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>{language === 'te' ? 'సున్నా నిరీక్షణ సమయం' : 'Zero Queue Consultation'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>{language === 'te' ? 'వైఎస్సార్ ఆరోగ్యశ్రీ & ఈహెచ్ఎస్' : 'Aarogyasri & Cashless Insurance'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Live Hospital Status */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-rose-500/30 via-purple-500/20 to-slate-800/40 shadow-2xl">
              <div className="rounded-[22px] bg-[#0c1220] overflow-hidden border border-slate-800 p-5 space-y-5">
                
                {/* Image Banner */}
                <div className="relative h-48 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                    alt="Lifeline Hospital Campus"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/30" />
                  
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>OPD OPEN · TOKEN COUNTER ACTIVE</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-extrabold text-sm sm:text-base">{HOSPITAL_INFO.name}</div>
                    <div className="text-[11px] text-slate-300 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white">4.9</span>
                      <span>(3,480+ Google Reviews) · Banjara Hills & Benz Circle</span>
                    </div>
                  </div>
                </div>

                {/* Live Hospital Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-rose-500/30 transition">
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{st.value}</div>
                      <div className="text-xs font-semibold text-rose-300 mt-0.5">{st.label}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{st.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Quick Link Cards */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => onNavigate('packages')}
                    className="w-full p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 flex items-center justify-between text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">
                          {language === 'te' ? 'మాస్టర్ హెల్త్ చెకప్ - 55% తగ్గింపు' : 'Master Health Checkup - ₹2,499'}
                        </div>
                        <div className="text-[10px] text-slate-400">68 Full Body Tests · Same Day Digital Report</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>

                  <button
                    onClick={() => onNavigate('reports')}
                    className="w-full p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 flex items-center justify-between text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">
                          {language === 'te' ? 'ఆన్‌లైన్ ల్యాబ్ రిపోర్ట్ డౌన్‌లోడ్' : 'Download Lab Reports Online'}
                        </div>
                        <div className="text-[10px] text-slate-400">Instant PDF download by UHID / Bill No</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
