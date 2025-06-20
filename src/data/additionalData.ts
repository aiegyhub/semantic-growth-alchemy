
import { City, Service } from '@/types';

// إضافة مدينة أبوظبي المفقودة
export const additionalCities: City[] = [
  {
    id: 'abu-dhabi-city',
    name: 'Abu Dhabi',
    nameAr: 'أبوظبي',
    slug: 'abu-dhabi',
    countryId: 'ae',
    isCapital: true,
    coordinates: { lat: 24.4539, lng: 54.3773 },
    timezone: 'Asia/Dubai',
    phoneNumbers: ['+971-2-444-0000', '+971-2-444-0001'],
    whatsappNumbers: ['+971-50-444-0000', '+971-55-444-0000'],
    emergencyNumbers: {
      police: '999',
      ambulance: '998',
      fire: '997'
    }
  }
];

// إضافة خدمات إضافية مفقودة
export const additionalServices: Service[] = [
  {
    id: 'interior-wall-painting',
    name: 'Interior Wall Painting',
    nameAr: 'طلاء الجدران الداخلية',
    slug: 'interior-wall-painting',
    categoryId: 'painting',
    description: {
      short: 'Professional interior wall painting with premium quality paints and expert finish.',
      shortAr: 'طلاء جدران داخلية احترافي بدهانات عالية الجودة ولمسة نهائية مثالية.',
      long: 'Transform your interior spaces with our professional wall painting services. We use premium quality paints, proper surface preparation, and expert techniques to deliver a flawless finish that lasts for years.',
      longAr: 'حوّل مساحاتك الداخلية مع خدمات طلاء الجدران الاحترافية. نستخدم دهانات عالية الجودة وتحضير سطح مناسب وتقنيات خبيرة لتقديم لمسة نهائية مثالية تدوم لسنوات.'
    },
    icon: 'Paintbrush',
    rating: 4.7,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'abu-dhabi', 'sharjah', 'kuwait-city', 'hawalli', 'cairo', 'giza'],
    pricing: {
      basePrice: 25,
      currency: 'SAR',
      unit: 'per_sqm'
    },
    duration: {
      estimated: 240,
      text: '4-6 hours',
      textAr: '4-6 ساعات'
    },
    commonProblemsSolved: [
      'Peeling or cracked paint',
      'Uneven wall surfaces',
      'Color fading',
      'Stains and marks on walls',
      'Poor paint coverage'
    ],
    commonProblemsSolvedAr: [
      'تقشر أو تشقق الطلاء',
      'أسطح الجدران غير المستوية',
      'بهتان الألوان',
      'البقع والعلامات على الجدران',
      'تغطية ضعيفة للطلاء'
    ],
    faqs: [
      {
        question: 'How long does interior wall painting take?',
        questionAr: 'كم من الوقت يستغرق طلاء الجدران الداخلية؟',
        answer: 'Typically 4-6 hours for an average room, depending on size and preparation needed.',
        answerAr: 'عادة 4-6 ساعات لغرفة متوسطة الحجم، حسب الحجم والتحضير المطلوب.'
      },
      {
        question: 'What type of paint do you use?',
        questionAr: 'ما نوع الطلاء الذي تستخدمونه؟',
        answer: 'We use premium quality interior paints that are durable, washable, and eco-friendly.',
        answerAr: 'نستخدم دهانات داخلية عالية الجودة ومتينة وقابلة للغسيل وصديقة للبيئة.'
      }
    ]
  },
  {
    id: 'emergency-plumbing-leaks',
    name: 'Emergency Plumbing Leak Repair',
    nameAr: 'إصلاح تسريبات السباكة الطارئة',
    slug: 'emergency-plumbing-leaks',
    categoryId: 'plumbing',
    description: {
      short: '24/7 emergency plumbing leak repair service to prevent water damage to your property.',
      shortAr: 'خدمة إصلاح تسريبات السباكة الطارئة على مدار 24/7 لمنع أضرار المياه في الممتلكات.',
      long: 'Immediate response to plumbing emergencies including burst pipes, major leaks, and water damage prevention. Our certified plumbers are available 24/7 with fully equipped vehicles to handle any plumbing emergency quickly and effectively.',
      longAr: 'استجابة فورية لحالات طوارئ السباكة بما في ذلك انفجار الأنابيب والتسريبات الكبيرة ومنع أضرار المياه. سباكونا المعتمدون متاحون على مدار 24/7 بمركبات مجهزة بالكامل للتعامل مع أي طارئ سباكة بسرعة وفعالية.'
    },
    icon: 'Wrench',
    rating: 4.9,
    isActive: true,
    isEmergency: true,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'abu-dhabi', 'sharjah', 'kuwait-city', 'hawalli', 'cairo', 'giza'],
    pricing: {
      basePrice: 150,
      currency: 'SAR',
      unit: 'per_visit'
    },
    duration: {
      estimated: 60,
      text: '30-90 minutes',
      textAr: '30-90 دقيقة'
    },
    commonProblemsSolved: [
      'Burst water pipes',
      'Major water leaks',
      'Toilet overflows',
      'Water heater leaks',
      'Foundation water damage prevention'
    ],
    commonProblemsSolvedAr: [
      'انفجار أنابيب المياه',
      'التسريبات المائية الكبيرة',
      'فيضان المراحيض',
      'تسريبات سخان المياه',
      'منع أضرار المياه في الأساسات'
    ],
    faqs: [
      {
        question: 'How quickly can you respond to a plumbing emergency?',
        questionAr: 'كم من الوقت تحتاجون للاستجابة لطارئ السباكة؟',
        answer: 'We guarantee arrival within 30-60 minutes for emergency calls in the city center.',
        answerAr: 'نضمن الوصول خلال 30-60 دقيقة لاستدعاءات الطوارئ في وسط المدينة.'
      },
      {
        question: 'Do you provide 24/7 emergency service?',
        questionAr: 'هل تقدمون خدمة طوارئ على مدار 24/7؟',
        answer: 'Yes, our emergency plumbing service is available 24 hours a day, 7 days a week.',
        answerAr: 'نعم، خدمة السباكة الطارئة متاحة 24 ساعة في اليوم، 7 أيام في الأسبوع.'
      }
    ]
  }
];
