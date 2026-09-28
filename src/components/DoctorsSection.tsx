import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  MapPin, 
  Star, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Award, 
  Filter, 
  Languages,
  CheckCircle,
  Table
} from 'lucide-react';
import { Doctor, Language, Speciality } from '../types';
import { MOCK_DOCTORS, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface DoctorsSectionProps {
  language: Language;
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ language, onBookDoctor }) => {
  const tr = t(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const specialities: { id: string; label: string }[] = [
    { id: 'ALL', label: language === 'te' ? 'అన్ని విభాగాలు' : 'All Specialities' },
    { id: 'Cardiology', label: language === 'te' ? 'కార్డియాలజీ (గుండె)' : 'Cardiology' },
    { id: 'Orthopedics', label: language === 'te' ? 'ఆర్థోపెడిక్స్ (కీళ్ళు & ఎముకలు)' : 'Orthopedics' },
    { id: 'Gynecology & Obstetrics', label: language === 'te' ? 'గైనకాలజీ (స్త్రీ & ప్రసవ)' : 'Gynecology' },
    { id: 'Pediatrics', label: language === 'te' ? 'పీడియాట్రిక్స్ (పిల్లల వైద్యం)' : 'Pediatrics' },
    { id: 'Neurology & Spine', label: language === 'te' ? 'న్యూరాలజీ (మెదడు & వెన్నెముక)' : 'Neurology' },
    { id: 'Emergency & Trauma', label: language === 'te' ? 'ఎమర్జెన్సీ & ట్రామా' : 'Emergency Trauma' },
    { id: 'General & Laparoscopy', label: language === 'te' ? 'జనరల్ సర్జరీ' : 'General Surgery' },
    { id: 'Dermatology & Cosmetology', label: language === 'te' ? 'డెర్మటాలజీ (చర్మ వ్యాధులు)' : 'Dermatology' },
  ];

  const filteredDoctors = MOCK_DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.nameTe.includes(searchTerm);

    const matchesSpeciality = selectedSpeciality === 'ALL' || doc.speciality === selectedSpeciality;

    return matchesSearch && matchesSpeciality;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'అత్యున్నత నైపుణ్యం గల వైద్యులు' : 'Distinguished Faculty'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.doctorsTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.doctorsSubtitle}
          </p>
        </div>

        {/* Search, Filter Bar and View Toggle */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#0c1220] border border-slate-800 shadow-xl mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'te' ? 'డాక్టర్ పేరు, విభాగం లేదా వ్యాధి లక్షణం వెతకండి...' : 'Search doctor name, department, or clinical interest...'}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            {/* Speciality Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSpeciality}
                onChange={(e) => setSelectedSpeciality(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-rose-500 transition cursor-pointer"
              >
                {specialities.map((sp) => (
                  <option key={sp.id} value={sp.id} className="bg-slate-900 text-white">
                    {sp.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle: Cards vs Table */}
            <div className="md:col-span-2 flex items-center justify-end gap-1.5 bg-slate-900 p-1 rounded-2xl border border-slate-800">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Timings Table</span>
              </button>
            </div>

          </div>

          {/* Quick Filter Speciality Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar">
            {specialities.slice(0, 6).map((sp) => (
              <button
                key={sp.id}
                onClick={() => setSelectedSpeciality(sp.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedSpeciality === sp.id
                    ? 'bg-rose-600/30 text-rose-300 border border-rose-500/50'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: Comprehensive Doctor Timings Table */}
        {viewMode === 'table' ? (
          <div className="rounded-3xl bg-[#0c1220] border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span>{language === 'te' ? 'వైద్యుల పూర్తి వారపు సమయాల పట్టిక' : 'Comprehensive OPD Weekly Timings Schedule'}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'te' ? 'ఓపీ ప్రారంభ సమయానికి 15 నిమిషాల ముందు రిపోర్ట్ చేయండి' : 'Patients are advised to report 15 minutes before the scheduled time slot.'}
                </p>
              </div>
              <span className="text-xs text-rose-400 font-mono bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/30">
                {filteredDoctors.length} Doctors Available
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Doctor & Speciality</th>
                    <th className="py-3.5 px-4">Qualification & Exp</th>
                    <th className="py-3.5 px-4">OPD Days</th>
                    <th className="py-3.5 px-4">Morning Session</th>
                    <th className="py-3.5 px-4">Evening Session</th>
                    <th className="py-3.5 px-4">Chamber</th>
                    <th className="py-3.5 px-4">Fee</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredDoctors.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.avatarUrl}
                            alt={doc.name}
                            className="w-10 h-10 rounded-full object-cover border border-slate-700 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-white text-sm">
                              {language === 'te' ? doc.nameTe : doc.name}
                            </div>
                            <div className="text-xs text-rose-400 font-medium">{doc.speciality}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-slate-200">{doc.qualification}</div>
                        <div className="text-[11px] text-slate-400">{doc.experienceYears} Years Exp</div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-200 whitespace-nowrap">
                        {doc.days}
                      </td>
                      <td className="py-4 px-4 font-mono text-emerald-400 whitespace-nowrap">
                        {doc.morningSlots}
                      </td>
                      <td className="py-4 px-4 font-mono text-purple-400 whitespace-nowrap">
                        {doc.eveningSlots}
                      </td>
                      <td className="py-4 px-4 text-slate-300">
                        <div className="font-bold text-white">{doc.chamberNumber}</div>
                        <div className="text-[10px] text-slate-400">{doc.floor}</div>
                      </td>
                      <td className="py-4 px-4 font-black text-white whitespace-nowrap">
                        ₹{doc.consultationFee}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                        <button
                          onClick={() => onBookDoctor(doc)}
                          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs shadow-md shadow-rose-900/40 transition cursor-pointer"
                        >
                          Book Slot
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode 2: Instagram-style Rich Dark Doctor Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col group"
              >
                {/* Doctor Avatar Header with Status Ring */}
                <div className="relative h-56 bg-slate-900 overflow-hidden">
                  <img
                    src={doc.avatarUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/30" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 text-xs font-bold text-white">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{doc.rating}</span>
                    <span className="text-[10px] text-slate-400">({doc.reviewCount})</span>
                  </div>

                  {/* Speciality Badge */}
                  <div className="absolute bottom-3 left-3 bg-rose-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-white tracking-wide shadow">
                    {doc.speciality}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-rose-400 transition">
                      {language === 'te' ? doc.nameTe : doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 line-clamp-1 mt-0.5">
                      {doc.qualification}
                    </p>
                    <div className="text-[11px] text-rose-300 font-mono mt-1">
                      {doc.experienceYears} Years Clinical Experience
                    </div>

                    <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  {/* Timings Strip */}
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Morning:</span>
                      </span>
                      <span className="font-mono text-emerald-400 font-semibold">{doc.morningSlots}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        <span>Evening:</span>
                      </span>
                      <span className="font-mono text-purple-400 font-semibold">{doc.eveningSlots}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-slate-800 text-[11px]">
                      <span className="text-slate-400">Days: {doc.days}</span>
                      <span className="text-rose-400 font-semibold">{doc.chamberNumber}</span>
                    </div>
                  </div>

                  {/* Fee & Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-800/80">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-500">Consultation Fee</div>
                      <div className="text-lg font-black text-white">₹{doc.consultationFee}</div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent(`Namaste, I want to book an appointment with ${doc.name} (${doc.speciality})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-500/40 transition"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onBookDoctor(doc)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs shadow-md shadow-rose-900/40 transition active:scale-95 cursor-pointer flex items-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book OP</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
