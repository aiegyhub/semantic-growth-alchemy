import { Service, City, Country, ServiceCategory } from '@/types';

// SEO data structure
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  schemaMarkup: object | object[];
}

// Schema for Organization
interface OrganizationSchema {
  "@context": string;
  "@type": string;
  "@id"?: string;
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: {
      "@type": string;
      name: string[];
    };
  };
  address: {
    "@type": string;
    addressCountry: string[];
  };
}

/**
 * Generates the base Organization schema with enhanced SEO data.
 */
export function generateOrganizationSchema(): OrganizationSchema {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LocalServices - Middle East Home & Business Services",
    url: "https://localservices.com",
    logo: "https://localservices.com/logo.png",
    sameAs: [
      "https://facebook.com/localservices",
      "https://twitter.com/localservices",
      "https://linkedin.com/company/localservices",
      "https://instagram.com/localservices"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966111234567",
      contactType: "customer service",
      areaServed: {
        "@type": "Country",
        name: ["Saudi Arabia", "United Arab Emirates", "Kuwait", "Egypt"]
      }
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: ["SA", "AE", "KW", "EG"]
    }
  };
  schema["@id"] = "https://localservices.com/#organization";
  return schema;
}

/**
 * Generates enhanced schema for a specific service with SEO optimization.
 */
