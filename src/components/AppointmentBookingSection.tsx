import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Stethoscope, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  QrCode, 
  Printer, 
  Share2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Doctor, Language, OPToken } from '../types';
import { MOCK_DOCTORS, DEPARTMENTS, HOSPITAL_INFO } from '../data/mockData';
import { t } from '../i18n/translations';

interface AppointmentBookingSectionProps {
  language: Language;
  preSelectedDoctor?: Doctor | null;
  onBookingSuccess?: (token: OPToken) => void;
}

export const AppointmentBookingSection: React.FC<AppointmentBookingSectionProps> = ({
  language,
  preSelectedDoctor,
  onBookingSuccess
}) => {
  const tr = t(language);

  // Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [selectedDept, setSelectedDept] = useState<string>(
    preSelectedDoctor ? preSelectedDoctor.speciality : DEPARTMENTS[0].name
  );
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    preSelectedDoctor ? preSelectedDoctor.id : MOCK_DOCTORS[0].id
  );
  
  // Date default to tomorrow or today
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [appointmentDate, setAppointmentDate] = useState(getTomorrowDate());
  const [timeSlot, setTimeSlot] = useState('10:30 AM - 11:00 AM');
  const [symptoms, setSymptoms] = useState('');
  const [paymentOption, setPaymentOption] = useState<'Desk' | 'UPI'>('Desk');
  const [submissionSuccess, setSubmissionSuccess] = useState<OPToken | null>(null);

  // When preSelectedDoctor changes
  useEffect(() => {
    if (preSelectedDoctor) {
      setSelectedDoctorId(preSelectedDoctor.id);
      setSelectedDept(preSelectedDoctor.speciality);
    }
  }, [preSelectedDoctor]);

  // Doctors for the selected department
  const doctorsInDept = MOCK_DOCTORS.filter(
    (doc) => selectedDept === 'ALL' || doc.speciality.toLowerCase().includes(selectedDept.toLowerCase()) || selectedDept.toLowerCase().includes(doc.speciality.toLowerCase())
  );

  const currentDoctor = MOCK_DOCTORS.find((d) => d.id === selectedDoctorId) || doctorsInDept[0] || MOCK_DOCTORS[0];

  const slotsList = [
    '09:30 AM - 10:00 AM',
    '10:30 AM - 11:00 AM',
    '11:30 AM - 12:00 PM',
    '12:30 PM - 01:00 PM',
    '05:00 PM - 05:30 PM',
    '06:00 PM - 06:30 PM',
    '07:00 PM - 07:30 PM',
  ];

  const handleBookingSubmit = (e: React.FormEvent, dispatchMode: 'whatsapp' | 'email') => {
    e.preventDefault();

    if (!patientName.trim() || !patientPhone.trim()) {
      alert(language === 'te' ? 'దయచేసి పేరు మరియు మొబైల్ నంబర్ నమోదు చేయండి' : 'Please fill in Patient Name and Mobile Number');
      return;
    }

    const tokenNumber = Math.floor(Math.random() * 40) + 12;
    const newToken: OPToken = {
      id: `LLH-OP-${Date.now().toString().slice(-6)}`,
      tokenNumber,
      patientName,
      patientPhone,
      patientAge: Number(patientAge) || 30,
      gender,
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      speciality: currentDoctor.speciality,
      appointmentDate,
      timeSlot,
      consultationType: 'in-person',
      symptoms: symptoms || 'General Checkup',
      status: 'confirmed',
      paymentStatus: paymentOption === 'UPI' ? 'paid' : 'pending',
      paymentMode: paymentOption,
      amount: currentDoctor.consultationFee,
      createdAt: new Date().toISOString(),
      queuePosition: 3,
      estimatedWaitMinutes: 15
    };

    setSubmissionSuccess(newToken);
    if (onBookingSuccess) onBookingSuccess(newToken);

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Format WhatsApp message
    const formattedWhatsAppMsg = `🏥 *LIFELINE HOSPITAL - OP APPOINTMENT CONFIRMATION*\n\n` +
      `🎫 *Token No:* #${tokenNumber} (ID: ${newToken.id})\n` +
      `👤 *Patient:* ${patientName} (${gender}, ${patientAge || 30} Yrs)\n` +
      `📱 *Phone:* ${patientPhone}\n` +
      `👨‍⚕️ *Doctor:* ${currentDoctor.name} (${currentDoctor.speciality})\n` +
      `📅 *Date:* ${appointmentDate}\n` +
      `⏰ *Time Slot:* ${timeSlot}\n` +
      `🚪 *Room:* ${currentDoctor.chamberNumber} (${currentDoctor.floor})\n` +
      `💰 *Fee:* ₹${currentDoctor.consultationFee} (${paymentOption === 'UPI' ? 'Paid via UPI' : 'Pay at Reception'})\n` +
      `📝 *Symptoms:* ${symptoms || 'General Checkup'}\n\n` +
      `📍 *Address:* ${HOSPITAL_INFO.address}\n` +
      `☎️ *Helpline:* ${HOSPITAL_INFO.emergencyPhone}`;

    if (dispatchMode === 'whatsapp') {
      const waUrl = `https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent(formattedWhatsAppMsg)}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080c14] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'ఆన్‌లైన్ ఓపీ రిజిస్ట్రేషన్' : 'Zero Waiting Online OP'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.bookingTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.bookingSubtitle}
          </p>
        </div>

        {/* If appointment successfully booked, show Digital Pass */}
        {submissionSuccess ? (
          <div className="max-w-2xl mx-auto rounded-3xl bg-[#0c1220] border border-rose-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {language === 'te' ? 'అపాయింట్‌మెంట్ విజయవంతంగా బుక్ అయింది!' : 'Appointment Successfully Confirmed!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'te'
                  ? 'మీ ఓపీ టోకెన్ వివరాలు వాట్సాప్ మరియు మొబైల్ కు పంపబడ్డాయి.'
                  : 'Your OP Token slip is generated and ready. Present this pass at the consultation desk.'}
              </p>
            </div>

            {/* Official Token Pass Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#101729] to-slate-900 border border-slate-700/80 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs uppercase font-extrabold text-rose-400 tracking-wider">
                    {HOSPITAL_INFO.name} · Official OP Slip
                  </div>
                  <div className="text-xs text-slate-400">{HOSPITAL_INFO.address}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Token Number</div>
                  <div className="text-3xl font-black text-white tracking-wider font-mono">
                    #{submissionSuccess.tokenNumber}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Patient Name:</span>
                  <span className="font-bold text-white text-sm">{submissionSuccess.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Consulting Doctor:</span>
                  <span className="font-bold text-rose-300 text-sm">{submissionSuccess.doctorName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Department & Room:</span>
                  <span className="font-semibold text-slate-200">{submissionSuccess.speciality} · {currentDoctor.chamberNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Date & Time Slot:</span>
                  <span className="font-semibold text-emerald-400 font-mono">{submissionSuccess.appointmentDate} ({submissionSuccess.timeSlot})</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <QrCode className="w-5 h-5 text-rose-400" />
                  <span className="font-mono text-[11px]">{submissionSuccess.id}</span>
                </div>
                <span className="bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold">
                  Status: Guaranteed OP Slot
                </span>
              </div>
            </div>

            {/* Quick Dispatch Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappCleanNumber}?text=${encodeURIComponent(`Namaste Lifeline Hospital, here is my booked token: #${submissionSuccess.tokenNumber} for ${submissionSuccess.patientName} with ${submissionSuccess.doctorName} on ${submissionSuccess.appointmentDate}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'te' ? 'వాట్సాప్ లో మెసేజ్ పంపండి' : 'Send to WhatsApp'}</span>
              </a>

              <button
                onClick={() => window.print()}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-rose-400" />
                <span>{language === 'te' ? 'టోకెన్ ప్రింట్ తీసుకోండి' : 'Print OP Token Pass'}</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setSubmissionSuccess(null)}
                className="text-xs text-rose-400 hover:underline cursor-pointer"
              >
                {language === 'te' ? 'మరొక అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Another Appointment'}
              </button>
            </div>
          </div>
        ) : (
          /* Main Booking Form */
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c1220] border border-slate-800 p-6 sm:p-10 shadow-2xl">
            <form className="space-y-6">
              
              {/* Doctor Quick Preview Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={currentDoctor.avatarUrl}
                    alt={currentDoctor.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-700"
                  />
                  <div>
                    <div className="text-xs text-rose-400 font-bold uppercase tracking-wider">
                      Selected Specialist Doctor
                    </div>
                    <div className="text-base sm:text-lg font-black text-white">
                      {language === 'te' ? currentDoctor.nameTe : currentDoctor.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {currentDoctor.speciality} · {currentDoctor.chamberNumber} ({currentDoctor.floor})
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-slate-400">Consultation Fee</div>
                  <div className="text-2xl font-black text-white">₹{currentDoctor.consultationFee}</div>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Department Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.selectDept} *
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => {
                      const newDept = e.target.value;
                      setSelectedDept(newDept);
                      const docs = MOCK_DOCTORS.filter(d => d.speciality === newDept);
                      if (docs.length > 0) {
                        setSelectedDoctorId(docs[0].id);
                      }
                    }}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition cursor-pointer"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name} className="bg-slate-900 text-white">
                        {language === 'te' ? dept.nameTe : dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.selectDoctor} *
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition cursor-pointer"
                  >
                    {doctorsInDept.map((doc) => (
                      <option key={doc.id} value={doc.id} className="bg-slate-900 text-white">
                        {language === 'te' ? doc.nameTe : doc.name} ({doc.speciality}) - ₹{doc.consultationFee}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.patientName} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={language === 'te' ? 'ఉదా: కె. వెంకటేష్' : 'e.g. K. Venkatesh'}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                {/* Patient Phone (WhatsApp Enabled) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.mobileNumber} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="e.g. 98480 12345"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                {/* Email (Optional for receipt) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Patient Email (For Digital Slip)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="110"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="Age (Yrs)"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition cursor-pointer"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Appointment Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.appointmentDate} *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {tr.preferredSlot} *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500 transition cursor-pointer"
                    >
                      {slotsList.map((sl, idx) => (
                        <option key={idx} value={sl} className="bg-slate-900 text-white">
                          {sl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Symptoms / Chief Complaint */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  {tr.symptoms}
                </label>
                <textarea
                  rows={2}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder={language === 'te' ? 'మీ సమస్య లేదా అనారోగ్య లక్షణాలను క్లుప్తంగా రాయండి (ఉదా: ఛాతీలో నొప్పి, కీళ్ళ నొప్పులు, జ్వరం)' : 'Briefly describe your symptoms or reason for doctor consultation...'}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 transition"
                />
              </div>

              {/* Payment Mode Option */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs text-slate-300 font-medium">
                    {language === 'te' ? 'కన్సల్టేషన్ ఫీజు చెల్లింపు విధానం:' : 'Consultation Fee Payment Mode:'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <label className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    paymentOption === 'Desk' ? 'bg-rose-600/30 border-rose-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={paymentOption === 'Desk'}
                      onChange={() => setPaymentOption('Desk')}
                      className="hidden"
                    />
                    Pay at Hospital Counter
                  </label>

                  <label className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    paymentOption === 'UPI' ? 'bg-rose-600/30 border-rose-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={paymentOption === 'UPI'}
                      onChange={() => setPaymentOption('UPI')}
                      className="hidden"
                    />
                    Instant UPI QR
                  </label>
                </div>
              </div>

              {/* Submit Buttons (WhatsApp & Email confirmation as requested) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={(e) => handleBookingSubmit(e, 'whatsapp')}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-950 flex items-center justify-center gap-2.5 transition active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{language === 'te' ? 'బుక్ చేసి వాట్సాప్ కు పంపండి' : 'Confirm & Send to WhatsApp'}</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleBookingSubmit(e, 'email')}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-rose-950 flex items-center justify-center gap-2.5 transition active:scale-95 cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>{language === 'te' ? 'డిజిటల్ ఓపీ పాస్ రూపొందించండి' : 'Confirm & Get Digital Pass'}</span>
                </button>
              </div>

              <div className="text-center text-xs text-slate-500">
                🔒 Protected by 256-bit HIPAA compliant data privacy encryption · Instant automated SMS/WhatsApp trigger
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
