import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Language } from '../types';
import { GALLERY_ITEMS } from '../data/mockData';
import { t } from '../i18n/translations';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const tr = t(language);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = ['ALL', 'Infrastructure', 'Cardiology', 'Surgical Suites', 'Radiology', 'Emergency', 'Wards'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'ALL' || item.category === selectedCategory
  );

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'అత్యాధునిక సదుపాయాలు' : 'World-Class Infrastructure'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.gallery}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {language === 'te'
              ? '350 పడకల క్యాంపస్, మోడ్యులర్ ఆపరేషన్ థియేటర్లు, 3T ఎంఆర్ఐ మరియు క్యాథ్ ల్యాబ్ విజువల్స్'
              : 'Explore our state-of-the-art campus, digital catheterisation lab, laminar airflow OTs, and critical care units.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'ALL' ? (language === 'te' ? 'అన్ని ఫోటోలు' : 'All Facilities') : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveModalIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-rose-300 border border-white/10">
                  {item.category}
                </div>

                {/* Zoom Icon overlay */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn className="w-4 h-4 text-rose-400" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-extrabold text-base sm:text-lg group-hover:text-rose-400 transition">
                    {language === 'te' ? item.titleTe : item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white cursor-pointer transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full bg-[#0c1220] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
              <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={filteredItems[activeModalIndex].imageUrl}
                  alt={filteredItems[activeModalIndex].title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 bg-slate-900/90 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs font-mono text-rose-400 uppercase font-bold">
                    {filteredItems[activeModalIndex].category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {language === 'te' ? filteredItems[activeModalIndex].titleTe : filteredItems[activeModalIndex].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {filteredItems[activeModalIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalIndex((activeModalIndex - 1 + filteredItems.length) % filteredItems.length)}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveModalIndex((activeModalIndex + 1) % filteredItems.length)}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