export function generateServiceSchema(service: Service, city: City, country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description.short,
    "serviceType": service.categoryId,
    "provider": {
      "@type": "Organization",
      "name": "LocalServices",
      "@id": "https://localservices.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressCountry": {
        "@type": "Country",
        "name": country.name,
        "alternateName": country.nameAr
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": country.currency || "SAR",
      "priceRange": service.pricing?.model === "quote" ? "On Quote" : service.pricing?.basePrice
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.name} Services in ${city.name}`,
      "itemListElement": service.keywords.map(keyword => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": keyword
        }
      }))
    }
  };
}

/**
 * Generates comprehensive SEO metadata for the homepage with enhanced keywords.
 */
export function generateHomepageSEO(language: string): SEOData {
    const isArabic = language === 'ar';
    
    const title = isArabic
        ? 'LocalServices | خدمات محلية موثوقة في الشرق الأوسط - السعودية، الإمارات، الكويت، مصر'
        : 'LocalServices | Trusted Local Services in Middle East - Saudi Arabia, UAE, Kuwait, Egypt';
    
    const description = isArabic
        ? 'اعثر على أفضل مقدمي الخدمات المحليين المعتمدين في السعودية والإمارات والكويت ومصر. خدمات التنظيف والصيانة والإصلاحات المنزلية والتجارية. استجابة سريعة وأسعار شفافة.'
        : 'Find verified local service professionals in Saudi Arabia, UAE, Kuwait, and Egypt. Home and business cleaning, maintenance, repairs, and more. Quick response times and transparent pricing.';
    
    const keywords = [
        // English keywords
        'local services Middle East', 'home services Saudi Arabia', 'cleaning services UAE', 
        'maintenance Kuwait', 'repair services Egypt', 'verified professionals', 'home maintenance',
        'business services', 'emergency repairs', 'plumbing services', 'electrical services',
        'AC cleaning', 'appliance repair', 'painting services', 'handyman services',
        
        // Arabic keywords
        'خدمات محلية الشرق الأوسط', 'خدمات منزلية السعودية', 'خدمات تنظيف الإمارات',
        'صيانة الكويت', 'خدمات إصلاح مصر', 'محترفين معتمدين', 'صيانة منزلية',
        'خدمات تجارية', 'إصلاحات طارئة', 'خدمات سباكة', 'خدمات كهربائية',
        'تنظيف مكيفات', 'إصلاح أجهزة', 'خدمات دهان', 'خدمات صيانة عامة'
    ];
    
    return {
        title,
        description,
        keywords,
        canonical: '/',
        schemaMarkup: [
            generateOrganizationSchema(),
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "LocalServices",
                "url": "https://localservices.com",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://localservices.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ],
    };
}

/**
 * Generates enhanced SEO metadata for city pages with comprehensive keywords.
 */
export function generateCityPageSEO(city: City, country: Country, services: Service[], language: string): SEOData {
  const isArabic = language === 'ar';
  const cityName = isArabic ? city.nameAr : city.name;
  const countryName = isArabic ? country.nameAr : country.name;
  const baseUrl = 'https://localservices.com';
  const serviceList = services.slice(0, 8).map(s => isArabic ? s.nameAr : s.name).join(', ');

  const title = isArabic
    ? `خدمات محلية في ${cityName} | ${countryName} - صيانة وتنظيف وإصلاحات`
    : `Local Services in ${cityName} | ${countryName} - Maintenance, Cleaning & Repairs`;
  
  const description = isArabic
    ? `احصل على أفضل الخدمات المحلية في ${cityName}، ${countryName}. خدمات متخصصة تشمل: ${serviceList}. فنيون معتمدون، أسعار تنافسية، خدمة 24/7.`
    : `Get the best local services in ${cityName}, ${countryName}. Professional services including: ${serviceList}. Verified technicians, competitive prices, 24/7 service.`;
  
  const keywords = [
    cityName, countryName, 
    isArabic ? 'خدمات محلية' : 'local services',
    isArabic ? 'صيانة منزلية' : 'home maintenance',
    isArabic ? 'خدمات تنظيف' : 'cleaning services',
    isArabic ? 'إصلاحات' : 'repairs',
    isArabic ? 'فنيون معتمدون' : 'verified technicians',
    ...services.slice(0, 10).map(s => isArabic ? s.nameAr : s.name)
  ];
  
  const canonical = `/${country.slug}/${city.slug}`;

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `Professional Services in ${cityName}`,
      "description": `Browse all available local services in ${cityName}, ${countryName}.`,
      "url": `${baseUrl}${canonical}`,
      "about": {
        "@type": "City",
        "name": cityName,
        "containedInPlace": {
          "@type": "Country",
          "name": countryName
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": country.code
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": services.slice(0, 10).map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": service.name,
            "description": service.description.short
          }
        }))
      }
    },
    generateOrganizationSchema()
  ];

  return { title, description, keywords, canonical, schemaMarkup };
}

/**
 * Generates enhanced SEO metadata for service pages with comprehensive optimization.
 */
export function generateServicePageSEO(service: Service, city: City, country: Country, category: ServiceCategory, language: string): SEOData {
    const isArabic = language === 'ar';
    const serviceName = isArabic ? service.nameAr : service.name;
    const cityName = isArabic ? city.nameAr : city.name;
    const categoryName = isArabic ? category.nameAr : category.name;
    const countryName = isArabic ? country.nameAr : country.name;

    const title = isArabic 
        ? `${serviceName} في ${cityName} | خدمة احترافية 24/7 - ${countryName}`
        : `${serviceName} in ${cityName} | Professional 24/7 Service - ${countryName}`;
    
    const description = isArabic 
        ? `احصل على خدمة ${serviceName} احترافية في ${cityName}، ${countryName}. ${service.description.shortAr || service.description.short}. فنيون معتمدون، أسعار شفافة، ضمان على العمل. اتصل الآن!`
        : `Get professional ${serviceName} service in ${cityName}, ${countryName}. ${service.description.short}. Verified technicians, transparent pricing, work guarantee. Call now!`;
    
    const keywords = [
        serviceName, cityName, categoryName, countryName,
        isArabic ? 'خدمة احترافية' : 'professional service',
        isArabic ? 'فني معتمد' : 'verified technician',
        isArabic ? 'خدمة 24/7' : '24/7 service',
        isArabic ? 'أسعار تنافسية' : 'competitive pricing',
        ...service.keywords
    ];
    
    const canonical = `/${country.slug}/${city.slug}/${service.slug}`;
    
    const schemaMarkup = [
        generateServiceSchema(service, city, country),
        generateOrganizationSchema(),
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://localservices.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": countryName,
                    "item": `https://localservices.com/${country.slug}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": cityName,
                    "item": `https://localservices.com/${country.slug}/${city.slug}`
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": serviceName,
                    "item": `https://localservices.com${canonical}`
                }
            ]
        }
    ];

    return { title, description, keywords, canonical, schemaMarkup };
}
