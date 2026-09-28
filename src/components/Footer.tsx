import React from 'react';
import { 
  Heart, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Award, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Language, ActivePage } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface FooterProps {
  language: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate, onOpenBooking }) => {
  const tr = t(language);

  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white">{HOSPITAL_INFO.name}</span>
                <span className="block text-[10px] text-rose-400 font-bold uppercase tracking-wider">
                  24/7 Super Speciality & Trauma
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              {language === 'te'
                ? `${HOSPITAL_INFO.nameTe} - 45+ మంది నిపుణులైన వైద్యులు, 24/7 క్యాథ్ ల్యాబ్, రోబోటిక్ సర్జరీలు, మరియు వైఎస్సార్ ఆరోగ్యశ్రీ 100% ఉచిత వైద్యంతో ప్రజల నమ్మకమైన ఆసుపత్రి.`
                : 'Premier 350-bed multi-speciality tertiary healthcare landmark delivering gold-standard clinical excellence, 24/7 emergency trauma, and cashless treatment under Dr. YSR Aarogyasri.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NABH Accredited</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-300 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NABL Lab</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              {language === 'te' ? 'ముఖ్యమైన లింకులు' : 'Quick Access'}
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'హోమ్ పేజీ' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'హాస్పిటల్ చరిత్ర' : 'About & History'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('departments')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'వైద్య విభాగాలు' : 'Departments & OTs'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'డాక్టర్లు & సమయాలు' : 'Doctors & Timings'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'హెల్త్ ప్యాకేజీలు' : 'Health Packages'}
                </button>
              </li>
            </ul>
          </div>

          {/* Patient Services */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              {language === 'te' ? 'రోగుల సేవలు' : 'Patient Portals'}
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('booking')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'ఆన్‌లైన్ ఓపీ బుకింగ్' : 'Online OP Booking'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('aarogyasri')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'ఆరోగ్యశ్రీ & ఇన్సూరెన్స్' : 'Aarogyasri / Cashless'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reports')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'ఆన్‌లైన్ ల్యాబ్ రిపోర్టులు' : 'Lab Reports Download'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'ఆరోగ్య చిట్కాలు' : 'Health Tips & Blog'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-rose-400 transition cursor-pointer">
                  {language === 'te' ? 'హాస్పిటల్ గ్యాలరీ' : 'Facilities Gallery'}
                </button>
              </li>
            </ul>
          </div>

          {/* 24/7 Helpline */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              24/7 Emergency
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                className="block text-rose-400 font-mono font-bold text-sm hover:underline"
              >
                {HOSPITAL_INFO.emergencyPhone}
              </a>
              <a
                href={`tel:${HOSPITAL_INFO.receptionPhone.replace(/\s+/g, '')}`}
                className="block text-slate-300 font-mono text-xs hover:underline"
              >
                {HOSPITAL_INFO.receptionPhone}
              </a>
              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 flex items-center gap-1.5 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <div className="text-[11px] text-slate-500 pt-1">
                Emergency & Trauma: Open 24 Hours
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2012-{new Date().getFullYear()} {HOSPITAL_INFO.name}. All Rights Reserved. NABH & NABL Accredited.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 cursor-pointer">Privacy & HIPAA Compliance</button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 cursor-pointer">Terms of Consultation</button>
            <span>·</span>
            <a href={HOSPITAL_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
