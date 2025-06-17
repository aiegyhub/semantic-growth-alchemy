
// src/data/testimonials.ts (BATCH 3 - PART 1)
// This batch ensures every service has at least 3 dedicated testimonials.

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceId: string;
  city: string;
  date: string;
}

// NOTE: This array should APPEND to your existing 100 testimonials.
// For clarity here, I'm starting from t-101.
// In your final code, you would add these objects to the end of the previous array.

const testimonials_batch_3: Testimonial[] = [
  // ======================================================
  // CATEGORY: AC Services
  // ======================================================

  // === 1. Split AC Deep Cleaning (split-ac-cleaning) ===
  {
    id: 't-101',
    name: 'سالم الحربي',
    rating: 5,
    comment: 'المكيف رجع ثلاجة بعد الغسيل! الهواء صار منعش والبرودة فرقت كثير. الفني كان محترف ونظيف.',
    serviceId: 'split-ac-cleaning',
    city: 'riyadh',
    date: '2025-06-25'
  },
  {
    id: 't-102',
    name: 'Noora Al-Jassmi',
    rating: 5,
    comment: 'My AC unit was dripping water inside the room. The technician came, did a deep clean, and completely cleared the drain pipe. Problem solved. Excellent service.',
    serviceId: 'split-ac-cleaning',
    city: 'dubai',
    date: '2025-07-10'
  },
  {
    id: 't-103',
    name: 'وليد الغامدي',
    rating: 5,
    comment: 'خدمة سنوية لا أستغني عنها قبل الصيف. غسيل المكيفات يحسن من أدائها بشكل ملحوظ ويقلل من استهلاك الكهرباء. شكراً لكم.',
    serviceId: 'split-ac-cleaning',
    city: 'jeddah',
    date: '2025-04-15'
  },

  // === 2. AC Freon (Gas) Refill (ac-freon-refill) ===
  {
    id: 't-104',
    name: 'شركة المقاولات الحديثة',
    rating: 5,
    comment: 'لدينا عدة مكيفات في مكاتب المشروع كانت تحتاج شحن فريون. قدموا لنا عرض سعر ممتاز وقاموا بالعمل لكافة الوحدات في يوم واحد.',
    serviceId: 'ac-freon-refill',
    city: 'dammam',
    date: '2025-07-01'
  },
  {
    id: 't-105',
    name: 'أبو ناصر',
    rating: 5,
    comment: 'المكيف كان يطلع هواء حار فقط. الفني فحص الضغط واكتشف نقص الفريون. بعد التعبئة رجع يبرد بشكل ممتاز. خدمة سريعة.',
    serviceId: 'ac-freon-refill',
    city: 'kuwait-city',
    date: '2025-06-28'
  },
  {
    id: 't-106',
    name: 'Fatima Al Muhairi',
    rating: 5,
    comment: 'The technician was very honest. He checked for leaks before refilling and advised me on how to maintain the AC. Trustworthy service.',
    serviceId: 'ac-freon-refill',
    city: 'abu-dhabi',
    date: '2025-07-12'
  }
];

// Export all testimonials arrays
export const testimonials = testimonials_batch_3;

// Export individual testimonial function
export const getTestimonialsByServiceId = (serviceId: string) => {
  return testimonials.filter(testimonial => testimonial.serviceId === serviceId);
};

export const getTestimonialsByCity = (city: string) => {
  return testimonials.filter(testimonial => testimonial.city === city);
};

export const getAllTestimonials = () => {
  return testimonials;
};

// Calculate average rating for a service
export const getAverageRating = (serviceId: string) => {
  const serviceTestimonials = getTestimonialsByServiceId(serviceId);
  if (serviceTestimonials.length === 0) return 4.5; // Default rating
  
  const totalRating = serviceTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
  return Math.round((totalRating / serviceTestimonials.length) * 10) / 10;
};

export type { Testimonial };
