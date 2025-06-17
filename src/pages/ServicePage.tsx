import { useMemo } from 'react';
import Layout from '@/components/Layout';
import Testimonials from '@/components/Testimonials';
import SEOHead from '@/components/SEOHead';
import AvailabilityStatus from '@/components/AvailabilityStatus';
import UrgentServiceIndicator from '@/components/UrgentServiceIndicator';
import ServiceFormSection from '@/components/ServiceFormSection';
import RelatedServices from '@/components/RelatedServices';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceFAQ from '@/components/ServiceFAQ';
import ServiceCoverage from '@/components/ServiceCoverage';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageData } from '@/hooks/usePageData';
import { generateServicePageSEO } from '@/lib/seo';
import { testimonials } from '@/lib/testimonials';
import { CustomTabs } from "@/components/CustomTabs";

const ServicePage = () => {
  const { language, t } = useLanguage();
  
  const { 
    isLoading,
    services,
    currentCountry,
    currentCity,
    currentService,
    currentCategory,
    countrySlug,
  } = usePageData();

  const relatedServices = useMemo(() => {
    if (!currentService || !currentCity) return [];
    return services.filter(s =>
      s.categoryId === currentService.categoryId &&
      s.id !== currentService.id &&
      s.availableCityIds.includes(currentCity.id)
    );
  }, [services, currentService, currentCity]);

  const reviewCount = useMemo(() => {
    if (!currentService) return 0;
    const seed = currentService.name.length;
    return 150 + Math.floor(((seed * 9301 + 49297) % 233280) / 233280 * 350);
  }, [currentService]);

  const pageTabs = useMemo(() => {
    if (!currentService || !currentCity) return [];
    const isArabic = language === 'ar';
    const serviceName = isArabic ? currentService.nameAr : currentService.name;
    const cityName = isArabic ? currentCity.nameAr : currentCity.name;
    
    const overviewContent = (
      <div className="prose prose-invert max-w-none text-start text-gray-300" dir={isArabic ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-bold text-white mb-3">
          {isArabic ? `خدمة ${serviceName} متكاملة في ${cityName}` : `Complete ${serviceName} in ${cityName}`}
        </h3>
        <p className="mb-4">{isArabic ? currentService.description.longAr : currentService.description.long}</p>
        <h4 className="text-lg font-semibold text-white mb-3">{isArabic ? 'خطوات عملنا' : 'Our Process'}</h4>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li><strong>{isArabic ? 'التقييم المبدئي' : 'Initial Assessment'}:</strong>{isArabic ? ' يقوم فنيونا المعتمدون بإجراء فحص شامل لتشخيص المشكلة بدقة.' : ' Our certified technicians conduct a thorough inspection to diagnose the issue accurately.'}</li>
          <li><strong>{isArabic ? 'عرض سعر شفاف' : 'Clear Quoting'}:</strong>{isArabic ? ' نقدم عرض أسعار واضح ومفصل بالتكاليف قبل البدء في أي عمل.' : ' We provide a transparent, upfront quote with a full breakdown of costs before any work begins.'}</li>
          <li><strong>{isArabic ? 'تنفيذ احترافي' : 'Expert Execution'}:</strong>{isArabic ? ` باستخدام أحدث الأدوات وقطع الغيار عالية الجودة، نقدم خدمة ${currentService.nameAr} بأعلى المعايير.` : ` Using state-of-the-art tools and high-quality parts, we perform the ${currentService.name} service to the highest standards.`}</li>
          <li><strong>{isArabic ? 'الاختبار النهائي والتنظيف' : 'Final Testing & Cleanup'}:</strong>{isArabic ? ' نختبر عملنا للتأكد من أن كل شيء يعمل على أكمل وجه ونترك مكانك نظيفًا ومرتبًا.' : ' We test our work to ensure everything is functioning perfectly and leave your space clean and tidy.'}</li>
        </ol>
        <h4 className="text-lg font-semibold text-white mb-3">{isArabic ? 'المشاكل الشائعة التي نحلها' : 'Common Problems We Solve'}</h4>
        <ul className="list-disc list-inside space-y-2">
          {(isArabic ? currentService.commonProblemsSolvedAr : currentService.commonProblemsSolved).map(problem => <li key={problem}>{problem}</li>)}
        </ul>
      </div>
    );
      
    return [
      { value: "overview", label: t('tabs.overview'), content: (
        <div className="space-y-12">
          {overviewContent}
          <ServiceFeatures />
        </div>
      )},
      { value: "faq", label: t('tabs.faq'), content: <ServiceFAQ faqs={currentService.faqs} /> },
      { value: "coverage", label: t('tabs.coverage'), content: <ServiceCoverage cityId={currentCity.id} /> },
    ];
  }, [language, t, currentService, currentCity]);

  if (isLoading) {
    return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('loading')}</div></div></Layout>);
  }

  if (!currentService || !currentCity || !currentCountry || !currentCategory) {
    return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('service.notFound')}</div></div></Layout>);
  }
  
  const seoData = generateServicePageSEO(currentService, currentCity, currentCountry, currentCategory, language);
  const serviceImage = `/images/services/${currentService.slug}.jpg`;

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      
      {currentService.isEmergency && ( <div className="container mx-auto px-4 pt-8"><UrgentServiceIndicator onUrgentRequest={() => {}} serviceType={language === 'ar' ? currentService.nameAr : currentService.name} isAvailable={true} /></div> )}
      
      <div className="container mx-auto px-4 pt-8"><ServiceHero service={currentService} city={currentCity} country={currentCountry} language={language} averageRating={currentService.rating} reviewCount={reviewCount} serviceImage={serviceImage}/></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <main className="lg:col-span-2">
            <CustomTabs tabs={pageTabs} defaultValue="overview" />
          </main>
          <aside className="lg:sticky lg:top-24 space-y-8" id="service-form">
            <AvailabilityStatus serviceId={currentService.id} cityId={currentCity.slug} />
            <ServiceFormSection service={currentService} city={currentCity} country={currentCountry} isUrgent={currentService.isEmergency} />
          </aside>
        </div>
      </div>
      
      <div className="py-12 bg-blue-900/30"><Testimonials testimonials={testimonials.filter(t => t.serviceId === currentService.slug)} /></div>
      
      {relatedServices.length > 0 && (
        <section className="py-12"><h2 className="text-3xl font-bold text-white text-center mb-8">{t('service.related')}</h2><RelatedServices services={relatedServices} city={currentCity} country={countrySlug || ''} language={language} /></section>
      )}
    </Layout>
  );
};

export default ServicePage;