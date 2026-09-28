import { Doctor, HealthPackage, DepartmentInfo, Testimonial, BlogPost, InsuranceProvider, LabReport } from '../types';

export const HOSPITAL_INFO = {
  name: 'Lifeline Hospital',
  nameTe: 'లైఫ్ లైన్ హాస్పిటల్',
  tagline: '24/7 Super Speciality Healthcare · Trusted Compassion, Advanced Technology',
  taglineTe: '24/7 సూపర్ స్పెషాలిటీ వైద్యం · అత్యాధునిక సాంకేతికత, నమ్మకమైన వైద్యులు',
  emergencyPhone: '+91 9100 108 108',
  receptionPhone: '+91 040 6677 8899',
  whatsappNumber: '+91 98480 12345',
  whatsappCleanNumber: '919848012345',
  email: 'appointments@lifelinehospital.org',
  emergencyEmail: 'trauma@lifelinehospital.org',
  address: 'Plot 42, Road No. 1, Banjara Hills (Near Care Junction), Hyderabad & Benz Circle Hub, Vijayawada, AP & TS',
  googleMapsUrl: 'https://maps.google.com/?q=Lifeline+Super+Speciality+Hospital+Banjara+Hills',
  googleReviewsRating: 4.9,
  googleReviewsCount: 3480,
  establishedYear: 2012,
  nabhAccredited: true,
  nablAccredited: true,
  beds: 350,
  icuBeds: 60,
  doctorsCount: 45,
  surgeriesConducted: '42,000+'
};

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. K. S. R. Murthy',
    nameTe: 'డా. కె. ఎస్. ఆర్. మూర్తి',
    speciality: 'Cardiology',
    qualification: 'MD, DM (Cardiology), FACC (USA), FSCAI',
    experienceYears: 22,
    consultationFee: 650,
    morningSlots: '09:00 AM - 01:30 PM',
    eveningSlots: '05:00 PM - 08:30 PM',
    days: 'Mon - Sat',
    chamberNumber: 'OPD Suite 101',
    floor: '1st Floor (Heart Institute)',
    languages: ['Telugu', 'English', 'Hindi'],
    rating: 4.95,
    reviewCount: 840,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Chief Interventional Cardiologist. Specializes in complex Angioplasty, TAVR, Pacemaker implants & preventive heart disease.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-2',
    name: 'Dr. V. Lavanya Reddy',
    nameTe: 'డా. వి. లావణ్య రెడ్డి',
    speciality: 'Gynecology & Obstetrics',
    qualification: 'MBBS, MS (OBG), Fellowship in Reproductive Medicine (UK)',
    experienceYears: 16,
    consultationFee: 550,
    morningSlots: '10:00 AM - 02:00 PM',
    eveningSlots: '05:30 PM - 08:30 PM',
    days: 'Mon - Sat',
    chamberNumber: 'OPD Suite 204',
    floor: '2nd Floor (Mother & Child Block)',
    languages: ['Telugu', 'English'],
    rating: 4.92,
    reviewCount: 620,
    avatarUrl: 'https://images.unsplash.com/photo-1594824813590-798835017409?auto=format&fit=crop&w=600&q=80',
    bio: 'Senior Consultant Gynecologist & High-Risk Pregnancy Specialist. Renowned for painless deliveries & laparoscopic hysterectomies.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-3',
    name: 'Dr. Rajeshwar Rao',
    nameTe: 'డా. రాజేశ్వర్ రావు',
    speciality: 'Orthopedics',
    qualification: 'MS (Ortho), MCh (Ortho - UK), Robotic Joint Specialist',
    experienceYears: 19,
    consultationFee: 600,
    morningSlots: '09:30 AM - 01:00 PM',
    eveningSlots: '04:30 PM - 08:00 PM',
    days: 'Mon - Sat',
    chamberNumber: 'OPD Suite 108',
    floor: 'Ground Floor (Bone & Joint Wing)',
    languages: ['Telugu', 'English', 'Hindi'],
    rating: 4.88,
    reviewCount: 715,
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneer in Robotic Knee & Hip Replacements, Arthroscopic Ligament (ACL/PCL) reconstructions and complex trauma care.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-4',
    name: 'Dr. P. Sneha',
    nameTe: 'డా. పి. స్నేహ',
    speciality: 'Pediatrics',
    qualification: 'MD (Pediatrics), DNB, Fellowship in Neonatal Intensive Care',
    experienceYears: 12,
    consultationFee: 500,
    morningSlots: '10:00 AM - 01:30 PM',
    eveningSlots: '05:00 PM - 08:00 PM',
    days: 'Mon - Sat',
    chamberNumber: 'OPD Suite 210',
    floor: '2nd Floor (Children’s Wing)',
    languages: ['Telugu', 'English'],
    rating: 4.96,
    reviewCount: 540,
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated pediatrician managing growth disorders, vaccinations, pediatric asthma, allergy care and newborn complications.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-5',
    name: 'Dr. Anand K. Varma',
    nameTe: 'డా. ఆనంద్ కె. వర్మ',
    speciality: 'Neurology & Spine',
    qualification: 'MBBS, MD (Gen Med), DM (Neurology - NIMHANS)',
    experienceYears: 18,
    consultationFee: 700,
    morningSlots: '10:30 AM - 02:00 PM',
    eveningSlots: '06:00 PM - 09:00 PM',
    days: 'Mon - Fri',
    chamberNumber: 'OPD Suite 305',
    floor: '3rd Floor (Neuroscience Wing)',
    languages: ['Telugu', 'English', 'Hindi'],
    rating: 4.93,
    reviewCount: 480,
    avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Senior Neurologist. Expert in acute stroke thrombolysis, epilepsy, migraines, Parkinson’s disease and neuropathy management.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-6',
    name: 'Dr. Srinivas Reddy',
    nameTe: 'డా. శ్రీనివాస్ రెడ్డి',
    speciality: 'Emergency & Trauma',
    qualification: 'MD (Emergency Medicine - AIIMS), MEM (USA)',
    experienceYears: 15,
    consultationFee: 500,
    morningSlots: '24/7 Emergency Rota',
    eveningSlots: '24/7 Emergency Rota',
    days: 'All Days (24/7)',
    chamberNumber: 'Trauma Bay 1',
    floor: 'Ground Floor (Level 1 Trauma)',
    languages: ['Telugu', 'English', 'Hindi'],
    rating: 4.98,
    reviewCount: 1120,
    avatarUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    bio: 'Director of Emergency Medical Services. Manages critical polytrauma, cardiac arrests, acute respiratory distress and poisonings.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-7',
    name: 'Dr. M. Pradeep Kumar',
    nameTe: 'డా. ఎం. ప్రదీప్ కుమార్',
    speciality: 'General & Laparoscopy',
    qualification: 'MS (Gen Surgery), FIAGES, Fellowship in Minimal Access Surgery',
    experienceYears: 14,
    consultationFee: 500,
    morningSlots: '09:00 AM - 01:00 PM',
    eveningSlots: '04:30 PM - 07:30 PM',
    days: 'Mon - Sat',
    chamberNumber: 'OPD Suite 115',
    floor: '1st Floor (Surgical Wing)',
    languages: ['Telugu', 'English'],
    rating: 4.87,
    reviewCount: 390,
    avatarUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    bio: 'Advanced laparoscopic surgeon for Gallbladder stones, Hernia repair, Appendectomy, Thyroid and Piles laser treatments.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  },
  {
    id: 'doc-8',
    name: 'Dr. Haritha Chowdary',
    nameTe: 'డా. హరిత చౌదరి',
    speciality: 'Dermatology & Cosmetology',
    qualification: 'MD (DVL), FAM (Germany - Aesthetic Medicine)',
    experienceYears: 11,
    consultationFee: 500,
    morningSlots: '10:00 AM - 01:30 PM',
    eveningSlots: '05:00 PM - 08:00 PM',
    days: 'Tue - Sun',
    chamberNumber: 'OPD Suite 208',
    floor: '2nd Floor (Cosmetic Clinic)',
    languages: ['Telugu', 'English'],
    rating: 4.89,
    reviewCount: 430,
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Consultant Dermatologist for Psoriasis, eczema, acne laser, hair restoration (PRP) and allergy diagnosis.',
    isAvailableToday: true,
    phone: '+91 9100 108 108',
    whatsapp: '919848012345'
  }
];

