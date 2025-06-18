
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceId: string;
  city: string;
  date: string;
  verified: boolean;
  serviceNameAr?: string;
  serviceNameEn?: string;
  cityAr?: string;
  cityEn?: string;
}

// Mock testimonials data with realistic Middle Eastern customer feedback
export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "أحمد محمد",
    rating: 5,
    comment: "خدمة ممتازة وسريعة. الفني وصل في الوقت المحدد وأصلح المكيف بكفاءة عالية. أنصح بهذه الخدمة بشدة.",
    serviceId: "ac-cleaning",
    city: "الرياض",
    date: "2024-01-15",
    verified: true,
    serviceNameAr: "تنظيف المكيفات",
    serviceNameEn: "AC Cleaning",
    cityAr: "الرياض",
    cityEn: "Riyadh"
  },
  {
    id: "2",
    name: "فاطمة الزهراني",
    rating: 5,
    comment: "فريق العمل محترف جداً والأسعار معقولة. تم إصلاح مشكلة السباكة بسرعة وبدون أي مشاكل إضافية.",
    serviceId: "plumbing",
    city: "جدة",
    date: "2024-01-10",
    verified: true,
    serviceNameAr: "خدمات السباكة",
    serviceNameEn: "Plumbing Services",
    cityAr: "جدة",
    cityEn: "Jeddah"
  },
  {
    id: "3",
    name: "Mohammed Al-Mansouri",
    rating: 5,
    comment: "Excellent electrical service in Dubai. The technician was professional and fixed the issue quickly. Highly recommended!",
    serviceId: "electrical",
    city: "Dubai",
    date: "2024-01-08",
    verified: true,
    serviceNameAr: "الخدمات الكهربائية",
    serviceNameEn: "Electrical Services",
    cityAr: "دبي",
    cityEn: "Dubai"
  },
  {
    id: "4",
    name: "سارة أحمد",
    rating: 4,
    comment: "خدمة تنظيف رائعة. الفريق وصل في الموعد المحدد وقام بعمل ممتاز. سأتعامل معهم مرة أخرى بالتأكيد.",
    serviceId: "cleaning",
    city: "الكويت",
    date: "2024-01-05",
    verified: true,
    serviceNameAr: "خدمات التنظيف",
    serviceNameEn: "Cleaning Services",
    cityAr: "الكويت",
    cityEn: "Kuwait City"
  },
  {
    id: "5",
    name: "عمر حسن",
    rating: 5,
    comment: "خدمة طلاء ممتازة في القاهرة. العمال مهرة والنتيجة فاقت توقعاتي. شكراً لكم على الخدمة المميزة.",
    serviceId: "painting",
    city: "القاهرة",
    date: "2024-01-03",
    verified: true,
    serviceNameAr: "خدمات الطلاء",
    serviceNameEn: "Painting Services",
    cityAr: "القاهرة",
    cityEn: "Cairo"
  },
  {
    id: "6",
    name: "Aisha Al-Zahra",
    rating: 5,
    comment: "Professional pest control service in Abu Dhabi. They solved our ant problem completely and provided great follow-up support.",
    serviceId: "pest-control",
    city: "Abu Dhabi",
    date: "2024-01-01",
    verified: true,
    serviceNameAr: "مكافحة الحشرات",
    serviceNameEn: "Pest Control",
    cityAr: "أبوظبي",
    cityEn: "Abu Dhabi"
  }
];

// Export testimonials array for compatibility
export const testimonials = mockTestimonials;

export function getTestimonialsByService(serviceId: string): Testimonial[] {
  return mockTestimonials.filter(t => t.serviceId === serviceId);
}

// Add alias for ServiceId function
export const getTestimonialsByServiceId = getTestimonialsByService;

export function getTestimonialsByCity(city: string): Testimonial[] {
  return mockTestimonials.filter(t => t.city === city || t.cityEn === city);
}

export function getAllTestimonials(): Testimonial[] {
  return mockTestimonials;
}

export function getAverageRating(serviceId?: string): number {
  const relevantTestimonials = serviceId 
    ? getTestimonialsByService(serviceId)
    : mockTestimonials;
  
  if (relevantTestimonials.length === 0) return 4.8;
  
  const totalRating = relevantTestimonials.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((totalRating / relevantTestimonials.length) * 10) / 10;
}
