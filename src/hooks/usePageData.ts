import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCountries, getCities, getServices, getServiceCategories } from '@/lib/cms';

/**
 * A custom hook to fetch all core application data and derive the current
 * page context from URL parameters. This centralizes data fetching and
 * processing logic for page components.
 */
export const usePageData = () => {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = useParams();

  // --- Start: Data Fetching with TanStack Query ---
  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({ queryKey: ['countries'], queryFn: getCountries });
  const { data: cities = [], isLoading: isCitiesLoading } = useQuery({ queryKey: ['cities'], queryFn: getCities });
  const { data: services = [], isLoading: isServicesLoading } = useQuery({ queryKey: ['services'], queryFn: getServices });
  const { data: serviceCategories = [], isLoading: isCategoriesLoading } = useQuery({ queryKey: ['serviceCategories'], queryFn: getServiceCategories });
  // --- End: Data Fetching ---

  // --- Start: Memoized Data Derivations ---
  const currentCountry = useMemo(() => 
    countries.find(c => c.slug === countrySlug),
    [countries, countrySlug]
  );

  const currentCity = useMemo(() => 
    cities.find(c => c.slug === citySlug && c.countryId === currentCountry?.id),
    [cities, citySlug, currentCountry]
  );

  const currentService = useMemo(() => 
    services.find(s => s.slug === serviceSlug),
    [services, serviceSlug]
  );

  const currentCategory = useMemo(() => 
    serviceCategories.find(c => c.id === currentService?.categoryId),
    [serviceCategories, currentService]
  );
  // --- End: Memoized Data Derivations ---

  const isLoading = isCountriesLoading || isCitiesLoading || isServicesLoading || isCategoriesLoading;

  return {
    // Raw Data
    countries,
    cities,
    services,
    serviceCategories,
    // Derived Page Context
    currentCountry,
    currentCity,
    currentService,
    currentCategory,
    // URL Slugs
    countrySlug,
    citySlug,
    serviceSlug,
    // State
    isLoading,
  };
};