import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageData } from '@/hooks/usePageData';
import SEOHead from '@/components/SEOHead';
import ServiceIcon from '@/components/ServiceIcon';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { getTestimonialsByServiceId, getAverageRating } from '@/lib/testimonials';

const GenericServicePage = () => {
  const { language, t } = useLanguage();
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  const { 
    isLoading, 
    services, 
    serviceCategories, 
    cities,
    countries
  } = usePageData();

  const currentService = useMemo(() => 
    services.find(s => s.slug === serviceSlug), 
  [services, serviceSlug]);

  const serviceTestimonials = useMemo(() => 
    currentService ? getTestimonialsByServiceId(currentService.id) : [],
  [currentService]);

  const averageRating = useMemo(() => 
    currentService ? getAverageRating(currentService.id) : 4.5,
  [currentService]);

  const category = useMemo(() => 
    currentService ? serviceCategories.find(c => c.id === currentService.categoryId) : null,
  [currentService, serviceCategories]);

  const availableCities = useMemo(() => 
    currentService ? cities.filter(c => currentService.availableCityIds.includes(c.id)) : [],
  [currentService, cities]);

  const relatedServices = useMemo(() => 
    currentService ? services.filter(s => 
      s.categoryId === currentService.categoryId && 
      s.id !== currentService.id &&
      s.isActive
    ).slice(0, 3) : [],
  [currentService, services]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-xl">{t('loading')}</div>
        </div>
      </Layout>
    );
  }

  if (!currentService) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">{t('service.notFound')}</h1>
            <Link to="/services">
              <Button>{t('button.viewServices')}</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const serviceName = language === 'ar' ? currentService.nameAr : currentService.name;

  const seoData = {
    title: `${serviceName} | ${t('nav.services')}`,
    description: `Professional ${serviceName} services across the Middle East. Find certified technicians for quality ${serviceName} solutions.`,
    keywords: [serviceName, 'professional service', 'Middle East', 'certified technicians'],
    canonical: `/services/item/${serviceSlug}`,
    ogTitle: `${serviceName} | ${t('nav.services')}`,
    ogDescription: `Professional ${serviceName} services across the Middle East. Find certified technicians for quality ${serviceName} solutions.`,
    ogImage: `https://musaaed.com/images/services/${serviceSlug}-og.jpg`,
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description: `Professional ${serviceName} services across the Middle East.`,
    }
  };

  const price = currentService.pricing.basePrice 
    ? `${t('startingFrom')} ${currentService.pricing.basePrice} ${currentService.pricing.currency}` 
    : t('pricing.onQuote');

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-blue-300">
                  <Link to="/services" className="hover:text-white">{t('nav.services')}</Link>
                  <span>→</span>
                  {category && (
                    <>
                      <Link to={`/services/category/${category.slug}`} className="hover:text-white">
                        {language === 'ar' ? category.nameAr : category.name}
                      </Link>
                      <span>→</span>
                    </>
                  )}
                  <span className="text-white">{language === 'ar' ? currentService.nameAr : currentService.name}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {language === 'ar' ? currentService.nameAr : currentService.name}
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed">
                  {language === 'ar' ? currentService.description.shortAr : currentService.description.short}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white font-semibold">{averageRating} ({serviceTestimonials.length} {language === 'ar' ? 'تقييم' : 'reviews'})</span>
                  </div>
                  
                  {currentService.isEmergency && (
                    <Badge className="bg-red-600 text-white">
                      <Shield className="w-4 h-4 mr-1" />
                      {language === 'ar' ? 'خدمة طوارئ' : 'Emergency Service'}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('button.contact')}
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('whatsapp')}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <ServiceIcon iconName={currentService.icon} className="w-48 h-48 text-blue-300" />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">{t('service.descriptionTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-100 space-y-4">
                    <p className="leading-relaxed">
                      {language === 'ar' ? currentService.description.longAr : currentService.description.long}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{t('service.features.certified')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{t('service.features.warranty')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{t('service.features.fast')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{t('service.features.pricing')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Available Cities */}
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">{language === 'ar' ? 'المدن المتاحة' : 'Available Cities'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {availableCities.map(city => {
                        const country = countries.find(c => c.id === city.countryId);
                        return (
                          <Link 
                            key={city.id} 
                            to={`/${country?.slug}/${city.slug}/${currentService.slug}`}
                            className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                          >
                            <MapPin className="w-4 h-4 text-blue-300" />
                            <span className="text-white">{language === 'ar' ? city.nameAr : city.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">{language === 'ar' ? 'معلومات سريعة' : 'Quick Info'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">{language === 'ar' ? 'المدة المتوقعة:' : 'Duration:'}</span>
                      <span className="text-white font-semibold">{language === 'ar' ? currentService.duration.textAr : currentService.duration.text}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">{language === 'ar' ? 'السعر:' : 'Price:'}</span>
                      <span className="text-white font-semibold">{price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">{language === 'ar' ? 'التقييم:' : 'Rating:'}</span>
                      <span className="text-white font-semibold">{averageRating}/5</span>
                    </div>
                    {currentService.isEmergency && (
                      <div className="bg-red-600/20 border border-red-400 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-red-300">
                          <Shield className="w-4 h-4" />
                          <span className="font-semibold">{language === 'ar' ? 'خدمة طوارئ 24/7' : '24/7 Emergency Service'}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader>
                      <CardTitle className="text-white">{language === 'ar' ? 'خدمات ذات صلة' : 'Related Services'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {relatedServices.map(service => (
                        <Link 
                          key={service.id}
                          to={`/services/item/${service.slug}`}
                          className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <ServiceIcon iconName={service.icon} className="w-6 h-6 text-blue-300" />
                            <span className="text-white text-sm">{language === 'ar' ? service.nameAr : service.name}</span>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {serviceTestimonials.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                {language === 'ar' ? 'آراء العملاء في هذه الخدمة' : 'Customer Reviews for This Service'}
              </h2>
              <TestimonialsCarousel testimonials={serviceTestimonials} />
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default GenericServicePage;
