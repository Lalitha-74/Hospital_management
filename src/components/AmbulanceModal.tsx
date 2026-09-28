import React, { useState, useEffect } from 'react';
import { 
  X, 
  Ambulance, 
  Phone, 
  MapPin, 
  Navigation, 
  Activity, 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Radio
} from 'lucide-react';
import { Language, AmbulanceTrip } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';

interface AmbulanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AmbulanceModal: React.FC<AmbulanceModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'track' | 'dispatch' | 'triage'>('track');
  const [sirenPlaying, setSirenPlaying] = useState(false);
  const [callerName, setCallerName] = useState('');
  const [callerPhone, setCallerPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Banjara Hills Road No 1 / Jubilee Hills Checkpost');
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState<'ICU on Wheels' | 'Cardiac Mobile' | 'Basic Life Support' | 'Neonatal'>('ICU on Wheels');

  // Live GPS Simulation
  const [trip, setTrip] = useState<AmbulanceTrip>({
    id: 'AMB-108-AP77',
    callTime: '10:14 AM',
    patientName: 'Emergency Cardiac Dispatch',
    callerPhone: '+91 98480 12345',
    pickupLocation: 'Banjara Hills / Jubilee Hills Road No 36',
    status: 'en_route',
    etaMinutes: 6,
    driverName: 'Raju Goud (Senior EMT Paramedic)',
    driverPhone: '+91 9100 108 108',
    ambulanceType: 'ICU on Wheels',
    vehiclePlate: 'TS 09 AMB 108',
    currentLat: 17.4239,
    currentLng: 78.4482,
    destinationLat: 17.4156,
    destinationLng: 78.4357,
    speedKmh: 58,
    vitals: {
      spo2: 96,
      pulse: 88,
      bloodPressure: '130/85',
      gcsScore: 15,
      triageLevel: 'P1_CRITICAL',
      notes: '15L High Flow O2 initiated. IV Cannula secured.'
    }
  });

  // Triage Logger states
  const [spo2, setSpo2] = useState(trip.vitals?.spo2 || 96);
  const [pulse, setPulse] = useState(trip.vitals?.pulse || 88);
  const [bp, setBp] = useState(trip.vitals?.bloodPressure || '130/85');
  const [triageSaved, setTriageSaved] = useState(false);

  // Siren Audio simulation via Web Audio API
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let osc: OscillatorNode | null = null;
    let timer: any = null;

    if (sirenPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtx = new AudioContextClass();
        osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.08;

        osc.type = 'sawtooth';
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();

        let high = false;
        timer = setInterval(() => {
          if (osc && audioCtx && audioCtx.state === 'running') {
            osc.frequency.setValueAtTime(high ? 960 : 770, audioCtx.currentTime);
            high = !high;
          }
        }, 500);
      } catch (err) {
        console.error('Audio context error', err);
      }
    }

    return () => {
      if (timer) clearInterval(timer);
      if (osc) {
        try { osc.stop(); } catch {}
      }
      if (audioCtx) {
        try { audioCtx.close(); } catch {}
      }
    };
  }, [sirenPlaying]);

  // ETA countdown simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setTrip(prev => {
        if (prev.etaMinutes <= 1) return { ...prev, etaMinutes: 1, speedKmh: 20 };
        return {
          ...prev,
          etaMinutes: prev.etaMinutes - 1,
          speedKmh: Math.floor(Math.random() * 15) + 48
        };
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callerPhone) return;

    setTrip(prev => ({
      ...prev,
      id: `AMB-${Math.floor(Math.random() * 900) + 100}`,
      patientName: callerName || 'Priority Trauma Dispatch',
      callerPhone,
      pickupLocation,
      ambulanceType: selectedAmbulanceType,
      etaMinutes: 7,
      status: 'en_route'
    }));

    setActiveTab('track');
    alert('Ambulance successfully dispatched! Live GPS tracking activated.');
  };

  const handleSaveTriage = () => {
    setTrip(prev => ({
      ...prev,
      vitals: {
        spo2,
        pulse,
        bloodPressure: bp,
        gcsScore: 15,
        triageLevel: 'P1_CRITICAL',
        notes: 'Updated by emergency responder.'
      }
    }));
    setTriageSaved(true);
    setTimeout(() => setTriageSaved(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0c1220] border border-rose-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 border-b border-rose-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-900/60 animate-pulse">
              <Ambulance className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold text-rose-400 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span>24/7 Lifeline Emergency Trauma EMS</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                108 Live GPS Fleet & Paramedic Telemetry
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSirenPlaying(!sirenPlaying)}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                sirenPlaying
                  ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                  : 'bg-slate-900 text-slate-400 hover:text-white border-slate-700'
              }`}
              title="Test Siren Audio"
            >
              {sirenPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{sirenPlaying ? 'Siren ON' : 'Audio Siren'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900/90 border-b border-slate-800 p-2 gap-2">
          <button
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'track' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>Live GPS Radar</span>
          </button>

          <button
            onClick={() => setActiveTab('dispatch')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'dispatch' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Ambulance className="w-4 h-4" />
            <span>Request Ambulance</span>
          </button>

          <button
            onClick={() => setActiveTab('triage')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'triage' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Responder Mode (Vitals)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: Live GPS Radar */}
          {activeTab === 'track' && (
            <div className="space-y-6">
              
              {/* Telemetry Radar Screen */}
              <div className="relative rounded-3xl bg-[#090d16] border border-slate-800 overflow-hidden h-72 sm:h-80 flex items-center justify-center">
                {/* Radar Grid circles */}
                <div className="absolute w-80 h-80 rounded-full border border-rose-500/20 animate-ping opacity-25" />
                <div className="absolute w-60 h-60 rounded-full border border-rose-500/30" />
                <div className="absolute w-36 h-36 rounded-full border border-rose-500/40" />
                <div className="absolute w-full h-[1px] bg-slate-800" />
                <div className="absolute h-full w-[1px] bg-slate-800" />

                {/* Moving Ambulance Target */}
                <div className="absolute flex flex-col items-center animate-pulse" style={{ top: '38%', left: '46%' }}>
                  <div className="w-10 h-10 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-xl shadow-rose-900/80 border-2 border-white">
                    <Ambulance className="w-5 h-5" />
                  </div>
                  <span className="mt-1 bg-black/90 px-2 py-0.5 rounded text-[10px] font-mono text-white border border-rose-500/40 font-bold whitespace-nowrap">
                    {trip.vehiclePlate} ({trip.speedKmh} km/h)
                  </span>
                </div>

                {/* Destination Hospital Pin */}
                <div className="absolute bottom-6 right-8 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-xs text-white">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Lifeline Trauma Bay (Destination)</span>
                </div>

                {/* Live Speed & Status Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GPS Telemetry Locked</span>
                  </div>
                  <div className="text-xl font-black text-white font-mono">{trip.etaMinutes} MINS ETA</div>
                  <div className="text-[11px] text-slate-400">Current Speed: {trip.speedKmh} km/h</div>
                </div>
              </div>

              {/* Driver & Trip Info Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Assigned Paramedic:</span>
                  <span className="font-bold text-white text-sm">{trip.driverName}</span>
                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                    className="text-rose-400 font-bold flex items-center gap-1 mt-1 hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Driver / EMT</span>
                  </a>
                </div>

                <div>
                  <span className="text-slate-500 block">Ambulance Fleet Type:</span>
                  <span className="font-bold text-white text-sm">{trip.ambulanceType}</span>
                  <span className="text-slate-400 block mt-1">Vehicle: {trip.vehiclePlate}</span>
                </div>

                <div>
                  <span className="text-slate-500 block">Pickup Location:</span>
                  <span className="font-semibold text-slate-200 block">{trip.pickupLocation}</span>
                  <span className="text-emerald-400 font-bold block mt-1">Status: En Route (Priority Red)</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Request Ambulance */}
          {activeTab === 'dispatch' && (
            <form onSubmit={handleDispatch} className="space-y-4 max-w-xl mx-auto">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Caller / Attendant Name
                </label>
                <input
                  type="text"
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                  placeholder="e.g. Ramesh Reddy"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={callerPhone}
                  onChange={(e) => setCallerPhone(e.target.value)}
                  placeholder="+91 98480 12345"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Pickup Street / Landmark Address *
                </label>
                <input
                  type="text"
                  required
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Street name, landmark, colony"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Ambulance Category
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(['ICU on Wheels', 'Cardiac Mobile', 'Basic Life Support', 'Neonatal'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedAmbulanceType(type)}
                      className={`p-3 rounded-xl border text-left font-bold transition cursor-pointer ${
                        selectedAmbulanceType === type
                          ? 'bg-rose-600/30 border-rose-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-sm shadow-xl shadow-rose-900/50 flex items-center justify-center gap-2 cursor-pointer transition"
              >
                <Ambulance className="w-5 h-5" />
                <span>Confirm & Dispatch Immediate 108</span>
              </button>
            </form>
          )}

          {/* TAB 3: Responder Mode (High Pressure Vitals Triage) */}
          {activeTab === 'triage' && (
            <div className="space-y-5 max-w-xl mx-auto">
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs">
                <ShieldAlert className="w-4 h-4 inline mr-1 text-rose-400" />
                <span>Emergency Paramedic Touch Console. Log vitals to broadcast directly to Lifeline Emergency Room.</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase font-bold">SpO2 (%)</div>
                  <div className="text-3xl font-black text-emerald-400 font-mono my-2">{spo2}%</div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setSpo2(Math.max(70, spo2 - 1))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setSpo2(Math.min(100, spo2 + 1))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase font-bold">Pulse (BPM)</div>
                  <div className="text-3xl font-black text-rose-400 font-mono my-2">{pulse}</div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setPulse(Math.max(40, pulse - 5))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setPulse(Math.min(180, pulse + 5))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 uppercase font-bold">Blood Pressure</div>
                  <input
                    type="text"
                    value={bp}
                    onChange={(e) => setBp(e.target.value)}
                    className="w-full text-center text-xl font-black text-white font-mono bg-transparent border-b border-slate-700 py-1 my-2 focus:outline-none"
                  />
                  <div className="text-[10px] text-slate-500">mmHg</div>
                </div>
              </div>

              <button
                onClick={handleSaveTriage}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{triageSaved ? 'Vitals Broadcasted to ER!' : 'Broadcast Vitals to Hospital Bay'}</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
