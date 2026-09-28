import React from 'react';
import { Phone, Ambulance, Clock, ShieldCheck, Heart, MessageCircle, Bot } from 'lucide-react';
import { Language, ActivePage } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenAmbulance: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activePage,
  onNavigate,
  onOpenAmbulance,
  onOpenBooking
}) => {
  const tr = t(language);

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: language === 'te' ? 'హోమ్' : 'Home' },
    { id: 'about', label: language === 'te' ? 'హాస్పిటల్ గురించి' : 'About' },
    { id: 'departments', label: language === 'te' ? 'విభాగాలు' : 'Departments' },
    { id: 'doctors', label: language === 'te' ? 'డాక్టర్లు & సమయాలు' : 'Doctors & Timings' },
    { id: 'booking', label: language === 'te' ? 'ఓపీ బుకింగ్' : 'Online OP' },
    { id: 'packages', label: language === 'te' ? 'హెల్త్ ప్యాకేజీలు' : 'Health Packages' },
    { id: 'aarogyasri', label: language === 'te' ? 'ఆరోగ్యశ్రీ & ఇన్సూరెన్స్' : 'Aarogyasri / Cashless' },
    { id: 'gallery', label: language === 'te' ? 'గ్యాలరీ' : 'Gallery' },
    { id: 'reports', label: language === 'te' ? 'ల్యాబ్ రిపోర్టులు' : 'Reports' },
    { id: 'blog', label: language === 'te' ? 'ఆరోగ్య చిట్కాలు' : 'Health Tips' },
    { id: 'contact', label: language === 'te' ? 'సంప్రదించండి' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl backdrop-blur-xl bg-[#080c14]/90 border-b border-slate-800/80">
      {/* 24/7 Fixed Emergency Announcement Top Bar (Highlighted in vibrant ruby/rose) */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-700 to-red-800 text-white px-3 py-1.5 text-xs sm:text-sm font-medium border-b border-rose-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-extrabold tracking-wide uppercase text-rose-100 flex items-center gap-1.5">
              <Ambulance className="w-4 h-4 text-white animate-bounce" />
              {tr.emergencyHighlight}:
            </span>
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="font-black text-white hover:underline tracking-wider text-sm sm:text-base flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded border border-rose-400/40"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              {HOSPITAL_INFO.emergencyPhone}
            </a>
            <span className="hidden md:inline text-rose-200">· 24/7 Trauma, ICU & Golden Hour Cath Lab</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAmbulance}
              className="bg-white text-rose-900 hover:bg-rose-50 font-bold px-2.5 py-1 rounded text-xs flex items-center gap-1.5 shadow transition active:scale-95 cursor-pointer"
            >
              <Ambulance className="w-3.5 h-3.5 text-rose-700" />
              <span>{language === 'te' ? 'లైవ్ అంబులెన్స్ ట్రాకింగ్' : 'Track Ambulance GPS'}</span>
            </button>
            <div className="hidden lg:flex items-center gap-1.5 text-rose-100 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>YSR Aarogyasri 100% Cashless</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-purple-600 p-0.5 shadow-lg shadow-rose-950/50 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-[#0b101c] rounded-[10px] flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-rose-400 transition">
                  {HOSPITAL_INFO.name}
                </span>
                <span className="bg-rose-500/20 text-rose-300 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-rose-500/30">
                  24/7 Super Speciality
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium line-clamp-1">
                {language === 'te' ? HOSPITAL_INFO.nameTe + ' · అత్యాధునిక వైద్యం' : 'Advanced Healthcare & Emergency Trauma'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#101726]/80 p-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-900/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions: Language Switcher, Call, Book */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#131c30] p-1 rounded-lg border border-slate-700/80">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-bold rounded transition cursor-pointer ${
                  language === 'en'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('te')}
                className={`px-2 py-1 text-xs font-bold rounded transition cursor-pointer ${
                  language === 'te'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="తెలుగు భాషను ఎంచుకోండి"
              >
                తెలుగు
              </button>
            </div>

            {/* AI Assistant Chatbot Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-n8n-chat'))}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 hover:text-purple-100 text-xs font-bold border border-purple-500/30 transition cursor-pointer"
              title="Chat with Lifeline AI Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'te' ? 'AI చాట్' : 'AI Chat'}</span>
            </button>

            {/* Quick Call for Mobile/Desktop */}
            <a
              href={`tel:${HOSPITAL_INFO.receptionPhone.replace(/\s+/g, '')}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              title="Call Lifeline Reception"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>{HOSPITAL_INFO.receptionPhone}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4 text-white" />
              <span>{tr.bookAppointment}</span>
            </button>
          </div>
        </div>

        {/* Sub-header Quick Scroll Navigation Bar for Mobile and Tablets */}
        <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-1 no-scrollbar border-t border-slate-800/60 mt-2.5">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-rose-600 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
