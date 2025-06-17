import { useMemo } from 'react';
import Layout from '@/components/Layout';
import LandingPage from '@/components/LandingPage';
import SEOHead from '@/components/SEOHead';
import { getCountries, getServices } from '@/lib/cms';
import { generateHomepageSEO } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuery } from '@tanstack/react-query';

const Index = () => {
  // FIX: Destructure 't' directly from the context hook at the top.
  const { language, t } = useLanguage();

  const seoData = generateHomepageSEO(language);

  const { data: countries, isLoading: isCountriesLoading, isError: isCountriesError } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  const { data: services, isLoading: isServicesLoading, isError: isServicesError } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  const popularServices = useMemo(() => {
    if (!services) return [];
    return services.filter(s => s.isPopular && s.isActive).slice(0, 6);
  }, [services]);

  const allCountries = useMemo(() => {
    if(!countries) return [];
    return countries;
  }, [countries]);

  const isLoading = isCountriesLoading || isServicesLoading;
  const isError = isCountriesError || isServicesError;

  if (isLoading) {
    return (
      <Layout>
        <SEOHead seoData={seoData} language={language} />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          {/* This now works because 't' is defined above */}
          <div className="text-white text-xl">{t('loading')}</div>
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
        <Layout>
            <SEOHead seoData={seoData} language={language} />
            <div className="min-h-screen flex items-center justify-center bg-red-900/20">
                <div className="text-white text-xl">Error loading data. Please try again later.</div>
            </div>
        </Layout>
    );
  }

  // FIX: The unnecessary and incorrectly placed dummy 't' function has been removed.

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <LandingPage countries={allCountries} popularServices={popularServices} />
    </Layout>
  );
};

export default Index;