
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
    // Homepage - highest priority
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
      url: `${baseUrl}/privacy-policy`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.3
    }
  ];

  // Country pages - high priority for SEO
  countries.forEach(country => {
    entries.push({
      url: `${baseUrl}/${country.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // City pages - important for local SEO
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
  services.filter(s => s.isActive).forEach(service => {
    entries.push({
      url: `${baseUrl}/services/item/${service.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // City-specific service pages - highest conversion pages
  services.filter(s => s.isActive).forEach(service => {
    service.availableCityIds.forEach(cityId => {
      const city = cities.find(c => c.id === cityId);
      const country = countries.find(c => c.id === city?.countryId);
      
      if (city && country) {
        const priority = service.isPopular ? 0.9 : 0.8;
        entries.push({
          url: `${baseUrl}/${country.slug}/${city.slug}/${service.slug}`,
          lastmod: now,
          changefreq: 'weekly',
          priority
        });
      }
    });
  });

  // Sort by priority for better SEO
  entries.sort((a, b) => b.priority - a.priority);

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

# High-priority content for SEO
Allow: /sa/
Allow: /ae/
Allow: /kw/
Allow: /eg/
Allow: /services/

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for better server performance
Crawl-delay: 1

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /internal/

# Block development files
Disallow: /*.json$
Disallow: /src/
Disallow: /node_modules/

# SEO optimizations
User-agent: Googlebot
Crawl-delay: 0.5

User-agent: Bingbot
Crawl-delay: 1

User-agent: Slurp
Crawl-delay: 2
`;
}
