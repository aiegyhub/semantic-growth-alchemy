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
  };
}

/**
 * Generates the base Organization schema.
 */
export function generateOrganizationSchema(): OrganizationSchema {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LocalServices",
    url: "https://localservices.com",
    logo: "https://localservices.com/logo.png",
    sameAs: [
      "https://facebook.com/localservices",
      "https://twitter.com/localservices"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966111234567",
      contactType: "customer service"
    }
  };
  schema["@id"] = "https://localservices.com/#organization";
  return schema;
}

/**
 * Generates the schema for a specific service.
 */
export function generateServiceSchema(service: Service, city: City, country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description.short,
    "provider": {
      "@type": "Organization",
      "name": "LocalServices"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressCountry": country.name
    }
  };
}

/**
 * Generates the SEO metadata for the homepage.
 */
export function generateHomepageSEO(language: string): SEOData {
    const isArabic = language === 'ar';
    const title = isArabic
        ? 'LocalServices | بوابتك للخدمات المحلية الموثوقة في الشرق الأوسط'
        : 'LocalServices | Your Gateway to Trusted Local Services in the Middle East';
    const description = isArabic
        ? 'اعثر على أفضل مزودي الخدمات المحليين في السعودية، الإمارات، الكويت، ومصر. من التنظيف إلى الصيانة، نغطيك بالكامل.'
        : 'Find the best local service providers in Saudi Arabia, UAE, Kuwait, and Egypt. From cleaning to maintenance, we have you covered.';
    const keywords = [ 'local services', 'home maintenance', 'cleaning', 'Saudi Arabia', 'UAE', 'Kuwait', 'Egypt', 'خدمات محلية', 'صيانة منزلية', 'تنظيف', 'السعودية', 'الإمارات', 'الكويت', 'مصر' ];
    return {
        title,
        description,
        keywords,
        canonical: '/',
        schemaMarkup: generateOrganizationSchema(),
    };
}

/**
 * Generates the SEO metadata for a specific city page.
 */
export function generateCityPageSEO(city: City, country: Country, services: Service[], language: string): SEOData {
  const isArabic = language === 'ar';
  const cityName = isArabic ? city.nameAr : city.name;
  const countryName = isArabic ? country.nameAr : country.name;
  const baseUrl = 'https://localservices.com';
  const serviceList = services.slice(0, 5).map(s => isArabic ? s.nameAr : s.name).join(', ');

  const title = isArabic
    ? `أفضل الخدمات في ${cityName} | ${countryName}`
    : `Best Local Services in ${cityName} | ${countryName}`;
  const description = isArabic
    ? `اعثر على أفضل الخدمات المحلية في ${cityName}، ${countryName}، بما في ذلك: ${serviceList}. جودة عالية وأسعار تنافسية.`
    : `Find the best local services in ${cityName}, ${countryName}, including: ${serviceList}. High quality and competitive prices.`;
  const keywords = [ cityName, countryName, isArabic ? 'خدمات محلية' : 'local services', ...services.map(s => isArabic ? s.nameAr : s.name) ];
  const canonical = `/${country.slug}/${city.slug}`;

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `Services in ${cityName}`,
      "description": `Browse all available local services in ${cityName}, ${countryName}.`,
      "url": `${baseUrl}${canonical}`,
      "about": {
        "@type": "City",
        "name": cityName,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": country.code
        }
      }
    },
    generateOrganizationSchema()
  ];

  return { title, description, keywords, canonical, schemaMarkup };
}

/**
 * Generates the SEO metadata for a specific service page in a city.
 */
export function generateServicePageSEO(service: Service, city: City, country: Country, category: ServiceCategory, language: string): SEOData {
    const isArabic = language === 'ar';
    const serviceName = isArabic ? service.nameAr : service.name;
    const cityName = isArabic ? city.nameAr : city.name;
    const categoryName = isArabic ? category.nameAr : category.name;
    const countryName = isArabic ? country.nameAr : country.name;

    const title = isArabic ? `${serviceName} في ${cityName} | ${countryName}` : `${serviceName} in ${cityName} | ${countryName}`;
    const description = isArabic ? `احصل على خدمة ${serviceName} احترافية في ${cityName}. نقدم ${service.description.shortAr}. اتصل الآن للحصول على أفضل الأسعار.` : `Get professional ${serviceName} service in ${cityName}. We offer ${service.description.short}. Call now for the best prices.`;
    const keywords = [ serviceName, cityName, categoryName, ...service.keywords ];
    const canonical = `/${country.slug}/${city.slug}/${service.slug}`;
    const schemaMarkup = [ generateServiceSchema(service, city, country), generateOrganizationSchema() ];

    return { title, description, keywords, canonical, schemaMarkup };
}
