import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  Navigation, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { Language } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const tr = t(language);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    const queryText = `🏥 *LIFELINE HOSPITAL - INQUIRY*\nName: ${formName}\nPhone: ${formPhone}\nMessage: ${formMessage || 'Inquiry about treatments/admissions'}`;
    window.open(`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent(queryText)}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'ఆసుపత్రి చిరునామా & మ్యాప్' : 'Location & 24/7 Access'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.contactTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.contactSubtitle}
          </p>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Direct Phone, WhatsApp, Address, Timings Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 24/7 Emergency Line */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-950 via-[#161220] to-[#0c1220] border border-rose-500/40 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-900/50">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-rose-400">
                    24/7 Emergency & Ambulance
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                    className="text-xl sm:text-2xl font-black text-white hover:text-rose-300 transition"
                  >
                    {HOSPITAL_INFO.emergencyPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Reception & OPD */}
            <div className="p-6 rounded-3xl bg-[#0c1220] border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Main Campus Address</div>
                  <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {HOSPITAL_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">General Reception & Appointments</div>
                  <a
                    href={`tel:${HOSPITAL_INFO.receptionPhone.replace(/\s+/g, '')}`}
                    className="text-xs text-slate-300 hover:text-white font-mono"
                  >
                    {HOSPITAL_INFO.receptionPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">WhatsApp Helpline</div>
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline font-mono"
                  >
                    {HOSPITAL_INFO.whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Operational Timings</div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Emergency & ICU: <span className="text-rose-400 font-bold">Open 24 Hours / 365 Days</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    OPD Consultations: Monday - Saturday (09:00 AM - 08:30 PM)
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Directions CTA */}
            <a
              href={HOSPITAL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-between text-white font-bold text-sm transition group"
            >
              <div className="flex items-center gap-2.5">
                <Navigation className="w-5 h-5 text-rose-500 group-hover:scale-110 transition" />
                <span>{language === 'te' ? 'గూగుల్ మ్యాప్స్ లో రూట్ చూడండి' : 'Open in Google Maps Navigation'}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

          </div>

          {/* Right Column: Embedded Interactive Map & Quick Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Dark Map Simulation */}
            <div className="rounded-3xl bg-[#0c1220] border border-slate-800 overflow-hidden shadow-2xl relative">
              <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Lifeline Hospital Geographic Coordinates: 17.4156° N, 78.4357° E</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  Ambulance Fast-Track Lane
                </span>
              </div>

              {/* Map Canvas Visual with Pin */}
              <div className="relative h-64 sm:h-72 bg-[#0d1424] overflow-hidden flex items-center justify-center">
                {/* Stylized grid pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Radar sweep effect */}
                <div className="absolute w-72 h-72 rounded-full border border-rose-500/20 animate-ping opacity-30" />
                <div className="absolute w-48 h-48 rounded-full border border-rose-500/30" />

                {/* Central Hospital Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-xl shadow-rose-900/80 animate-bounce">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="mt-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-black text-white whitespace-nowrap shadow-lg">
                    {HOSPITAL_INFO.name} (Main Trauma Bay)
                  </div>
                </div>

                {/* Floating Map Badges */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] text-slate-300 border border-white/10">
                  📍 Banjara Hills Road No. 1 · 2 mins from Metro
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0c1220] border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white">
                {language === 'te' ? 'త్వరిత విచారణ / సందేశం పంపండి' : 'Send an Immediate Inquiry / Query'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Your Name *"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                  />
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="Mobile Number *"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                  />
                </div>

                <textarea
                  rows={2}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="How can our medical team assist you today?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                />

                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-900/40 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'te' ? 'వాట్సాప్ ద్వారా పంపండి' : 'Submit via WhatsApp Helpline'}</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
