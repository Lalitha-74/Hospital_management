export type Language = 'en' | 'te';

export type UserRole = 'patient' | 'doctor' | 'admin' | 'paramedic';

export type ActivePage = 
  | 'home'
  | 'about'
  | 'departments'
  | 'doctors'
  | 'booking'
  | 'gallery'
  | 'packages'
  | 'aarogyasri'
  | 'reports'
  | 'blog'
  | 'contact';

export type Speciality =
  | 'Cardiology'
  | 'Orthopedics'
  | 'Pediatrics'
  | 'Gynecology & Obstetrics'
  | 'Neurology & Spine'
  | 'Emergency & Trauma'
  | 'General & Laparoscopy'
  | 'Dermatology & Cosmetology';

export interface Doctor {
  id: string;
  name: string;
  nameTe: string;
  speciality: Speciality;
  qualification: string;
  experienceYears: number;
  consultationFee: number;
  morningSlots: string;
  eveningSlots: string;
  days: string;
  chamberNumber: string;
  floor: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  avatarUrl: string;
  bio: string;
  isAvailableToday: boolean;
  phone: string;
  whatsapp: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  titleTe: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: string;
  testCount: number;
  fastingRequired: boolean;
  tatHours: number;
  description: string;
  descriptionTe: string;
  features: string[];
  featuresTe: string[];
  recommendedFor: string;
  badge?: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  nameTe: string;
  iconName: string;
  description: string;
  descriptionTe: string;
  headDoctor: string;
  bedCapacity: number;
  keyServices: string[];
  procedures: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  city: string;
  treatment: string;
  doctorName: string;
  rating: number;
  review: string;
  reviewTe: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  titleTe: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  excerpt: string;
  excerptTe: string;
  content: string[];
  contentTe: string[];
  tags: string[];
  imageUrl: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  type: 'government' | 'private_tpa';
  coverageType: string;
  cashlessPreAuthHours: string;
  logoText: string;
  features: string[];
}

export interface LabReport {
  id: string;
  uhid: string;
  billNumber: string;
  patientName: string;
  patientAge: number;
  gender: string;
  date: string;
  referringDoctor: string;
  testName: string;
  status: 'Ready' | 'In Progress';
  results: {
    parameter: string;
    value: string;
    unit: string;
    referenceRange: string;
    isAbnormal: boolean;
  }[];
}

export interface OPToken {
  id: string;
  tokenNumber: number;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  gender: 'Male' | 'Female' | 'Other';
  doctorId: string;
  doctorName: string;
  speciality: string;
  appointmentDate: string;
  timeSlot: string;
  consultationType: 'in-person' | 'video';
  symptoms: string;
  status: 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  paymentStatus: 'paid' | 'pending';
  paymentMode: 'UPI' | 'Card' | 'Desk';
  amount: number;
  createdAt: string;
  encryptedId?: string;
  queuePosition?: number;
  estimatedWaitMinutes?: number;
}

export interface AmbulanceTrip {
  id: string;
  callTime: string;
  patientName: string;
  callerPhone: string;
  pickupLocation: string;
  status: 'dispatched' | 'en_route' | 'on_scene' | 'transporting' | 'arrived';
  etaMinutes: number;
  driverName: string;
  driverPhone: string;
  ambulanceType: 'ICU on Wheels' | 'Cardiac Mobile' | 'Basic Life Support' | 'Neonatal';
  vehiclePlate: string;
  currentLat: number;
  currentLng: number;
  destinationLat: number;
  destinationLng: number;
  speedKmh: number;
  vitals?: {
    spo2: number;
    pulse: number;
    bloodPressure: string;
    gcsScore: number;
    triageLevel: 'P1_CRITICAL' | 'P2_URGENT' | 'P3_STABLE';
    notes: string;
  };
}
