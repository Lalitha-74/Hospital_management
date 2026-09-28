import React, { useState } from 'react';
import { 
  HeartPulse, 
  Bone, 
  Baby, 
  Smile, 
  Brain, 
  Ambulance, 
  CheckCircle2, 
  ChevronRight, 
  Bed, 
  User, 
  Calendar 
} from 'lucide-react';
import { Language, DepartmentInfo } from '../types';
import { DEPARTMENTS } from '../data/mockData';
import { t } from '../i18n/translations';

interface DepartmentsSectionProps {
  language: Language;
  onOpenBooking: () => void;
  onSelectDoctor?: (doctorId: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ language, onOpenBooking }) => {
  const tr = t(language);
  const [selectedDeptId, setSelectedDeptId] = useState<string>(DEPARTMENTS[0].id);

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Bone': return <Bone className="w-6 h-6 text-amber-500" />;
      case 'Baby': return <Baby className="w-6 h-6 text-pink-500" />;
      case 'Smile': return <Smile className="w-6 h-6 text-cyan-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-purple-400" />;
      case 'Ambulance': return <Ambulance className="w-6 h-6 text-red-500" />;
      default: return <HeartPulse className="w-6 h-6 text-rose-500" />;
    }
  };

  const activeDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <section className="py-16 sm:py-24 bg-[#080c14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'ప్రత్యేక విభాగాలు & చికిత్సలు' : 'Centres of Clinical Excellence'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.deptTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.deptSubtitle}
          </p>
        </div>

        {/* Department Pills / Tabs for Fast Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {DEPARTMENTS.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-900/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {getDeptIcon(dept.iconName)}
                <span>{language === 'te' ? dept.nameTe : dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Department Spotlight Card */}
        <div className="rounded-3xl bg-[#0c1220] border border-slate-800 overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Left Col: Info, Key Services, Head Doctor */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center">
                  {getDeptIcon(activeDept.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {language === 'te' ? activeDept.nameTe : activeDept.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-rose-400" />
                      {activeDept.bedCapacity} Dedicated Beds
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      {activeDept.headDoctor}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'te' ? activeDept.descriptionTe : activeDept.description}
              </p>

              {/* Key Services & Procedures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <div className="text-xs uppercase font-extrabold text-rose-400 tracking-wider">
                    {language === 'te' ? 'కీలక సేవలు (Services)' : 'Key Services'}
                  </div>
                  <ul className="space-y-1.5">
                    {activeDept.keyServices.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase font-extrabold text-purple-400 tracking-wider">
                    {language === 'te' ? 'సర్జికల్ ప్రొసీజర్స్ (Procedures)' : 'Specialized Procedures'}
                  </div>
                  <ul className="space-y-1.5">
                    {activeDept.procedures.map((proc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book OPD Button for this Department */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-rose-900/40 flex items-center gap-2 cursor-pointer transition active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'te' ? 'ఈ విభాగానికి ఓపీ బుక్ చేయండి' : `Book OPD for ${activeDept.name}`}</span>
                </button>
              </div>
            </div>

            {/* Right Col: High-Tech Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl h-64 sm:h-80 group">
                <img
                  src={activeDept.imageUrl}
                  alt={activeDept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-semibold text-slate-200">
                    {activeDept.headDoctor} & Clinical Team
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* All Departments Grid Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              onClick={() => setSelectedDeptId(dept.id)}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-rose-500/40 transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition">
                  {getDeptIcon(dept.iconName)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                  {dept.bedCapacity} Beds
                </span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition">
                {language === 'te' ? dept.nameTe : dept.name}
              </h4>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                {language === 'te' ? dept.descriptionTe : dept.description}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-rose-400">
                <span>{language === 'te' ? 'వివరాలు చూడండి' : 'View Specialities'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
