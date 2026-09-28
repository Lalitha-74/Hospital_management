import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const tr = t(language);

  return (
    <section className="py-16 sm:py-24 bg-[#080c14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{language === 'te' ? '4.9★ గూగుల్ రేటింగ్ సమీక్షలు' : '4.9★ Google Verified Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.reviewsTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.reviewsSubtitle}
          </p>
        </div>

        {/* Google Reviews Overall Score Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-[#0c1220] border border-slate-800 shadow-xl mb-12 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex flex-col items-center justify-center font-black">
              <span className="text-2xl leading-none">4.9</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Google Reviews Rating</span>
                <span className="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">Verified</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Based on 3,480+ authentic patient & attendant reviews across Andhra & Telangana
              </div>
            </div>
          </div>

          <a
            href={HOSPITAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition"
          >
            <span>Read on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{language === 'te' ? item.reviewTe : item.review}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{item.patientName}</span>
                    {item.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 inline" />
                    )}
                  </div>
                  <div className="text-xs text-slate-400">{item.city}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-rose-400 font-semibold">{item.treatment}</div>
                  <div className="text-[11px] text-slate-400">{item.doctorName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