export const DEPARTMENTS: DepartmentInfo[] = [
  {
    id: 'dept-cardio',
    name: 'Cardiology & Heart Care',
    nameTe: 'కార్డియాలజీ & గుండె సంరక్షణ',
    iconName: 'HeartPulse',
    description: 'State-of-the-art Cath Lab delivering 24/7 primary angioplasty, pacemaker implantation, 2D/3D Echo, and cardiac ICU.',
    descriptionTe: '24/7 అత్యవసర యాంజియోప్లాస్టీ, పేస్‌మేకర్, ఎకో మరియు కార్డియాక్ ఐసీయూ తో కూడిన అత్యాధునిక క్యాథ్ ల్యాబ్.',
    headDoctor: 'Dr. K. S. R. Murthy (Director)',
    bedCapacity: 45,
    keyServices: ['24/7 Primary Angioplasty (Golden Hour)', '3D Echocardiography & TMT', 'TAVR & Valve Replacements', 'Electrophysiology & Pacemaker'],
    procedures: ['Coronary Angiogram & Stenting', 'Rotablation', 'Device Closure of ASD/VSD', 'Heart Failure Management'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics & Joint Replacement',
    nameTe: 'ఆర్థోపెడిక్స్ & కీళ్ళ మార్పిడి',
    iconName: 'Bone',
    description: 'Computer-assisted and robotic knee/hip replacements, sports injury arthroscopy, and poly-trauma fracture management.',
    descriptionTe: 'రోబోటిక్ మోకాలి మరియు తుంటి కీళ్ల మార్పిడి, ఆర్థ్రోస్కోపీ మరియు ఫ్రాక్చర్ శస్త్రచికిత్సలు.',
    headDoctor: 'Dr. Rajeshwar Rao',
    bedCapacity: 40,
    keyServices: ['Robotic Knee & Hip Replacements', 'Keyhole Arthroscopy for ACL Tears', 'Spine Stabilization & Discectomy', 'Complex Fracture Trauma Unit'],
    procedures: ['Total Knee Arthroplasty', 'Shoulder Arthroscopy', 'Pediatric Deformity Correction', 'Osteoporosis Bone Clinic'],
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dept-neuro',
    name: 'Neurology & Neurosurgery',
    nameTe: 'న్యూరాలజీ & మెదడు శస్త్రచికిత్స',
    iconName: 'Brain',
    description: 'Comprehensive brain and spine center with 24/7 stroke thrombolysis, micro-neurosurgery, EEG, and neuro-rehabilitation.',
    descriptionTe: 'స్ట్రోక్ రక్షణ, మైక్రో న్యూరోసర్జరీ, మూర్ఛ వ్యాధి నివారణ మరియు న్యూరో ఐసీయూ.',
    headDoctor: 'Dr. Anand K. Varma',
    bedCapacity: 35,
    keyServices: ['Acute Stroke 4.5hr Thrombolysis', 'Brain Tumor Microneurosurgery', 'Epilepsy & EEG Diagnostic Lab', 'Minimally Invasive Spine Surgery'],
    procedures: ['Cerebral Angiogram', 'Aneurysm Coiling', 'Disc Herniation Endoscopy', 'Neuro-critical Monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dept-obgyn',
    name: 'Gynecology & Obstetrics',
    nameTe: 'గైనకాలజీ & ప్రసవ వైద్యం',
    iconName: 'Baby',
    description: 'Painless normal delivery suites, high-risk pregnancy care, fertility consultation, and scarless 3D laparoscopic surgeries.',
    descriptionTe: 'నొప్పి లేని సహజ ప్రసవాలు, హై-రిస్క్ ప్రెగ్నెన్సీ కేర్ మరియు లాపరోస్కోపిక్ శస్త్రచికిత్సలు.',
    headDoctor: 'Dr. V. Lavanya Reddy',
    bedCapacity: 50,
    keyServices: ['24/7 Painless Epidural Labor Suites', 'Advanced High-Risk Pregnancy ICU', '3D Laparoscopic Hysterectomy', 'Infertility & PCOD Comprehensive Clinic'],
    procedures: ['Normal Delivery & Gentle C-Section', 'Cervical Cancer Screening & HPV Vaccine', 'Fibroid Myomectomy', 'Fetal Medicine Scanning'],
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dept-peds',
    name: 'Pediatrics & Neonatal ICU (NICU)',
    nameTe: 'పీడియాట్రిక్స్ & నవజాత శిశు ఐసీయూ',
    iconName: 'Smile',
    description: 'Level-3 NICU and PICU with specialized pediatric ventilators, incubator care for pre-term babies, and child immunizations.',
    descriptionTe: 'లెవల్-3 నియోనాటల్ ఐసీయూ, నవజాత శిశువుల సంరక్షణ మరియు టీకాల కేంద్రం.',
    headDoctor: 'Dr. P. Sneha',
    bedCapacity: 30,
    keyServices: ['Level-3 Neonatal Intensive Care (NICU)', 'Pediatric Emergency Transport', 'Immunization & Growth Tracking', 'Pediatric Pulmonology & Allergy'],
    procedures: ['Pre-term Infant Incubator Care', 'Phototherapy for Jaundice', 'Pediatric Bronchoscopy', 'Child Nutrition Counseling'],
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dept-er',
    name: 'Emergency & Polytrauma Care',
    nameTe: '24/7 అత్యవసర & ప్రమాద చికిత్స',
    iconName: 'Ambulance',
    description: '24/7 Level-1 Emergency & Trauma bay with instant triage, dedicated CT scanner, mobile blood bank, and surgical trauma OT.',
    descriptionTe: '24/7 అత్యవసర ప్రమాద చికిత్స, ఐసీయూ అంబులెన్స్ సేవలు మరియు తక్షణ ప్రాణ రక్షణ.',
    headDoctor: 'Dr. Srinivas Reddy',
    bedCapacity: 25,
    keyServices: ['Immediate Golden Hour Resuscitation', 'Dedicated Trauma Operation Theatres', 'Point-of-Care Ultrasound & Instant Blood Gas', 'Disaster & Mass Casualty Protocol'],
    procedures: ['Advanced Cardiac Life Support (ACLS)', 'Emergency Thoracostomy', 'Fracture Splinting & Hemorrhage Control', 'Poisoning Detoxification'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-1',
    title: 'Master Health Checkup',
    titleTe: 'మాస్టర్ హెల్త్ చెకప్',
    category: 'Full Body Preventive',
    price: 2499,
    originalPrice: 5500,
    discount: '55% OFF',
    testCount: 68,
    fastingRequired: true,
    tatHours: 6,
    description: 'Complete baseline health evaluation covering heart, liver, kidney, blood count, sugar and physician consultation.',
    descriptionTe: 'గుండె, కాలేయం, కిడ్నీలు, షుగర్ మరియు రక్తం సంపూర్ణ ఆరోగ్య పరీక్షలు + డాక్టర్ సంప్రదింపులు.',
    features: [
      'Complete Blood Picture (CBP + ESR)',
      'Fasting & Post-Prandial Blood Sugar + HbA1c',
      'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)',
      'Liver Function Test (LFT - 11 Parameters)',
      'Kidney Function Test (Creatinine, Urea, Uric Acid)',
      'Thyroid Profile (TSH)',
      '12-Lead Resting ECG',
      'Chest X-Ray (Digital)',
      'Ultrasound Abdomen & Pelvis Screening',
      'Senior General Physician Consultation'
    ],
    featuresTe: [
      'కంప్లీట్ బ్లడ్ పిక్చర్ (రక్త కణాల పరీక్ష)',
      'షుగర్ పరీక్ష (HbA1c & ఫాస్టింగ్)',
      'లిపిడ్ ప్రొఫైల్ (కొలెస్ట్రాల్ పరీక్షలు)',
      'లివర్ ఫంక్షన్ టెస్ట్ (కాలేయ పరీక్షలు)',
      'కిడ్నీ ఫంక్షన్ టెస్ట్ (క్రియాటినిన్, యూరియా)',
      'థైరాయిడ్ (TSH) పరీక్ష',
      'ఈసీజీ & డిజిటల్ ఛాతీ ఎక్స్-రే',
      'అల్ట్రాసౌండ్ స్కానింగ్',
      'సీనియర్ డాక్టర్ కన్సల్టేషన్'
    ],
    recommendedFor: 'Men & Women aged 25+ annually',
    badge: 'Most Popular'
  },
  {
    id: 'pkg-2',
    title: 'Executive Cardiac Wellness',
    titleTe: 'ఎగ్జిక్యూటివ్ కార్డియాక్ గుండె రక్షణ',
    category: 'Heart & Vascular',
    price: 3899,
    originalPrice: 8500,
    discount: '54% OFF',
    testCount: 42,
    fastingRequired: true,
    tatHours: 4,
    description: 'Advanced cardiac risk assessment with 2D Color Doppler Echocardiogram and Treadmill Stress Test (TMT).',
    descriptionTe: '2D ఎకో మరియు ట్రెడ్‌మిల్ టెస్ట్ (TMT) తో గుండె జబ్బుల ముందస్తు గుర్తింపు మరియు నివారణ.',
    features: [
      '2D Color Doppler Echocardiography',
      'Treadmill Stress Test (TMT) / Stress ECG',
      'Cardiac Biomarkers (High-Sensitivity Troponin / Hs-CRP)',
      'Complete Lipid Fractionation',
      'Serum Homocysteine & ApoB Risk Marker',
      'Fasting Blood Sugar & Serum Electrolytes',
      'Chief Cardiologist Detailed Consultation & Diet Plan'
    ],
    featuresTe: [
      '2D కలర్ డాప్లర్ ఎకోకార్డియోగ్రఫీ',
      'ట్రెడ్‌మిల్ టెస్ట్ (TMT / కార్డియాక్ స్ట్రెస్ టెస్ట్)',
      'కార్డియాక్ రిస్క్ బయోమార్కర్స్ (Hs-CRP)',
      'పూర్తి కొలెస్ట్రాల్ పరీక్షలు',
      'షుగర్ & ఎలక్ట్రోలైట్స్ టెస్ట్',
      'సీనియర్ కార్డియాలజిస్ట్ సంప్రదింపు'
    ],
    recommendedFor: 'Smokers, High BP, Diabetes & Family History of Heart Disease',
    badge: 'Cardiac Special'
  },
  {
    id: 'pkg-3',
    title: 'Well Woman Care Package',
    titleTe: 'మహిళా సంపూర్ణ ఆరోగ్య ప్యాకేజీ',
    category: 'Women Health',
    price: 2999,
    originalPrice: 6200,
    discount: '52% OFF',
    testCount: 54,
    fastingRequired: true,
    tatHours: 6,
    description: 'Designed specifically for women covering breast cancer mammography, cervical pap smear, hormones & bone density.',
    descriptionTe: 'రొమ్ము క్యాన్సర్ పరీక్ష, గర్భాశయ పాప్ స్మియర్, థైరాయిడ్ మరియు ఎముకల సాంద్రత పరీక్షలు.',
    features: [
      'Digital Bilateral Breast Screening / Mammography',
      'Liquid-Based Pap Smear (Cervical Cancer Screening)',
      'Pelvic Ultrasound (Uterus & Ovaries)',
      'Vitamin D3 & Vitamin B12 Levels',
      'Complete Thyroid Profile (T3, T4, TSH)',
      'Bone Mineral Density (BMD Dexa Screening)',
      'Iron Deficiency Anemia Profile (Ferritin & Iron)',
      'Senior Lady Gynecologist Consultation'
    ],
    featuresTe: [
      'డిజిటల్ బ్రెస్ట్ మామోగ్రఫీ స్క్రీనింగ్',
      'పాప్ స్మియర్ (గర్భాశయ క్యాన్సర్ ముందస్తు పరీక్ష)',
      'యూటెరస్ & ఓవరీస్ అల్ట్రాసౌండ్ స్కానింగ్',
      'విటమిన్ D3 & విటమిన్ B12 టెస్ట్',
      'థైరాయిడ్ పూర్తి ప్రొఫైల్',
      'ఎముకల బలం పరీక్ష (BMD స్క్రీనింగ్)',
      'లేడీ గైనకాలజిస్ట్ సంప్రదింపు'
    ],
    recommendedFor: 'Women aged 30+ years'
  },
  {
    id: 'pkg-4',
    title: 'Senior Citizen Comprehensive',
    titleTe: 'సీనియర్ సిటిజన్ సమగ్ర ఆరోగ్య రక్షణ',
    category: 'Elderly Care',
    price: 3499,
    originalPrice: 7200,
    discount: '51% OFF',
    testCount: 62,
    fastingRequired: true,
    tatHours: 6,
    description: 'Tailored for elders including arthritis markers, prostate (PSA), cataract eye checkup, and kidney profile.',
    descriptionTe: 'వృద్ధుల కోసం కీళ్ల నొప్పులు, ప్రోస్టేట్ (పురుషులకు), కంటి పరీక్ష మరియు కిడ్నీ ప్రొఫైల్.',
    features: [
      'Prostate Specific Antigen (PSA for Men) / CA-125 for Women',
      'Serum Creatinine & eGFR (Renal Longevity)',
      'Serum Calcium, Phosphorus & Uric Acid',
      'Digital Joint X-Ray (Knee AP / Lat)',
      'HbA1c & Fasting Glucose',
      'Audiometry Hearing Screening',
      'Comprehensive Eye & Cataract Check',
      'Geriatric Physician Review'
    ],
    featuresTe: [
      'ప్రోస్టేట్ క్యాన్సర్ స్క్రీనింగ్ (PSA పరీక్ష)',
      'కిడ్నీ పనితీరు పరీక్ష (క్రియాటినిన్ & eGFR)',
      'కాల్షియం మరియు యూరిక్ యాసిడ్ పరీక్ష',
      'కీళ్ల ఎక్స్-రే మరియు కంటి పరీక్ష',
      'సీనియర్ డాక్టర్ చే సమగ్ర కన్సల్టేషన్'
    ],
    recommendedFor: 'Adults aged 55+ years'
  },
  {
    id: 'pkg-5',
    title: 'Complete Diabetic Shield',
    titleTe: 'డయాబెటిస్ సంరక్షణ కవచం',
    category: 'Endocrinology',
    price: 1899,
    originalPrice: 4200,
    discount: '55% OFF',
    testCount: 38,
    fastingRequired: true,
    tatHours: 4,
    description: 'In-depth diabetes control evaluation preventing complications like diabetic retinopathy, foot ulcers & kidney loss.',
    descriptionTe: 'డయాబెటిస్ వల్ల కంటి సమస్యలు, కిడ్నీ వ్యాధులు మరియు నరాల బలహీనత రాకుండా ముందస్తు పరీక్షలు.',
    features: [
      'Glycosylated Hemoglobin (HbA1c)',
      'Fasting & Post-Prandial Blood Sugar',
      'Urine Microalbumin / Creatinine Ratio (Early Kidney Warning)',
      'Fundus Eye Photography (Diabetic Retinopathy)',
      'Biothesiometry Vibration Foot Neuropathy Test',
      'Lipid Profile & Serum Creatinine',
      'Diabetologist & Certified Dietitian Session'
    ],
    featuresTe: [
      'HbA1c 3 నెలల సగటు షుగర్ లెవల్',
      'యూరిన్ మైక్రోఅల్బుమిన్ (కిడ్నీ రక్షణ పరీక్ష)',
      'డయాబెటిక్ రెటినోపతి కంటి పరీక్ష',
      'డయాబెటిక్ ఫుట్ నరాల పరీక్ష',
      'డయాబెటాలజిస్ట్ & డైటీషియన్ కౌన్సెలింగ్'
    ],
    recommendedFor: 'Pre-diabetic and diagnosed diabetic patients',
    badge: 'Specialist Curated'
  }
];

export const INSURANCE_LIST: InsuranceProvider[] = [
  {
    id: 'gov-aarogyasri',
    name: 'Dr. YSR Aarogyasri Health Scheme',
    type: 'government',
    coverageType: '100% Cashless Government Scheme (AP & TS)',
    cashlessPreAuthHours: 'Instant 24/7 Desk',
    logoText: 'YSR AAROGYASRI',
    features: [
      'Cashless hospitalisation up to ₹25 Lakhs per family',
      'Covered for Heart surgeries, Ortho replacements, ICU & Polytrauma',
      'Free post-surgery medications and financial support during rest period',
      'Dedicated Aarogya Mithra desk at Lifeline Hospital entrance'
    ]
  },
  {
    id: 'gov-ehs',
    name: 'EHS (Employees Health Scheme - AP & TS)',
    type: 'government',
    coverageType: 'State Govt Employees & Pensioners',
    cashlessPreAuthHours: 'Direct Online Portal Verification',
    logoText: 'EHS CASHLESS',
    features: [
      'Complete cashless inpatient treatment for employees and dependents',
      'No out-of-pocket expenses for listed surgical and medical therapies',
      '24/7 dedicated liaison officer for EHS approvals'
    ]
  },
  {
    id: 'gov-cghs',
    name: 'CGHS & ECHS (Central Govt & Ex-Servicemen)',
    type: 'government',
    coverageType: 'Central Govt Employees, Defense & Railway Staff',
    cashlessPreAuthHours: 'Prior Permission / Emergency Direct',
    logoText: 'CGHS / ECHS',
    features: [
      'Recognized super-speciality empanelled center',
      'Cashless credit facility for verified emergency admissions',
      'Concessional OPD diagnostic rates as per CGHS schedule'
    ]
  },
  {
    id: 'tpa-star',
    name: 'Star Health & Allied Insurance',
    type: 'private_tpa',
    coverageType: 'Tier-1 Network Hospital',
    cashlessPreAuthHours: 'Within 45 Minutes',
    logoText: 'STAR HEALTH',
    features: [
      'Express green-channel cashless approvals',
      'Pre and post hospitalisation claims coordination',
      'Zero paper hassle with Star Health digital hospital desk'
    ]
  },
  {
    id: 'tpa-mediassist',
    name: 'Medi Assist TPA',
    type: 'private_tpa',
    coverageType: 'Corporate & Retail Policies',
    cashlessPreAuthHours: 'Within 30 Minutes',
    logoText: 'MEDI ASSIST',
    features: [
      'Electronic pre-authorisation for 100+ corporate clients',
      'Direct discharge settlement within 2 hours',
      'Real-time claim status tracking'
    ]
  },
  {
    id: 'tpa-hdfc',
    name: 'HDFC ERGO General Insurance',
    type: 'private_tpa',
    coverageType: 'Preferred Partner Hospital',
    cashlessPreAuthHours: 'Instant AI-Powered Pre-Auth',
    logoText: 'HDFC ERGO',
    features: [
      'Instant digital approval for emergency trauma and cardiac cases',
      'Optima Secure 2X coverage accepted seamlessly',
      'Dedicated insurance coordinator assistance'
    ]
  },
  {
    id: 'tpa-care',
    name: 'Care Health Insurance (Religare)',
    type: 'private_tpa',
    coverageType: 'Preferred Network Center',
    cashlessPreAuthHours: 'Within 45 Minutes',
    logoText: 'CARE HEALTH',
    features: [
      'Cashless claim approval with no copay deductions on eligible plans',
      'Super top-up integration and maternity coverage',
      'Round the clock TPA desk support'
    ]
  },
  {
    id: 'tpa-vidal',
    name: 'Vidal Health / Vidal TPA',
    type: 'private_tpa',
    coverageType: 'Corporate & PSUs',
    cashlessPreAuthHours: 'Within 1 Hour',
    logoText: 'VIDAL HEALTH',
    features: [
      'Empanelled for leading public and private sector corporates',
      'Smooth admission process with cashless authorization card',
      'Assistance with query resolution'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'K. Venkateswara Rao',
    city: 'Vijayawada, AP',
    treatment: 'Emergency Primary Angioplasty (Heart Attack)',
    doctorName: 'Dr. K. S. R. Murthy',
    rating: 5,
    review: 'Lifeline Hospital saved my life during a massive midnight heart attack. Within 25 minutes of entering the emergency, Dr. Murthy opened the blocked artery with a stent. The Aarogyasri cashless counter approved everything without taking a single rupee advance. Exceptional care and human touch!',
    reviewTe: 'అర్ధరాత్రి తీవ్రమైన గుండెపోటు వచ్చినప్పుడు లైఫ్ లైన్ హాస్పిటల్ నా ప్రాణాలను కాపాడింది. డాక్టర్ మూర్తి గారు 25 నిమిషాల్లో స్టెంట్ వేసి బతికించారు. ఆరోగ్యశ్రీ కౌంటర్ లో ఒక్క రూపాయి కూడా అడగకుండా పూర్తిగా ఉచితంగా చేశారు. కృతజ్ఞతలు!',
    date: '12 Sep 2026',
    verified: true
  },
  {
    id: 'test-2',
    patientName: 'Anuradha Devi & Rajesh',
    city: 'Guntur, AP',
    treatment: 'High-Risk Pregnancy & Normal Delivery',
    doctorName: 'Dr. V. Lavanya Reddy',
    rating: 5,
    review: 'After two previous complicated pregnancies elsewhere, we came to Dr. Lavanya Reddy at Lifeline. Her calm reassurance and 24/7 monitoring gave us our healthy baby boy via painless natural delivery. The maternity suites and nursing staff were 5-star quality.',
    reviewTe: 'గతంలో రెండు సార్లు సమస్యలు వచ్చిన తర్వాత లైఫ్ లైన్ లో డాక్టర్ లావణ్య రెడ్డి గారి దగ్గరకు వచ్చాము. ఆమె సంరక్షణలో మాకు ఆరోగ్యకరమైన బాబు జన్మించాడు. సిబ్బంది చాలా మంచిగా చూసుకున్నారు.',
    date: '28 Aug 2026',
    verified: true
  },
  {
    id: 'test-3',
    patientName: 'S. Satyanarayana',
    city: 'Hyderabad, TS',
    treatment: 'Robotic Total Knee Replacement',
    doctorName: 'Dr. Rajeshwar Rao',
    rating: 5,
    review: 'I suffered from severe knee osteoarthritis for 7 years and could barely walk 10 steps. Dr. Rajeshwar Rao performed robotic bilateral knee replacement. I was walking with support on day 2 and without a stick in 3 weeks. Medi Assist cashless insurance covered the entire surgery smoothly!',
    reviewTe: '7 సంవత్సరాలు మోకాళ్ళ నొప్పులతో నడవలేక బాధపడ్డాను. డాక్టర్ రాజేశ్వర్ రావు గారు రోబోటిక్ సర్జరీ చేశారు. 3 వారాల్లోనే కర్ర లేకుండా నడుస్తున్నాను. స్టార్ హెల్త్ క్యాష్ లెస్ తో మొత్తం క్లెయిమ్ అయిపోయింది.',
    date: '04 Aug 2026',
    verified: true
  },
  {
    id: 'test-4',
    patientName: 'Bhavani Shankar',
    city: 'Visakhapatnam, AP',
    treatment: 'Acute Ischemic Stroke Care',
    doctorName: 'Dr. Anand K. Varma',
    rating: 5,
    review: 'My father suddenly lost speech and right-side arm mobility. The Lifeline emergency team dispatched their ICU ambulance within 8 minutes with GPS tracking. Dr. Anand administered clot-busting medicine within the golden window. Today my father is back to his morning walks!',
    reviewTe: 'మా నాన్నగారికి పక్షవాతం లక్షణాలు రాగానే లైఫ్ లైన్ అంబులెన్స్ 8 నిమిషాల్లో వచ్చింది. గోల్డెన్ అవర్ లో డాక్టర్ ఆనంద్ గారు చికిత్స అందించడంతో పూర్తిగా కోలుకున్నారు.',
    date: '19 Jul 2026',
    verified: true
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Hospital Main Exterior & Emergency Bay',
    titleTe: 'హాస్పిటల్ ప్రధాన భవనం & ఎమర్జెన్సీ బే',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
    description: '350-bed modern multi-speciality medical campus equipped with wide ambulance driveways and helicopter triage point.'
  },
  {
    id: 'gal-2',
    title: 'Advanced Digital Cath Lab',
    titleTe: 'డిజిటల్ ఫ్లాట్-ప్యానెల్ క్యాథ్ ల్యాబ్',
    category: 'Cardiology',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    description: 'High-definition flat panel cardiovascular imaging system enabling 24/7 zero-delay emergency angioplasties.'
  },
  {
    id: 'gal-3',
    title: 'Robotic & Laminar Airflow Operation Theatres',
    titleTe: 'లామినార్ ఎయిర్‌ఫ్లో మోడ్యులర్ ఆపరేషన్ థియేటర్లు',
    category: 'Surgical Suites',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
    description: 'Ultra-sterile Class 100 laminar airflow OTs designed for robotic joint replacements and complex neurosurgeries.'
  },
  {
    id: 'gal-4',
    title: '3T Digital MRI & 128-Slice Cardiac CT',
    titleTe: '3T డిజిటల్ MRI & 128-స్లైస్ కార్డియాక్ CT',
    category: 'Radiology',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    description: 'Ultra-silent, wide-bore 3-Tesla MRI providing high-precision neurological and orthopedic scans in minutes.'
  },
  {
    id: 'gal-5',
    title: '24/7 Level-1 Emergency & Trauma Bay',
    titleTe: '24/7 ఎమర్జెన్సీ ట్రామా సెంటర్',
    category: 'Emergency',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    description: 'Direct drive-in emergency department with dedicated resuscitation beds, portable ultrasound, and crash carts.'
  },
  {
    id: 'gal-6',
    title: 'Deluxe Patient Suites & Mother-Child Wing',
    titleTe: 'డీలక్స్ పేషెంట్ రూమ్స్ & మదర్-చైల్డ్ వింగ్',
    category: 'Wards',
    imageUrl: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80',
    description: 'Peaceful, ergonomically furnished private patient rooms with medical air, oxygen ports, and attendant comforts.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Warning Signs of Heart Attack Everyone in Andhra & Telangana Must Know',
    titleTe: 'గుండెపోటు వచ్చే ముందు కనిపించే 5 ప్రధాన లక్షణాలు - వెంటనే చేయాల్సినవి',
    category: 'Cardiology Tips',
    author: 'Dr. K. S. R. Murthy',
    readTime: '4 min read',
    date: '24 Sep 2026',
    excerpt: 'Not all heart attacks begin with dramatic chest crushing pain. Learn how sweating, jaw discomfort, and indigestion could be silent signs.',
    excerptTe: 'గుండెపోటు అంటే కేవలం ఛాతీ నొప్పి మాత్రమే కాదు. దవడ నొప్పి, అధికంగా చెమటలు పట్టడం, అజీర్తి కూడా తీవ్ర లక్షణాలు కావచ్చు.',
    content: [
      'Heart attacks remain the leading cause of preventable mortality. In India, people under 45 are increasingly experiencing cardiac events due to chronic stress, sedentary habits, and uncontrolled blood pressure.',
      'Key Red Flag Symptoms: 1. Pressure, tightness, or burning in center of chest lasting > 10 minutes. 2. Radiating pain to left shoulder, arm, neck or jaw. 3. Sudden cold sweat without physical exertion. 4. Unexplained breathlessness with dizziness. 5. Severe nausea and gastric burning that does not relieve with antacids.',
      'What To Do: Call our 24/7 Emergency Line +91 9100 108 108 immediately. Do NOT drive yourself. Chew one 300mg Soluble Aspirin while ambulance is en route if advised by doctors.'
    ],
    contentTe: [
      'మన రాష్ట్రాల్లో యువతలో కూడా గుండెపోటులు పెరుగుతున్నాయి. నిద్రలేమి, ఒత్తిడి, ఆహారపు అలవాట్లు దీనికి ప్రధాన కారణం.',
      'ముఖ్యమైన లక్షణాలు: 1. ఛాతీ మధ్యలో బరువు లేదా మంట 10 నిమిషాలకు మించి ఉండటం. 2. ఎడమ చేతికి, మెడకు లేదా దవడకు నొప్పి పాకడం. 3. చల్లటి చెమటలు పట్టడం. 4. ఊపిరి అందకపోవడం.',
      'వెంటనే లైఫ్ లైన్ 24/7 ఎమర్జెన్సీ నంబర్ +91 9100 108 108 కు కాల్ చేయండి. గోల్డెన్ అవర్ లో చికిత్స అందితే ప్రాణాలు నిలబడతాయి.'
    ],
    tags: ['Heart Care', 'Emergency', 'Cardiology', 'Aarogyasri'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'Seasonal Fevers: How to Differentiate Dengue, Malaria and Viral Flu',
    titleTe: 'వర్షాకాలంలో డెంగ్యూ, మలేరియా మరియు వైరల్ జ్వరాల తేడాలు - ప్లేట్‌లెట్ జాగ్రత్తలు',
    category: 'Preventive Care',
    author: 'Dr. Srinivas Reddy',
    readTime: '3 min read',
    date: '18 Sep 2026',
    excerpt: 'With monsoon seasonal spikes, do not ignore high fevers. Know when to check platelet counts and how hydration saves lives.',
    excerptTe: 'జ్వరం వచ్చినప్పుడు సొంతంగా మందులు వాడకండి. ప్లేట్‌లెట్ కౌంట్ ఎప్పుడు పరీక్షించాలి మరియు ఎలాంటి జాగ్రత్తలు తీసుకోవాలో తెలుసుకోండి.',
    content: [
      'Seasonal fevers peak following rains. While normal viral fever resolves in 3 to 4 days, Dengue and Malaria require careful clinical vigilance.',
      'Dengue Signs: Sudden severe high fever, retro-orbital pain (pain behind the eyes), intense joint and bone aches (breakbone fever), and skin rashes.',
      'Crucial Advice: Avoid taking ibuprofen or painkiller pills as they can increase bleeding risk. Stick strictly to paracetamol and oral hydration fluids (ORS, coconut water). Get a CBC test on day 2 or 3.'
    ],
    contentTe: [
      'వర్షాకాలంలో దోమల ద్వారా వ్యాపించే డెంగ్యూ జ్వరాల పట్ల అప్రమత్తంగా ఉండాలి.',
      'కళ్ల వెనుక తీవ్రమైన నొప్పి, కీళ్ల నొప్పులు, ఒంటిపై దద్దుర్లు కనిపిస్తే వెంటనే డెంగ్యూ పరీక్ష చేయించుకోవాలి.',
      'డాక్టర్ సలహా లేకుండా పెయిన్ కిల్లర్ మందులు అస్సలు వాడకూడదు. కొబ్బరి నీళ్లు, ఓఆర్ఎస్ ద్రావణం పుష్కలంగా తీసుకోవాలి.'
    ],
    tags: ['Dengue', 'Viral Fever', 'Monsoon Care', 'Child Health'],
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'Essential Child Vaccination Calendar from Birth to Age 5',
    titleTe: 'పుట్టినప్పటి నుండి 5 సంవత్సరాల వరకు పిల్లలకు వేయించాల్సిన ముఖ్యమైన టీకాల పట్టిక',
    category: 'Pediatrics',
    author: 'Dr. P. Sneha',
    readTime: '5 min read',
    date: '10 Sep 2026',
    excerpt: 'A comprehensive guide for parents on painless vaccines, MMR, Typhoid, and Flu shots to build lifelong child immunity.',
    excerptTe: 'పిల్లల్లో రోగనిరోధక శక్తిని పెంచడానికి ఐఏపీ సూచించిన సమయాల్లో టీకాలు వేయించడం చాలా ముఖ్యం.',
    content: [
      'Timely childhood immunisation shields infants from polio, hepatitis, pertussis, pneumonia, and rotavirus diarrhea.',
      'Key Milestones: Birth (BCG, OPV, Hep B); 6, 10, 14 Weeks (Pentavalent, Rotavirus, PCV); 9 Months (MR/MMR 1st dose); 15 Months (MMR, Varicella); 2 Years (Typhoid booster).',
      'Lifeline Hospital offers zero-pain combination vaccines under cold-chain certified storage conditions.'
    ],
    contentTe: [
      'పిల్లల భవిష్యత్తు ఆరోగ్యం కోసం పుట్టినప్పటి నుండి సరైన సమయంలో టీకాలు వేయించాలి.',
      'పోలియో, న్యుమోనియా, డయేరియా వంటి ప్రమాదకర వ్యాధుల నుండి ఈ టీకాలు రక్షణ కల్పిస్తాయి.',
      'లైఫ్ లైన్ హాస్పిటల్ లో కోల్డ్ చైన్ భద్రతతో పెయిన్‌లెస్ వాక్సిన్లు అందుబాటులో ఉన్నాయి.'
    ],
    tags: ['Pediatrics', 'Vaccines', 'Baby Care', 'Nutrition'],
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_LAB_REPORTS: LabReport[] = [
  {
    id: 'rep-1',
    uhid: 'LLH-1001',
    billNumber: 'BL-88421',
    patientName: 'Ramesh Babu',
    patientAge: 48,
    gender: 'Male',
    date: '26 Sep 2026',
    referringDoctor: 'Dr. K. S. R. Murthy (Cardiology)',
    testName: 'Comprehensive Lipid & Cardiac Risk Profile',
    status: 'Ready',
    results: [
      { parameter: 'Total Cholesterol', value: '182', unit: 'mg/dL', referenceRange: '< 200', isAbnormal: false },
      { parameter: 'Triglycerides', value: '144', unit: 'mg/dL', referenceRange: '< 150', isAbnormal: false },
      { parameter: 'HDL (Good Cholesterol)', value: '46', unit: 'mg/dL', referenceRange: '> 40', isAbnormal: false },
      { parameter: 'LDL (Bad Cholesterol)', value: '107', unit: 'mg/dL', referenceRange: '< 100', isAbnormal: true },
      { parameter: 'VLDL', value: '28.8', unit: 'mg/dL', referenceRange: '5 - 30', isAbnormal: false },
      { parameter: 'High-Sensitivity CRP', value: '1.2', unit: 'mg/L', referenceRange: '< 1.0 (Low Risk)', isAbnormal: true },
      { parameter: 'Fasting Blood Glucose', value: '98', unit: 'mg/dL', referenceRange: '70 - 100', isAbnormal: false },
      { parameter: 'HbA1c (Glycated Hb)', value: '5.6', unit: '%', referenceRange: '< 5.7 (Normal)', isAbnormal: false }
    ]
  },
  {
    id: 'rep-2',
    uhid: 'LLH-1002',
    billNumber: 'BL-88422',
    patientName: 'K. Padma Kumari',
    patientAge: 36,
    gender: 'Female',
    date: '27 Sep 2026',
    referringDoctor: 'Dr. V. Lavanya Reddy (Gynecology)',
    testName: 'Complete Blood Picture & Thyroid Function',
    status: 'Ready',
    results: [
      { parameter: 'Hemoglobin (Hb)', value: '12.4', unit: 'g/dL', referenceRange: '12.0 - 15.0', isAbnormal: false },
      { parameter: 'Total WBC Count', value: '6,800', unit: '/cu.mm', referenceRange: '4,000 - 11,000', isAbnormal: false },
      { parameter: 'Platelet Count', value: '2.85', unit: 'Lakhs/cu.mm', referenceRange: '1.5 - 4.5', isAbnormal: false },
      { parameter: 'Serum TSH (Ultrasensitive)', value: '2.45', unit: 'uIU/mL', referenceRange: '0.35 - 4.94', isAbnormal: false },
      { parameter: 'Serum Ferritin', value: '38', unit: 'ng/mL', referenceRange: '15 - 150', isAbnormal: false },
      { parameter: 'Vitamin D3 (25-OH)', value: '19.2', unit: 'ng/mL', referenceRange: '30 - 100 (Deficient)', isAbnormal: true }
    ]
  }
];
