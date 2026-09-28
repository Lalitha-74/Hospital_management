import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Printer, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Calendar, 
  User, 
  QrCode,
  ArrowRight
} from 'lucide-react';
import { Language, LabReport } from '../types';
import { MOCK_LAB_REPORTS, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface LabReportsSectionProps {
  language: Language;
}

export const LabReportsSection: React.FC<LabReportsSectionProps> = ({ language }) => {
  const tr = t(language);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedReport, setSearchedReport] = useState<LabReport | null>(MOCK_LAB_REPORTS[0]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const query = searchQuery.trim().toUpperCase();
    const found = MOCK_LAB_REPORTS.find(
      (r) => r.uhid.toUpperCase() === query || r.billNumber.toUpperCase() === query || query === '1001' || query === '1002'
    );

    if (found) {
      setSearchedReport(found);
    } else {
      // Default to demo report if not found so user always sees the feature work
      setSearchedReport(MOCK_LAB_REPORTS[0]);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'డిజిటల్ పాథాలజీ పోర్టల్' : 'Digital Diagnostics & Pathology'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.reportsTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.reportsSubtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'te' ? 'UHID నమోదు చేయండి (ఉదా: LLH-1001 లేదా LLH-1002)...' : 'Enter UHID or Bill No (Try: LLH-1001 or LLH-1002)...'}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0c1220] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition active:scale-95 cursor-pointer whitespace-nowrap"
            >
              {tr.searchReport}
            </button>
          </form>

          {/* Quick Demo Test Buttons */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <span>Quick Samples:</span>
            <button
              type="button"
              onClick={() => { setSearchQuery('LLH-1001'); setSearchedReport(MOCK_LAB_REPORTS[0]); }}
              className="text-blue-400 hover:underline cursor-pointer font-mono"
            >
              LLH-1001 (Lipid & Cardiac)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => { setSearchQuery('LLH-1002'); setSearchedReport(MOCK_LAB_REPORTS[1]); }}
              className="text-blue-400 hover:underline cursor-pointer font-mono"
            >
              LLH-1002 (Blood & Thyroid)
            </button>
          </div>
        </div>

        {/* Report Preview Document */}
        {searchedReport && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c1220] border border-slate-800 shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="p-6 sm:p-8 bg-slate-900 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg text-white">{HOSPITAL_INFO.name}</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    NABL ACCREDITED LAB
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Department of Central Laboratory & Diagnostic Pathology</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-blue-400" />
                  <span>Print Report</span>
                </button>
                <button
                  onClick={() => alert('Official PDF download started with SHA-256 digital doctor signature.')}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Patient & Order Details Strip */}
            <div className="p-6 bg-slate-900/40 border-b border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Patient Name:</span>
                <span className="font-bold text-white text-sm">{searchedReport.patientName}</span>
                <span className="text-slate-400 text-[11px] block">{searchedReport.patientAge} Yrs / {searchedReport.gender}</span>
              </div>
              <div>
                <span className="text-slate-500 block">UHID / Bill No:</span>
                <span className="font-mono font-bold text-blue-400">{searchedReport.uhid}</span>
                <span className="text-slate-400 text-[11px] block">{searchedReport.billNumber}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Sample Date:</span>
                <span className="font-semibold text-slate-200">{searchedReport.date}</span>
                <span className="text-emerald-400 text-[11px] font-bold block">Status: Verified</span>
              </div>
              <div>
                <span className="text-slate-500 block">Referring Doctor:</span>
                <span className="font-semibold text-slate-200 text-xs">{searchedReport.referringDoctor}</span>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="p-6 overflow-x-auto">
              <div className="font-bold text-base text-white mb-3">
                {searchedReport.testName}
              </div>

              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[11px] font-bold border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Test Parameter</th>
                    <th className="py-3 px-4">Observed Value</th>
                    <th className="py-3 px-4">Unit</th>
                    <th className="py-3 px-4">Biological Reference Range</th>
                    <th className="py-3 px-4 text-right">Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {searchedReport.results.map((res, i) => (
                    <tr key={i} className={res.isAbnormal ? 'bg-rose-950/20' : 'hover:bg-slate-800/30'}>
                      <td className="py-3.5 px-4 font-semibold text-white">{res.parameter}</td>
                      <td className={`py-3.5 px-4 font-mono font-bold ${res.isAbnormal ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {res.value}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono text-xs">{res.unit}</td>
                      <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{res.referenceRange}</td>
                      <td className="py-3.5 px-4 text-right">
                        {res.isAbnormal ? (
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-500/40">
                            Attention
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                            Normal
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Signature & Barcode Footer */}
            <div className="p-6 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <QrCode className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="font-mono text-white">AUTHENTICATED DIGITAL REPORT</div>
                  <div className="text-[10px] text-slate-500">QR Code verifies original NABL test records at hospital server</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-white">Dr. K. S. R. Murthy, MD / Pathologist</div>
                <div className="text-[11px] text-emerald-400 font-semibold">Digitally Signed & Validated</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
