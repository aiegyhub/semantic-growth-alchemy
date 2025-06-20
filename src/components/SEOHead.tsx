
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonical: string;
  canonicalUrl?: string;
  hreflang?: Array<{ lang: string; url: string }>;
  author?: string;
  schemaMarkup?: any;
}

interface SEOHeadProps {
  seoData: SEOData;
  language: string;
}

export default function SEOHead({ seoData, language }: SEOHeadProps) {
  const isArabic = language === 'ar';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} dir={isArabic ? 'rtl' : 'ltr'} />
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content={seoData.author || "musaaed"} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.ogTitle} />
      <meta property="og:description" content={seoData.ogDescription} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={isArabic ? 'ar_AR' : 'en_US'} />
      <meta property="og:site_name" content="مساعد الخدمات - Service Helper" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.ogTitle} />
      <meta name="twitter:description" content={seoData.ogDescription} />
      <meta name="twitter:image" content={seoData.ogImage} />
      
      {/* Facebook Meta Tags - Fixed */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta property="article:author" content="musaaed" />
      <meta property="article:publisher" content="مساعد الخدمات" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl || seoData.canonical} />
      
      {/* Hreflang */}
      {seoData.hreflang && seoData.hreflang.map((link, index) => (
        <link key={index} rel="alternate" hrefLang={link.lang} href={link.url} />
      ))}
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Schema.org structured data */}
      {seoData.schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(seoData.schemaMarkup) ? seoData.schemaMarkup : [seoData.schemaMarkup])}
        </script>
      )}
      
      {/* Default Local Business Schema if no specific schema provided */}
      {!seoData.schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "مساعد الخدمات - Service Helper",
            "description": "منصة رائدة لربط العملاء بمقدمي الخدمات المنزلية المعتمدين",
            "url": "https://musaaed.com",
            "telephone": "+966111234567",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA",
              "addressRegion": "Riyadh"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.7136",
              "longitude": "46.6753"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": ["SA", "AE", "KW", "EG"],
            "serviceType": [
              "تنظيف مكيفات",
              "سباكة طارئة", 
              "صيانة كهرباء",
              "تنظيف منازل",
              "مكافحة حشرات"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}
