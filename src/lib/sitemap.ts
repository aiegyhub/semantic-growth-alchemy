
import { Service, City, Country, ServiceCategory } from '@/types';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(
  services: Service[],
  cities: City[],
  countries: Country[],
  categories: ServiceCategory[]
): string {
  const baseUrl = 'https://localservices.com';
  const now = new Date().toISOString().split('T')[0];
  
  const entries: SitemapEntry[] = [
    // Homepage
    {
      url: baseUrl,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0
    },
    
    // Static pages
    {
      url: `${baseUrl}/about`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastmod: now,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.5
    }
  ];

  // Country pages
  countries.forEach(country => {
    entries.push({
      url: `${baseUrl}/${country.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // City pages
  cities.forEach(city => {
    const country = countries.find(c => c.id === city.countryId);
    if (country) {
      entries.push({
        url: `${baseUrl}/${country.slug}/${city.slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.7
      });
    }
  });

  // Service category pages
  categories.forEach(category => {
    entries.push({
      url: `${baseUrl}/services/category/${category.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Generic service pages
  services.forEach(service => {
    entries.push({
      url: `${baseUrl}/services/item/${service.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // City-specific service pages
  services.forEach(service => {
    service.availableCityIds.forEach(cityId => {
      const city = cities.find(c => c.id === cityId);
      const country = countries.find(c => c.id === city?.countryId);
      
      if (city && country) {
        entries.push({
          url: `${baseUrl}/${country.slug}/${city.slug}/${service.slug}`,
          lastmod: now,
          changefreq: 'weekly',
          priority: 0.8
        });
      }
    });
  });

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.url}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

export function generateRobotsTxt(): string {
  const baseUrl = 'https://localservices.com';
  
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
`;
}
