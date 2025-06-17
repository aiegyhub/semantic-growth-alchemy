import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { getServices, getServiceCategories } from '@/lib/cms';
import { Service, ServiceCategory } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ServiceIcon from '@/components/ServiceIcon';

const GenericServicePage = () => {
  const { service: serviceSlug } = useParams();
  const { language, t } = useLanguage();
  const [service, setService] = useState<Service | null>(null);
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadService() {
      setLoading(true);
      try {
        const [allServices, allCategories] = await Promise.all([
          getServices(),
          getServiceCategories()
        ]);
        
        const foundService = allServices.find(s => s.slug === serviceSlug);
        if (foundService) {
          const foundCategory = allCategories.find(c => c.id === foundService.categoryId);
          setService(foundService);
          setCategory(foundCategory || null);
        } else {
          setService(null);
          setCategory(null);
        }
      } catch (error) {
        console.error("Failed to load generic service data:", error);
      } finally {
        setLoading(false);
      }
    }
    if (serviceSlug) {
      loadService();
    }
  }, [serviceSlug]);

  if (loading) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">{t('loading')}</div></Layout>;
  }

  if (!service) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">{t('service.notFound')}</div></Layout>;
  }

  const seoData = {
    title: `${language === 'ar' ? service.nameAr : service.name} | ${t('nav.services')}`,
    description: language === 'ar' ? service.description.shortAr : service.description.short,
    keywords: [...service.keywords, service.name, service.nameAr, category?.name || '', category?.nameAr || ''].filter(Boolean),
    canonical: `/services/${service.slug}`,
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": language === 'ar' ? service.nameAr : service.name,
      "description": language === 'ar' ? service.description.longAr : service.description.long,
      "category": category ? (language === 'ar' ? category.nameAr : category.name) : undefined,
    }
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <ServiceIcon iconName={service.icon} className="w-20 h-20 text-blue-300" />
          </div>
          {category && <p className="text-blue-300 font-semibold">{language === 'ar' ? category.nameAr : category.name}</p>}
          <h1 className="text-4xl md:text-6xl font-bold my-4">{language === 'ar' ? service.nameAr : service.name}</h1>
          <p className="text-lg text-gray-300 leading-relaxed prose prose-invert max-w-none">
            {language === 'ar' ? service.description.longAr : service.description.long}
          </p>

          <div className="mt-12 bg-white/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t('genericService.ctaTitle') || 'Want to book this service?'}</h2>
            <p className="text-blue-200 mb-6">
              {t('genericService.ctaDescription') || 'This service is available in multiple cities. Select your country to view local details and pricing.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><Link to="/sa">{t('nav.saudi')}</Link></Button>
              <Button asChild size="lg"><Link to="/ae">{t('nav.uae')}</Link></Button>
              <Button asChild size="lg"><Link to="/kw">{t('nav.kuwait')}</Link></Button>
              <Button asChild size="lg"><Link to="/eg">{t('nav.egypt')}</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenericServicePage;