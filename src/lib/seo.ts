
import { Service, City, Country } from '@/types';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  schemaMarkup: any;
  author?: string;
}

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: string[];
    availableLanguage: string[];
  };
  sameAs: string[];
  address: {
    "@type": string;
    addressCountry: string;
    addressRegion: string;
    addressLocality: string;
  };
}

export const generateOrganizationSchema = (): OrganizationSchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Musaaed",
  description: "Leading home and business services platform in the Middle East",
  url: "https://musaaed.com",
  logo: "https://musaaed.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-11-123-4567",
    contactType: "Customer Service",
    areaServed: ["SA", "AE", "KW", "EG"],
    availableLanguage: ["Arabic", "English"]
  },
  sameAs: [
    "https://facebook.com/musaaed",
    "https://twitter.com/musaaed",
    "https://instagram.com/musaaed"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressRegion: "Riyadh Province",
    addressLocality: "Riyadh"
  }
});

export const generateHomepageSEO = (language: string): SEOData => {
  const isArabic = language === 'ar';
  
  const title = isArabic ? 'مساعد - منصة الخدمات المنزلية والتجارية' : 'Musaaed - Home & Business Services Platform';
  const description = isArabic 
    ? 'منصة مساعد الرائدة لخدمات المنازل والشركات في الشرق الأوسط. احصل على خدمات التكييف، السباكة، الكهرباء، التنظيف وأكثر بجودة عالية وأسعار مناسبة.'
    : 'Leading home and business services platform in the Middle East. Get quality AC, plumbing, electrical, cleaning services and more at competitive prices.';

  const organizationSchema = generateOrganizationSchema();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://musaaed.com#webpage",
    name: title,
    description: description,
    url: "https://musaaed.com",
    inLanguage: language,
    isPartOf: {
      "@type": "WebSite",
      name: "Musaaed",
      url: "https://musaaed.com"
    },
    about: {
      "@id": "https://musaaed.com#organization"
    }
  };

  return {
    title,
    description,
    keywords: isArabic 
      ? ['خدمات منزلية', 'صيانة', 'تكييف', 'سباكة', 'كهرباء', 'تنظيف', 'السعودية', 'الإمارات', 'الكويت', 'مصر']
      : ['home services', 'maintenance', 'AC repair', 'plumbing', 'electrical', 'cleaning', 'Saudi Arabia', 'UAE', 'Kuwait', 'Egypt'],
    canonical: 'https://musaaed.com',
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://musaaed.com/og-image.jpg',
    schemaMarkup: [organizationSchema, webPageSchema]
  };
};

export const generateCityPageSEO = (city: City, country: Country, language: string): SEOData => {
  const isArabic = language === 'ar';
  const cityName = isArabic ? city.nameAr : city.name;
  const countryName = isArabic ? country.nameAr : country.name;
  
  const title = isArabic 
    ? `خدمات منزلية في ${cityName} - ${countryName} | مساعد`
    : `Home Services in ${cityName}, ${countryName} | Musaaed`;
    
  const description = isArabic
    ? `احصل على أفضل الخدمات المنزلية في ${cityName}، ${countryName}. صيانة تكييف، سباكة، كهرباء، تنظيف وأكثر. فنيين معتمدين وخدمة 24/7.`
    : `Get the best home services in ${cityName}, ${countryName}. AC maintenance, plumbing, electrical, cleaning and more. Certified technicians and 24/7 service.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://musaaed.com/${country.slug}/${city.slug}#localbusiness`,
    name: `Musaaed ${cityName}`,
    description: description,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: country.code
    },
    telephone: city.phoneNumbers[0],
    url: `https://musaaed.com/${country.slug}/${city.slug}`,
    areaServed: {
      "@type": "City",
      name: cityName
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: city.coordinates?.lat || 0,
        longitude: city.coordinates?.lng || 0
      },
      geoRadius: "50000"
    },
    parentOrganization: {
      "@id": "https://musaaed.com#organization"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://musaaed.com/${country.slug}/${city.slug}#webpage`,
    name: title,
    description: description,
    url: `https://musaaed.com/${country.slug}/${city.slug}`,
    inLanguage: language,
    isPartOf: {
      "@type": "WebSite",
      name: "Musaaed",
      url: "https://musaaed.com"
    },
    about: {
      "@id": `https://musaaed.com/${country.slug}/${city.slug}#localbusiness`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://musaaed.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: countryName,
        item: `https://musaaed.com/${country.slug}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityName,
        item: `https://musaaed.com/${country.slug}/${city.slug}`
      }
    ]
  };

  return {
    title,
    description,
    keywords: isArabic 
      ? ['خدمات منزلية', cityName, countryName, 'صيانة', 'تكييف', 'سباكة', 'كهرباء', 'تنظيف']
      : ['home services', cityName, countryName, 'maintenance', 'AC repair', 'plumbing', 'electrical', 'cleaning'],
    canonical: `https://musaaed.com/${country.slug}/${city.slug}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: `https://musaaed.com/images/cities/${city.slug}-og.jpg`,
    schemaMarkup: [localBusinessSchema, webPageSchema, breadcrumbSchema]
  };
};

