import { Country, City, Service, ServiceCategory, Testimonial } from '@/types';
import { additionalCities, additionalServices } from './additionalData';

export const countries: Country[] = [
  {
    id: 'sa',
    name: 'Saudi Arabia',
    nameAr: 'السعودية',
    slug: 'sa',
    code: 'SA',
    phoneCode: '+966',
    currency: 'SAR',
    timezone: 'Asia/Riyadh',
    flag: '/flags/sa.svg'
  },
  {
    id: 'ae',
    name: 'United Arab Emirates',
    nameAr: 'الإمارات',
    slug: 'ae',
    code: 'AE',
    phoneCode: '+971',
    currency: 'AED',
    timezone: 'Asia/Dubai',
    flag: '/flags/ae.svg'
  },
  {
    id: 'kw',
    name: 'Kuwait',
    nameAr: 'الكويت',
    slug: 'kw',
    code: 'KW',
    phoneCode: '+965',
    currency: 'KWD',
    timezone: 'Asia/Kuwait',
    flag: '/flags/kw.svg'
  },
  {
    id: 'eg',
    name: 'Egypt',
    nameAr: 'مصر',
    slug: 'eg',
    code: 'EG',
    phoneCode: '+20',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
    flag: '/flags/eg.svg'
  }
];

export const cities: City[] = [
  // Saudi Arabia Cities
  {
    id: 'riyadh',
    name: 'Riyadh',
    nameAr: 'الرياض',
    slug: 'riyadh',
    countryId: 'sa',
    isCapital: true,
    coordinates: { lat: 24.7136, lng: 46.6753 },
    timezone: 'Asia/Riyadh',
    phoneNumbers: ['+966-11-123-4567', '+966-11-123-4568'],
    whatsappNumbers: ['+966-50-123-4567', '+966-55-123-4567'],
    emergencyNumbers: {
      police: '999',
      ambulance: '997',
      fire: '998'
    }
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    nameAr: 'جدة',
    slug: 'jeddah',
    countryId: 'sa',
    isCapital: false,
    coordinates: { lat: 21.4858, lng: 39.1925 },
    timezone: 'Asia/Riyadh',
    phoneNumbers: ['+966-12-234-5678', '+966-12-234-5679'],
    whatsappNumbers: ['+966-50-234-5678', '+966-55-234-5678'],
    emergencyNumbers: {
      police: '999',
      ambulance: '997',
      fire: '998'
    }
  },
  {
    id: 'dammam',
    name: 'Dammam',
    nameAr: 'الدمام',
    slug: 'dammam',
    countryId: 'sa',
    isCapital: false,
    coordinates: { lat: 26.4207, lng: 50.0888 },
    timezone: 'Asia/Riyadh',
    phoneNumbers: ['+966-13-345-6789', '+966-13-345-6790'],
    whatsappNumbers: ['+966-50-345-6789', '+966-55-345-6789'],
    emergencyNumbers: {
      police: '999',
      ambulance: '997',
      fire: '998'
    }
  },
  // UAE Cities
  {
    id: 'dubai',
    name: 'Dubai',
    nameAr: 'دبي',
    slug: 'dubai',
    countryId: 'ae',
    isCapital: false,
    coordinates: { lat: 25.2048, lng: 55.2708 },
    timezone: 'Asia/Dubai',
    phoneNumbers: ['+971-4-456-7890', '+971-4-456-7891'],
    whatsappNumbers: ['+971-50-456-7890', '+971-55-456-7890'],
    emergencyNumbers: {
      police: '999',
      ambulance: '998',
      fire: '997'
    }
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    nameAr: 'أبوظبي',
    slug: 'abu-dhabi',
    countryId: 'ae',
    isCapital: true,
    coordinates: { lat: 24.4539, lng: 54.3773 },
    timezone: 'Asia/Dubai',
    phoneNumbers: ['+971-2-567-8901', '+971-2-567-8902'],
    whatsappNumbers: ['+971-50-567-8901', '+971-55-567-8901'],
    emergencyNumbers: {
      police: '999',
      ambulance: '998',
      fire: '997'
    }
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    nameAr: 'الشارقة',
    slug: 'sharjah',
    countryId: 'ae',
    isCapital: false,
    coordinates: { lat: 25.3463, lng: 55.4209 },
    timezone: 'Asia/Dubai',
    phoneNumbers: ['+971-6-678-9012', '+971-6-678-9013'],
    whatsappNumbers: ['+971-50-678-9012', '+971-55-678-9012'],
    emergencyNumbers: {
      police: '999',
      ambulance: '998',
      fire: '997'
    }
  },
  // Kuwait Cities
  {
    id: 'kuwait-city',
    name: 'Kuwait City',
    nameAr: 'مدينة الكويت',
    slug: 'kuwait-city',
    countryId: 'kw',
    isCapital: true,
    coordinates: { lat: 29.3759, lng: 47.9774 },
    timezone: 'Asia/Kuwait',
    phoneNumbers: ['+965-2-789-0123', '+965-2-789-0124'],
    whatsappNumbers: ['+965-5-789-0123', '+965-6-789-0123'],
    emergencyNumbers: {
      police: '112',
      ambulance: '112',
      fire: '112'
    }
  },
  {
    id: 'hawalli',
    name: 'Hawalli',
    nameAr: 'حولي',
    slug: 'hawalli',
    countryId: 'kw',
    isCapital: false,
    coordinates: { lat: 29.3326, lng: 48.0291 },
    timezone: 'Asia/Kuwait',
    phoneNumbers: ['+965-2-890-1234', '+965-2-890-1235'],
    whatsappNumbers: ['+965-5-890-1234', '+965-6-890-1234'],
    emergencyNumbers: {
      police: '112',
      ambulance: '112',
      fire: '112'
    }
  },
  // Egypt Cities
  {
    id: 'cairo',
    name: 'Cairo',
    nameAr: 'القاهرة',
    slug: 'cairo',
    countryId: 'eg',
    isCapital: true,
    coordinates: { lat: 30.0444, lng: 31.2357 },
    timezone: 'Africa/Cairo',
    phoneNumbers: ['+20-2-901-2345', '+20-2-901-2346'],
    whatsappNumbers: ['+20-10-901-2345', '+20-11-901-2345'],
    emergencyNumbers: {
      police: '122',
      ambulance: '123',
      fire: '180'
    }
  },
  {
    id: 'giza',
    name: 'Giza',
    nameAr: 'الجيزة',
    slug: 'giza',
    countryId: 'eg',
    isCapital: false,
    coordinates: { lat: 30.0131, lng: 31.2089 },
    timezone: 'Africa/Cairo',
    phoneNumbers: ['+20-2-012-3456', '+20-2-012-3457'],
    whatsappNumbers: ['+20-10-012-3456', '+20-11-012-3456'],
    emergencyNumbers: {
      police: '122',
      ambulance: '123',
      fire: '180'
    }
  },
  // Add additional cities
  ...additionalCities
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'ac-services',
    name: 'AC Services',
    nameAr: 'خدمات التكييف',
    slug: 'ac-services',
    icon: 'Wind'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    nameAr: 'السباكة',
    slug: 'plumbing',
    icon: 'Wrench'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    nameAr: 'الكهرباء',
    slug: 'electrical',
    icon: 'Zap'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    nameAr: 'التنظيف',
    slug: 'cleaning',
    icon: 'Broom'
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    nameAr: 'مكافحة الحشرات',
    slug: 'pest-control',
    icon: 'Bug'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    nameAr: 'النجارة',
    slug: 'carpentry',
    icon: 'Hammer'
  },
  {
    id: 'painting',
    name: 'Painting',
    nameAr: 'الدهان',
    slug: 'painting',
    icon: 'Paintbrush'
  },
  {
    id: 'water-tank',
    name: 'Water Tank',
    nameAr: 'خزان المياه',
    slug: 'water-tank',
    icon: 'Droplet'
  }
];

