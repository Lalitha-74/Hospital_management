import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Ambulance, 
  Calendar, 
  X, 
  ChevronUp, 
  Clock 
} from 'lucide-react';
import { Language } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';

interface FloatingActionsProps {
  language: Language;
  onOpenBooking: () => void;
  onOpenAmbulance: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  language,
  onOpenBooking,
  onOpenAmbulance
}) => {
  const [showQuickCard, setShowQuickCard] = useState(false);

  return (
    <>
      {/* 1. Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showQuickCard && (
          <div className="w-72 p-4 rounded-3xl bg-[#0c1220] border border-rose-500/40 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">Lifeline Live Desk</span>
              </div>
              <button
                onClick={() => setShowQuickCard(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              {language === 'te'
                ? 'నమస్కారం! డాక్టర్ అపాయింట్‌మెంట్ లేదా అత్యవసర అంబులెన్స్ కోసం మాతో నేరుగా చాట్ చేయండి.'
                : 'Namaste! Chat directly with our OPD receptionist for doctor slots, health packages, or Aarogyasri queries.'}
            </p>

            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent('Namaste Lifeline Hospital, I would like to book an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Quick Call Float */}
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
            className="w-12 h-12 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-xl shadow-rose-950/60 border border-rose-400/40 hover:scale-105 active:scale-95 transition"
            title="Emergency Call"
          >
            <Phone className="w-5 h-5 animate-pulse" />
          </a>

          {/* WhatsApp Floating Button */}
          <button
            onClick={() => setShowQuickCard(!showQuickCard)}
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-105 active:scale-95 transition cursor-pointer relative group"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center animate-ping" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center">1</span>
          </button>
        </div>
      </div>

      {/* 2. Mobile Sticky Bottom Action Bar (Crucial for mobile phones) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#090d16]/95 backdrop-blur-xl border-t border-slate-800 p-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5">
          {/* Call Now */}
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
            className="py-2 px-1 rounded-xl bg-rose-600 text-white flex flex-col items-center justify-center gap-0.5 shadow active:scale-95 transition"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-extrabold">{language === 'te' ? 'కాల్' : 'Call 24/7'}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent('Namaste Lifeline Hospital, I would like to book an appointment.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-1 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center gap-0.5 shadow active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-extrabold">WhatsApp</span>
          </a>

          {/* Book OP */}
          <button
            onClick={onOpenBooking}
            className="py-2 px-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white flex flex-col items-center justify-center gap-0.5 shadow active:scale-95 transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-extrabold">{language === 'te' ? 'ఓపీ బుకింగ్' : 'Book OP'}</span>
          </button>

          {/* 108 Ambulance */}
          <button
            onClick={onOpenAmbulance}
            className="py-2 px-1 rounded-xl bg-slate-800 text-rose-400 border border-rose-500/30 flex flex-col items-center justify-center gap-0.5 shadow active:scale-95 transition cursor-pointer"
          >
            <Ambulance className="w-4 h-4" />
            <span className="text-[10px] font-extrabold">108 GPS</span>
          </button>
        </div>
      </div>
    </>
  );
};
