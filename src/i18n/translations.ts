import { Language } from '../types';

export const t = (lang: Language) => {
  const dict: Record<Language, Record<string, string>> = {
    en: {
      hospitalName: 'Lifeline Hospital',
      tagline: '24/7 Super Speciality Healthcare & Trauma Care',
      emergencyNumber: '+91 9100 108 108',
      emergencyHighlight: '24/7 EMERGENCY & AMBULANCE HELPLINE',
      callAmbulance: 'Emergency 108 / Ambulance',
      bookAppointment: 'Book Appointment',
      onlineOP: 'Online OP Booking',
      doctorTimings: 'Doctor Timings Table',
      departments: 'Departments & Services',
      doctors: 'Specialist Doctors',
      gallery: 'Hospital Gallery',
      packages: 'Health Packages',
      aarogyasri: 'Aarogyasri & Cashless',
      reports: 'Lab Reports',
      blog: 'Health Tips & Blog',
      about: 'About Us',
      contact: 'Contact & Map',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp Us',
      directions: 'Get Directions',
      quickOPToken: 'Instant Token Slip',
      nabhCertified: 'NABH & NABL Accredited Super Speciality',
      freeCashless: '100% Aarogyasri & Insurance Cashless',
      beds350: '350 Beds & 60-Bed Critical ICU',
      ratingText: '4.9/5 Rating (3,400+ Patient Reviews)',
      
      // Hero
      heroBadge: 'EMERGENCY TRAUMA CARE & ADVANCED CATH LAB',
      heroTitlePrefix: 'Lifesaving Precision,',
      heroTitleHighlight: 'Compassionate Care.',
      heroSubtitle: 'Leading Multi-Speciality Medical Hub with 45+ super specialists, 24/7 emergency trauma team, computerized online OP tokens, and instant Aarogyasri cashless processing.',
      heroBookBtn: 'Book Doctor Appointment',
      heroCallEmergency: 'Emergency Call 24/7',
      heroDoctorTimingBtn: 'View OPD Timings',

      // About
      aboutTitle: 'About Lifeline Hospital',
      aboutSubtitle: 'Over 14+ years of dedicated clinical excellence in Andhra Pradesh & Telangana',
      aboutMission: 'Our Mission & Vision',
      aboutMissionText: 'To provide world-class, ethical, and compassionate super-speciality healthcare accessible to every citizen, bridging state-of-the-art medical technology with patient-centric affordability.',

      // Departments
      deptTitle: 'Centre of Excellence Departments',
      deptSubtitle: 'Comprehensive multi-disciplinary care powered by cutting-edge medical equipment',

      // Doctors
      doctorsTitle: 'Our Senior Specialist Doctors',
      doctorsSubtitle: 'Experienced professors, DM/MCh super specialists, and renowned surgeons',
      experienceYears: 'Years Experience',
      consultationFee: 'Consultation Fee',
      morningTimings: 'Morning OPD',
      eveningTimings: 'Evening OPD',
      roomChamber: 'Chamber Room',
      bookSlot: 'Book Appointment',
      viewAllTimings: 'Full Weekly Timings Schedule',

      // Booking
      bookingTitle: 'Book Doctor Consultation (Online OP)',
      bookingSubtitle: 'Instant confirmation sent straight to your WhatsApp and Email',
      patientName: 'Patient Full Name',
      mobileNumber: 'Mobile Number (WhatsApp Enabled)',
      selectDept: 'Select Medical Department',
      selectDoctor: 'Select Doctor',
      appointmentDate: 'Preferred Date',
      preferredSlot: 'Preferred Time Slot',
      symptoms: 'Symptoms / Reason for Visit',
      submitBooking: 'Confirm & Send to WhatsApp',
      sendViaEmail: 'Send Confirmation via Email',

      // Packages
      packagesTitle: 'Preventive Health Checkup Packages',
      packagesSubtitle: 'Early detection protects lives. Affordable, comprehensive test packages.',
      testsIncluded: 'Tests Included',
      fasting: '10-12 Hrs Fasting Required',
      bookPackage: 'Book Health Package',

      // Aarogyasri
      aarogyasriTitle: 'Aarogyasri & Cashless Insurance',
      aarogyasriSubtitle: 'Zero out-of-pocket hospitalisation for eligible cardholders & policyholders',
      govSchemes: 'Government Schemes',
      privateTpa: 'Corporate & Private Cashless TPA',
      deskHelp: 'Dedicated 24/7 Cashless Desk at Ground Floor Entrance',

      // Testimonials
      reviewsTitle: 'Verified Patient Recovery Stories',
      reviewsSubtitle: 'Over 42,000+ successful surgeries and satisfied families',

      // Lab Reports
      reportsTitle: 'Online Lab Report Portal',
      reportsSubtitle: 'Download verified pathology, radiology, and biochemistry reports instantly',
      enterUhid: 'Enter UHID or Mobile Number (e.g. LLH-1001)',
      searchReport: 'Fetch My Report',

      // Blog
      blogTitle: 'Doctor Health Insights & Advice',
      blogSubtitle: 'Guidance from our chief medical faculty on wellness and disease prevention',

      // Contact
      contactTitle: 'Reach Lifeline Hospital',
      contactSubtitle: 'Centrally located with 24/7 emergency vehicular access and ambulance lanes',
      addressTitle: 'Hospital Address',
      phoneTitle: '24/7 Emergency & Reception',
      hoursTitle: 'Emergency: 24/7 | OPD: 09:00 AM - 08:30 PM'
    },
    te: {
      hospitalName: 'లైఫ్ లైన్ హాస్పిటల్',
      tagline: '24/7 సూపర్ స్పెషాలిటీ వైద్యం & ప్రమాద చికిత్స',
      emergencyNumber: '+91 9100 108 108',
      emergencyHighlight: '24/7 అత్యవసర & అంబులెన్స్ హెల్ప్‌లైన్',
      callAmbulance: 'అంబులెన్స్ కాల్ 108',
      bookAppointment: 'అపాయింట్‌మెంట్ బుకింగ్',
      onlineOP: 'ఆన్‌లైన్ ఓపీ టోకెన్',
      doctorTimings: 'వైద్యుల సమయాల పట్టిక',
      departments: 'విభాగాలు & సేవలు',
      doctors: 'స్పెషలిస్ట్ డాక్టర్లు',
      gallery: 'హాస్పిటల్ గ్యాలరీ',
      packages: 'హెల్త్ ప్యాకేజీలు',
      aarogyasri: 'ఆరోగ్యశ్రీ & క్యాష్‌లెస్',
      reports: 'ల్యాబ్ రిపోర్టులు',
      blog: 'ఆరోగ్య చిట్కాలు & బ్లాగ్',
      about: 'మా గురించి',
      contact: 'చిరునామా & మ్యాప్',
      callNow: 'కాల్ చేయండి',
      whatsapp: 'వాట్సాప్ మెసేజ్',
      directions: 'రూట్ మ్యాప్',
      quickOPToken: 'ఓపీ టోకెన్ రసీదు',
      nabhCertified: 'NABH & NABL గుర్తింపు పొందిన ఆసుపత్రి',
      freeCashless: '100% ఆరోగ్యశ్రీ & ఇన్సూరెన్స్ క్యాష్‌లెస్ సేవలు',
      beds350: '350 బెడ్స్ & 60 ఐసీయూ పడకలు',
      ratingText: '4.9/5 రేటింగ్ (3,400+ సంతృప్తి చెందిన రోగులు)',

      // Hero
      heroBadge: '24/7 ఎమర్జెన్సీ ట్రామా కేర్ & అత్యాధునిక క్యాథ్ ల్యాబ్',
      heroTitlePrefix: 'అత్యాధునిక సాంకేతికత,',
      heroTitleHighlight: 'ప్రాణ రక్షక వైద్యం.',
      heroSubtitle: '45+ మంది నిపుణులైన సీనియర్ డాక్టర్లు, 24/7 ఎమర్జెన్సీ సేవలు, ఆన్‌లైన్ ఓపీ బుకింగ్ మరియు వైఎస్సార్ ఆరోగ్యశ్రీ పూర్తి ఉచిత చికిత్సలతో ప్రజల నమ్మకమైన ఆసుపత్రి.',
      heroBookBtn: 'డాక్టర్ అపాయింట్‌మెంట్ బుక్ చేయండి',
      heroCallEmergency: '24/7 అత్యవసర కాల్',
      heroDoctorTimingBtn: 'డాక్టర్ల సమయాలు చూడండి',

      // About
      aboutTitle: 'లైఫ్ లైన్ హాస్పిటల్ గురించి',
      aboutSubtitle: 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణలలో 14+ సంవత్సరాల నమ్మకమైన వైద్య సేవలు',
      aboutMission: 'మా లక్ష్యం & ఆశయం',
      aboutMissionText: 'ప్రతి ఒక్కరికీ నాణ్యమైన, నైతికమైన మరియు సరసమైన ధరల్లో అత్యాధునిక వైద్య సేవలు అందించడమే మా ముఖ్య లక్ష్యం.',

      // Departments
      deptTitle: 'ప్రత్యేక వైద్య విభాగాలు',
      deptSubtitle: 'అత్యాధునిక వైద్య పరికరాలతో అనుభవజ్ఞులైన వైద్యుల చికిత్స',

      // Doctors
      doctorsTitle: 'మా సీనియర్ స్పెషలిస్ట్ వైద్యులు',
      doctorsSubtitle: 'అపారమైన అనుభవం మరియు అంతర్జాతీయ శిక్షణ పొందిన నిపుణులు',
      experienceYears: 'సంవత్సరాల అనుభవం',
      consultationFee: 'కన్సల్టేషన్ ఫీజు',
      morningTimings: 'ఉదయం ఓపీ',
      eveningTimings: 'సాయంత్రం ఓపీ',
      roomChamber: 'గది సంఖ్య',
      bookSlot: 'అపాయింట్‌మెంట్ బుక్ చేయండి',
      viewAllTimings: 'పూర్తి వారపు సమయాల పట్టిక',

      // Booking
      bookingTitle: 'ఆన్‌లైన్ ఓపీ అపాయింట్‌మెంట్ బుకింగ్',
      bookingSubtitle: 'బుక్ చేసిన వివరాలు తక్షణమే మీ వాట్సాప్ మరియు ఈమెయిల్ కు వస్తాయి',
      patientName: 'రోగి పూర్తి పేరు',
      mobileNumber: 'మొబైల్ నంబర్ (వాట్సాప్ నంబర్)',
      selectDept: 'వైద్య విభాగాన్ని ఎంచుకోండి',
      selectDoctor: 'వైద్యుడిని ఎంచుకోండి',
      appointmentDate: 'తేదీ',
      preferredSlot: 'సమయం',
      symptoms: 'సమస్య / వ్యాధి లక్షణాలు',
      submitBooking: 'వాట్సాప్ ద్వారా నిర్ధారించండి',
      sendViaEmail: 'ఈమెయిల్ రసీదు పొందండి',

      // Packages
      packagesTitle: 'ముందస్తు ఆరోగ్య పరీక్ష ప్యాకేజీలు',
      packagesSubtitle: 'వ్యాధులను ముందే గుర్తిస్తే సంపూర్ణ ఆరోగ్యం సులభం. సరసమైన ధరల్లో.',
      testsIncluded: 'చేర్చబడిన పరీక్షలు',
      fasting: '10-12 గంటలు ఖాళీ కడుపుతో ఉండాలి',
      bookPackage: 'హెల్త్ ప్యాకేజీ బుక్ చేయండి',

      // Aarogyasri
      aarogyasriTitle: 'ఆరోగ్యశ్రీ & క్యాష్‌లెస్ ఇన్సూరెన్స్',
      aarogyasriSubtitle: 'అర్హులైన కార్డుదారులకు మరియు ఉద్యోగులకు 100% ఉచిత చికిత్స',
      govSchemes: 'ప్రభుత్వ పథకాలు',
      privateTpa: 'ప్రైవేట్ ఇన్సూరెన్స్ & కార్పొరేట్ TPA',
      deskHelp: 'గ్రౌండ్ ఫ్లోర్ వద్ద 24/7 ప్రత్యేక ఆరోగ్య మిత్ర & ఇన్సూరెన్స్ కౌంటర్',

      // Testimonials
      reviewsTitle: 'రోగుల అనుభవాలు & సమీక్షలు',
      reviewsSubtitle: '42,000+ విజయవంతమైన శస్త్రచికిత్సలు మరియు కోలుకున్న కుటుంబాలు',

      // Lab Reports
      reportsTitle: 'ఆన్‌లైన్ ల్యాబ్ రిపోర్టులు',
      reportsSubtitle: 'మీ రక్త, ఈసీజీ, ఎక్స్-రే రిపోర్టులను ఇంట్లో కూర్చునే డౌన్‌లోడ్ చేసుకోండి',
      enterUhid: 'UHID లేదా మొబైల్ నంబర్ నమోదు చేయండి (ఉదా: LLH-1001)',
      searchReport: 'రిపోర్ట్ పొందండి',

      // Blog
      blogTitle: 'వైద్యుల ఆరోగ్య సలహాలు & చిట్కాలు',
      blogSubtitle: 'మీరు మరియు మీ కుటుంబం ఆరోగ్యంగా ఉండటానికి నిపుణుల సూచనలు',

      // Contact
      contactTitle: 'లైఫ్ లైన్ హాస్పిటల్ సంప్రదించండి',
      contactSubtitle: 'నగరం నడిబొడ్డున 24/7 అంబులెన్స్ మరియు ఎమర్జెన్సీ సౌకర్యాలతో',
      addressTitle: 'ఆసుపత్రి చిరునామా',
      phoneTitle: '24/7 అత్యవసర కాల్ & రిసెప్షన్',
      hoursTitle: 'అత్యవసర విభాగం: 24/7 | ఓపీ: ఉదయం 9 నుండి రాత్రి 8:30 వరకు'
    }
  };

  return dict[lang] || dict.en;
};
