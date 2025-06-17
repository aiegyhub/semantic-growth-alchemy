
import { Service, City, Country, ServiceCategory } from '@/types';
import { generateSitemap, generateRobotsTxt } from '@/lib/sitemap';

export function exportSitemap(
  services: Service[],
  cities: City[],
  countries: Country[],
  categories: ServiceCategory[]
): string {
  return generateSitemap(services, cities, countries, categories);
}

export function exportRobots(): string {
  return generateRobotsTxt();
}

export function generateSEOReport(
  services: Service[],
  cities: City[],
  countries: Country[]
) {
  return {
    totalPages: services.length * cities.length + cities.length + countries.length,
    servicesCount: services.length,
    citiesCount: cities.length,
    countriesCount: countries.length
  };
}