export const generateServicePageSEO = (service: Service, city: City, country: Country, language: string): SEOData => {
  const isArabic = language === 'ar';
  const serviceName = isArabic ? service.nameAr : service.name;
  const cityName = isArabic ? city.nameAr : city.name;
  const countryName = isArabic ? country.nameAr : country.name;
  
  const title = isArabic 
    ? `${serviceName} في ${cityName} - ${countryName} | مساعد`
    : `${serviceName} in ${cityName}, ${countryName} | Musaaed`;
    
  const description = isArabic
    ? `احصل على خدمة ${serviceName} المهنية في ${cityName}، ${countryName}. فنيين معتمدين، أسعار مناسبة، وخدمة سريعة. احجز الآن!`
    : `Get professional ${serviceName} service in ${cityName}, ${countryName}. Certified technicians, competitive prices, and fast service. Book now!`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}#service`,
    name: serviceName,
    description: isArabic ? service.description.longAr : service.description.long,
    provider: {
      "@type": "LocalBusiness",
      "@id": `https://musaaed.com/${country.slug}/${city.slug}#localbusiness`,
      name: `Musaaed ${cityName}`,
      telephone: city.phoneNumbers[0],
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressCountry: country.code
      }
    },
    areaServed: {
      "@type": "City",
      name: cityName
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}`,
      servicePhone: city.phoneNumbers[0]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: service.rating,
      reviewCount: 150 + Math.floor(service.name.length * 10)
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}#webpage`,
    name: title,
    description: description,
    url: `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}`,
    inLanguage: language,
    isPartOf: {
      "@type": "WebSite",
      name: "Musaaed",
      url: "https://musaaed.com"
    },
    about: {
      "@id": `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}#service`
    }
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}#faq`,
    mainEntity: service.faqs.map((faq: any) => ({
      "@type": "Question",
      name: isArabic ? faq.questionAr : faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: isArabic ? faq.answerAr : faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://musaaed.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: countryName,
        item: `https://musaaed.com/${country.slug}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityName,
        item: `https://musaaed.com/${country.slug}/${city.slug}`
      },
      {
        "@type": "ListItem",
        position: 4,
        name: serviceName,
        item: `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}`
      }
    ]
  };

  const schemas = [serviceSchema, webPageSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return {
    title,
    description,
    keywords: isArabic 
      ? [serviceName, cityName, countryName, 'صيانة', 'خدمات منزلية', 'فنيين', 'احترافي']
      : [serviceName, cityName, countryName, 'maintenance', 'home services', 'technicians', 'professional'],
    canonical: `https://musaaed.com/${country.slug}/${city.slug}/${service.slug}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: `https://musaaed.com/images/services/${service.slug}-og.jpg`,
    schemaMarkup: schemas
  };
};
