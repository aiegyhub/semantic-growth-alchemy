
import { Service, City, Country } from '@/types';

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

export function generateCitySchema(city: City, country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "name": city.name,
    "addressCountry": country.name
  };
}

export function generateCountrySchema(country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "Country",
    "name": country.name
  };
}

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
