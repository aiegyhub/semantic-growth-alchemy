import { Country, Service, City, ServiceCategory } from '@/types';
import { countries, services, cities, serviceCategories } from '@/data/mockData';

// This file acts as a Data Access Layer (DAL).
// All components should import data-fetching functions from here
// instead of directly from the mockData file. This makes it easy
// to swap out the data source (e.g., to a real API) in the future
// without refactoring the entire application.

const API_DELAY = 100; // Simulate network latency

/**
 * Fetches all countries.
 * @returns A promise that resolves to an array of Country objects.
 */
export async function getCountries(): Promise<Country[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return countries;
}

/**
 * Fetches all services.
 * @returns A promise that resolves to an array of Service objects.
 */
export async function getServices(): Promise<Service[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return services;
}

/**
 * Fetches all cities.
 * @returns A promise that resolves to an array of City objects.
 */
export async function getCities(): Promise<City[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return cities;
}

/**
 * Fetches all service categories.
 * @returns A promise that resolves to an array of ServiceCategory objects.
 */
export async function getServiceCategories(): Promise<ServiceCategory[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return serviceCategories;
}