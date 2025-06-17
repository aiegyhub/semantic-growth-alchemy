export interface Country {
  id: string;
  name: string;
  nameAr: string;
  code: string;
  slug: string;
  phonePrefix: string;
  emergencyNumber: string;
  currency: string;
  currencyAr: string;
  isActive: boolean;
}

export interface City {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  countryId: string;
  region: string;
  regionAr: string;
  phoneNumbers: string[];
  whatsappNumbers: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  population?: number;
  isCapital?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
}

export interface FAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  categoryId: string;
  availableCityIds: string[];
  relatedServiceIds: string[];
  description: {
    short: string;
    shortAr: string;
    long: string;
    longAr: string;
  };
  commonProblemsSolved: string[];
  commonProblemsSolvedAr: string[];
  features: { name: string; nameAr: string; }[];
  faqs: FAQ[];
  icon: string;
  pricing: {
    model: 'fixed' | 'quote';
    basePrice?: number;
    currency?: string;
  };
  duration: {
    text: string;
    textAr: string;
  };
  rating: number;
  reviewCount: number;
  isPopular: boolean;
  isEmergency: boolean;
  isActive: boolean;
  keywords: string[];
}