export const services: Service[] = [
  {
    id: 'split-ac-cleaning',
    name: 'Split AC Cleaning',
    nameAr: 'تنظيف مكيف سبليت',
    slug: 'split-ac-cleaning',
    categoryId: 'ac-services',
    description: {
      short: 'Complete split AC cleaning service including filters, coils, and drainage system.',
      shortAr: 'خدمة تنظيف مكيف سبليت شاملة تتضمن الفلاتر والملفات ونظام الصرف.',
      long: 'Our professional split AC cleaning service ensures optimal performance and air quality. We clean filters, evaporator coils, condenser coils, drainage system, and perform comprehensive maintenance to extend your AC lifespan.',
      longAr: 'خدمة تنظيف مكيف السبليت الاحترافية تضمن الأداء الأمثل وجودة الهواء. ننظف الفلاتر وملفات المبخر وملفات المكثف ونظام الصرف ونقوم بصيانة شاملة لإطالة عمر المكيف.'
    },
    icon: 'Wind',
    rating: 4.8,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'abu-dhabi', 'sharjah', 'kuwait-city', 'hawalli', 'cairo', 'giza'],
    pricing: {
      basePrice: 120,
      currency: 'SAR',
      unit: 'per_unit'
    },
    duration: {
      estimated: 90,
      text: '1-2 hours',
      textAr: '1-2 ساعة'
    },
    commonProblemsSolved: [
      'Poor cooling performance',
      'Bad odors from AC',
      'High electricity bills',
      'Water leakage',
      'Noisy operation'
    ],
    commonProblemsSolvedAr: [
      'انخفاض كفاءة التبريد',
      'روائح كريهة من المكيف',
      'ارتفاع فواتير الكهرباء',
      'تسريب المياه',
      'التشغيل الصاخب'
    ],
    faqs: [
      {
        question: 'How often should I clean my split AC?',
        questionAr: 'كم مرة يجب تنظيف مكيف السبليت؟',
        answer: 'We recommend professional cleaning every 3-4 months, or more frequently in dusty environments.',
        answerAr: 'نوصي بالتنظيف الاحترافي كل 3-4 أشهر، أو أكثر في البيئات المتربة.'
      },
      {
        question: 'What does the cleaning service include?',
        questionAr: 'ماذا تشمل خدمة التنظيف؟',
        answer: 'Complete cleaning of filters, coils, drainage system, and general maintenance check.',
        answerAr: 'تنظيف شامل للفلاتر والملفات ونظام الصرف وفحص صيانة عام.'
      }
    ]
  },
  {
    id: 'ac-installation',
    name: 'AC Installation',
    nameAr: 'تركيب مكيف',
    slug: 'ac-installation',
    categoryId: 'ac-services',
    description: {
      short: 'Professional installation of all types of air conditioning units.',
      shortAr: 'تركيب احترافي لجميع أنواع مكيفات الهواء.',
      long: 'Our certified technicians provide expert installation of split, window, and central AC units, ensuring optimal performance and energy efficiency.',
      longAr: 'يقوم فنينا المعتمدون بتركيب مكيفات السبليت، النوافذ، والمركزية بخبرة عالية لضمان الأداء الأمثل وكفاءة الطاقة.'
    },
    icon: 'Settings',
    rating: 4.6,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'sharjah', 'kuwait-city', 'cairo'],
    pricing: {
      basePrice: 300,
      currency: 'SAR',
      unit: 'per_unit'
    },
    duration: {
      estimated: 180,
      text: '3-4 hours',
      textAr: '3-4 ساعات'
    },
    commonProblemsSolved: [
      'Incorrect installation',
      'Poor cooling',
      'High energy consumption',
      'Noise issues',
      'Leaks and drips'
    ],
    commonProblemsSolvedAr: [
      'تركيب غير صحيح',
      'تبريد ضعيف',
      'استهلاك طاقة عالي',
      'مشاكل الضوضاء',
      'تسربات وتنقيط'
    ],
    faqs: [
      {
        question: 'Do you provide installation for all AC brands?',
        questionAr: 'هل تقدمون تركيب لجميع ماركات المكيفات؟',
        answer: 'Yes, we install all major AC brands with manufacturer-approved methods.',
        answerAr: 'نعم، نقوم بتركيب جميع الماركات الكبرى باستخدام طرق معتمدة من المصنع.'
      },
      {
        question: 'Is there a warranty on installation?',
        questionAr: 'هل هناك ضمان على التركيب؟',
        answer: 'We offer a 1-year warranty on all installation services.',
        answerAr: 'نقدم ضمان لمدة سنة على جميع خدمات التركيب.'
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
  },
  {
    id: 'electrical-repair',
    name: 'Electrical Repair',
    nameAr: 'إصلاح كهربائي',
    slug: 'electrical-repair',
    categoryId: 'electrical',
    description: {
      short: 'Expert electrical repair services for residential and commercial properties.',
      shortAr: 'خدمات إصلاح كهربائية احترافية للمنازل والمباني التجارية.',
      long: 'Our licensed electricians handle all types of electrical repairs including wiring, outlets, circuit breakers, and lighting fixtures to ensure safety and compliance.',
      longAr: 'يقوم كهربائيونا المرخصون بإصلاح جميع أنواع الأعطال الكهربائية بما في ذلك الأسلاك، والمخارج، وقواطع الدائرة، وتركيبات الإضاءة لضمان السلامة والامتثال.'
    },
    icon: 'Zap',
    rating: 4.7,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dubai', 'kuwait-city', 'cairo'],
    pricing: {
      basePrice: 100,
      currency: 'SAR',
      unit: 'per_hour'
    },
    duration: {
      estimated: 120,
      text: '2 hours',
      textAr: 'ساعتان'
    },
    commonProblemsSolved: [
      'Faulty wiring',
      'Power outages',
      'Tripped breakers',
      'Lighting issues',
      'Electrical shocks'
    ],
    commonProblemsSolvedAr: [
      'أسلاك معطلة',
      'انقطاعات التيار',
      'قواطع دائرة مقطوعة',
      'مشاكل الإضاءة',
      'صدمات كهربائية'
    ],
    faqs: [
      {
        question: 'Are your electricians licensed?',
        questionAr: 'هل كهربائيونا مرخصون؟',
        answer: 'Yes, all our electricians are fully licensed and insured.',
        answerAr: 'نعم، جميع كهربائيينا مرخصون ومؤمن عليهم بالكامل.'
      },
      {
        question: 'Do you offer emergency electrical repairs?',
        questionAr: 'هل تقدمون إصلاحات كهربائية طارئة؟',
        answer: 'Yes, emergency electrical repair services are available 24/7.',
        answerAr: 'نعم، خدمات الإصلاح الكهربائي الطارئة متوفرة على مدار الساعة.'
      }
    ]
  },
  {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    nameAr: 'تنظيف المنازل',
    slug: 'home-cleaning',
    categoryId: 'cleaning',
    description: {
      short: 'Comprehensive home cleaning services including deep cleaning and regular maintenance.',
      shortAr: 'خدمات تنظيف منازل شاملة تتضمن التنظيف العميق والصيانة الدورية.',
      long: 'Our professional cleaners provide thorough cleaning of all rooms, kitchens, bathrooms, and living areas using eco-friendly products and modern equipment.',
      longAr: 'يقدم فريق التنظيف المحترف لدينا تنظيفًا شاملاً لجميع الغرف والمطابخ والحمامات ومساحات المعيشة باستخدام منتجات صديقة للبيئة ومعدات حديثة.'
    },
    icon: 'Broom',
    rating: 4.9,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'sharjah', 'kuwait-city', 'cairo', 'giza'],
    pricing: {
      basePrice: 80,
      currency: 'SAR',
      unit: 'per_hour'
    },
    duration: {
      estimated: 180,
      text: '3 hours',
      textAr: '3 ساعات'
    },
    commonProblemsSolved: [
      'Dust accumulation',
      'Stains and spills',
      'Odors',
      'Clutter and organization',
      'Allergen removal'
    ],
    commonProblemsSolvedAr: [
      'تراكم الغبار',
      'البقع والانسكابات',
      'الروائح',
      'الفوضى والتنظيم',
      'إزالة مسببات الحساسية'
    ],
    faqs: [
      {
        question: 'Do you bring your own cleaning supplies?',
        questionAr: 'هل تحضرون مستلزمات التنظيف الخاصة بكم؟',
        answer: 'Yes, we provide all necessary cleaning supplies and equipment.',
        answerAr: 'نعم، نوفر جميع مستلزمات ومعدات التنظيف اللازمة.'
      },
      {
        question: 'Can I schedule recurring cleaning?',
        questionAr: 'هل يمكنني جدولة تنظيف متكرر؟',
        answer: 'Yes, we offer weekly, bi-weekly, and monthly cleaning plans.',
        answerAr: 'نعم، نقدم خطط تنظيف أسبوعية ونصف شهرية وشهرية.'
      }
    ]
  },
  {
    id: 'pest-control-service',
    name: 'Pest Control Service',
    nameAr: 'خدمة مكافحة الحشرات',
    slug: 'pest-control-service',
    categoryId: 'pest-control',
    description: {
      short: 'Effective pest control solutions for homes and businesses.',
      shortAr: 'حلول فعالة لمكافحة الحشرات للمنازل والشركات.',
      long: 'Our pest control experts use safe and effective methods to eliminate pests such as termites, cockroaches, ants, rodents, and bed bugs.',
      longAr: 'يستخدم خبراء مكافحة الحشرات لدينا طرقًا آمنة وفعالة للقضاء على الحشرات مثل النمل الأبيض والصراصير والنمل والقوارض وحشرات الفراش.'
    },
    icon: 'Bug',
    rating: 4.8,
    isActive: true,
    isEmergency: false,
    availableCityIds: ['riyadh', 'jeddah', 'dammam', 'dubai', 'sharjah', 'kuwait-city', 'cairo', 'giza'],
    pricing: {
      basePrice: 200,
      currency: 'SAR',
      unit: 'per_treatment'
    },
    duration: {
      estimated: 120,
      text: '2 hours',
      textAr: 'ساعتان'
    },
    commonProblemsSolved: [
      'Termite infestations',
      'Cockroach problems',
      'Ant invasions',
      'Rodent control',
      'Bed bug elimination'
    ],
    commonProblemsSolvedAr: [
      'غزوات النمل الأبيض',
      'مشاكل الصراصير',
      'غزوات النمل',
      'مكافحة القوارض',
      'القضاء على حشرات الفراش'
    ],
    faqs: [
      {
        question: 'Are your pest control methods safe for children and pets?',
        questionAr: 'هل طرق مكافحة الحشرات آمنة للأطفال والحيوانات الأليفة؟',
        answer: 'Yes, we use eco-friendly and non-toxic treatments.',
        answerAr: 'نعم، نستخدم علاجات صديقة للبيئة وغير سامة.'
      },
      {
        question: 'How often should pest control be done?',
        questionAr: 'كم مرة يجب إجراء مكافحة الحشرات؟',
        answer: 'Typically every 3-6 months depending on the infestation level.',
        answerAr: 'عادة كل 3-6 أشهر حسب مستوى الإصابة.'
      }
    ]
  },
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
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    serviceId: 'split-ac-cleaning',
    customerName: 'Ahmed Al-Farsi',
    customerNameAr: 'أحمد الفارسي',
    rating: 5,
    comment: 'Excellent service, my AC is working like new!',
    commentAr: 'خدمة ممتازة، مكيفي يعمل كالجديد!',
    date: '2023-05-10'
  },
  {
    id: 't2',
    serviceId: 'emergency-plumbing-leaks',
    customerName: 'Fatima Al-Sayed',
    customerNameAr: 'فاطمة السيد',
    rating: 4.8,
    comment: 'Quick response and fixed the leak perfectly.',
    commentAr: 'استجابة سريعة وأصلحوا التسريب بشكل مثالي.',
    date: '2023-06-15'
  },
  {
    id: 't3',
    serviceId: 'home-cleaning',
    customerName: 'Mohammed Al-Harbi',
    customerNameAr: 'محمد الحربي',
    rating: 4.9,
    comment: 'Very thorough cleaning, highly recommend!',
    commentAr: 'تنظيف شامل جداً، أنصح به بشدة!',
    date: '2023-07-01'
  }
];
