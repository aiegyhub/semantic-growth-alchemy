
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Star, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageData } from '@/hooks/usePageData';
import SEOHead from '@/components/SEOHead';
import { generateCityPageSEO } from '@/lib/seo';
import ServiceIcon from '@/components/ServiceIcon';

const CityPage = () => {
  const { language, t } = useLanguage();
  
  const { 
    isLoading, 
    services, 
    serviceCategories, 
    currentCountry, 
    currentCity,
    countrySlug,
    citySlug
  } = usePageData();

  const availableServices = useMemo(() => {
    if (!currentCity) return [];
    return services.filter(s => s.availableCityIds.includes(currentCity.id) && s.isActive);
  }, [services, currentCity]);

  if (isLoading) {
    return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('loading')}</div></div></Layout>);
  }
  
  if (!currentCountry || !currentCity) {
    return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('city.notFound')}</div></div></Layout>);
  }

  const seoData = generateCityPageSEO(currentCity, currentCountry, language);
  const getCategoryById = (id: string) => serviceCategories.find(c => c.id === id);

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center text-blue-300 mb-4 gap-x-2">
              <MapPin className="w-5 h-5" />
              <span>{language === 'ar' ? currentCountry.nameAr : currentCountry.name} → {language === 'ar' ? currentCity.nameAr : currentCity.name}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{t('city.servicesIn')} {language === 'ar' ? currentCity.nameAr : currentCity.name}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{t('city.reliableServices')} {language === 'ar' ? currentCity.nameAr : currentCity.name}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${currentCity.phoneNumbers[0]}`} className="flex items-center gap-x-2 text-white bg-green-600/50 px-6 py-3 rounded-lg w-full sm:w-auto justify-center"><Phone className="w-5 h-5" /><span className="font-semibold">{currentCity.phoneNumbers[0]}</span></a>
              <a href={`https://wa.me/${currentCity.whatsappNumbers[0].replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-white bg-blue-600/50 px-6 py-3 rounded-lg w-full sm:w-auto justify-center"><MessageCircle className="w-5 h-5" /><span>{t('whatsapp')}: {currentCity.whatsappNumbers[0]}</span></a>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">{t('city.availableServices')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableServices.map((service) => {
                const category = getCategoryById(service.categoryId);
                const price = service.pricing.basePrice ? `${service.pricing.basePrice} ${service.pricing.currency}` : t('pricing.onQuote');
                return (
                  <Card key={service.id} className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-x-4 mb-4">
                        <ServiceIcon iconName={service.icon} className="w-10 h-10 text-blue-300 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{language === 'ar' ? service.nameAr : service.name}</h3>
                          {category && <p className="text-blue-200 text-sm">{language === 'ar' ? category.nameAr : category.name}</p>}
                        </div>
                      </div>
                      <p className="text-blue-100 mb-4 text-sm flex-grow">{language === 'ar' ? service.description.shortAr : service.description.short}</p>
                      <div className="mt-auto space-y-4">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-x-1 text-yellow-300"><Star className="w-4 h-4 fill-current" /><span>{service.rating}</span></div>
                          <div className="flex items-center gap-x-1 text-green-300"><Clock className="w-4 h-4" /><span>{language === 'ar' ? service.duration.textAr : service.duration.text}</span></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">{price}</span>
                          {service.isEmergency && (<div className="flex items-center text-red-300 gap-x-1"><Shield className="w-4 h-4" /><span className="text-xs font-bold">{t('emergency')}</span></div>)}
                        </div>
                        <Link to={`/${countrySlug}/${citySlug}/${service.slug}`}><Button className="w-full bg-blue-600 hover:bg-blue-700">{t('button.bookNow')}</Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CityPage;
