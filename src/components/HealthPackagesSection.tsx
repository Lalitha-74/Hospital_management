import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  MessageCircle, 
  Tag, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { Language, HealthPackage } from '../types';
import { HEALTH_PACKAGES, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface HealthPackagesSectionProps {
  language: Language;
  onSelectPackage?: (pkg: HealthPackage) => void;
}

export const HealthPackagesSection: React.FC<HealthPackagesSectionProps> = ({ language }) => {
  const tr = t(language);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Full Body Preventive', 'Heart & Vascular', 'Women Health', 'Elderly Care', 'Endocrinology'];

  const filteredPackages = HEALTH_PACKAGES.filter(
    (pkg) => selectedCategory === 'ALL' || pkg.category === selectedCategory
  );

  const handleBookPackageWhatsApp = (pkg: HealthPackage) => {
    const text = `🏥 *LIFELINE HOSPITAL - HEALTH PACKAGE BOOKING*\n\n` +
      `📦 *Package:* ${pkg.title} (₹${pkg.price} - ${pkg.discount})\n` +
      `🔬 *Total Tests:* ${pkg.testCount} Comprehensive Parameters\n` +
      `⏱️ *Turnaround:* ${pkg.tatHours} Hours Fast Digital Report\n` +
      `🍽️ *Fasting:* ${pkg.fastingRequired ? '10-12 Hours Fasting' : 'No Fasting'}\n\n` +
      `Namaste, I want to schedule this health checkup package. Please reserve my slot.`;
    
    window.open(`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'ముందస్తు ఆరోగ్య రక్షణ' : 'Preventive Diagnostics'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.packagesTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.packagesSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'ALL' ? (language === 'te' ? 'అన్ని ప్యాకేజీలు' : 'All Packages') : cat}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isFeatured = pkg.badge === 'Most Popular';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl bg-[#0c1220] border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between relative group ${
                  isFeatured
                    ? 'border-rose-500/60 shadow-rose-950/40 ring-1 ring-rose-500/30'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                      {pkg.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {language === 'te' ? pkg.titleTe : pkg.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {language === 'te' ? pkg.descriptionTe : pkg.description}
                    </p>
                  </div>

                  {/* Pricing Strip */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-500">Package Special Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white">₹{pkg.price}</span>
                        <span className="text-xs line-through text-slate-500">₹{pkg.originalPrice}</span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {pkg.discount}
                    </span>
                  </div>

                  {/* Quick specs */}
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                      {pkg.testCount} Diagnostic Tests
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {pkg.tatHours}h Report
                    </span>
                  </div>

                  {/* Features / Tests List */}
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                      {language === 'te' ? 'పరీక్షల వివరాలు' : 'Tests & Evaluations Included:'}
                    </div>
                    <ul className="space-y-2">
                      {(language === 'te' ? pkg.featuresTe : pkg.features).slice(0, 6).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.features.length > 6 && (
                      <div className="text-[11px] text-rose-400 font-medium pt-1">
                        + {pkg.features.length - 6} more specialized evaluations
                      </div>
                    )}
                  </div>

                  {/* Fasting Notice */}
                  {pkg.fastingRequired && (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-300 text-xs">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{language === 'te' ? 'పరీక్షకు 10-12 గంటల ముందు ఖాళీ కడుపుతో ఉండాలి.' : '10-12 Hours Overnight Fasting Required.'}</span>
                    </div>
                  )}
                </div>

                {/* Book via WhatsApp Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleBookPackageWhatsApp(pkg)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-900/40 flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{language === 'te' ? 'వాట్సాప్ ద్వారా ప్యాకేజీ బుక్ చేయండి' : 'Book Package via WhatsApp'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
