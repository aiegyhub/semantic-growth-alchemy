
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { getCountries, getCities, getServices } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Wrench, FileText, Phone, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Sitemap() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const { data: countries = [] } = useQuery({ queryKey: ['countries'], queryFn: getCountries });
  const { data: cities = [] } = useQuery({ queryKey: ['cities'], queryFn: getCities });
  const { data: services = [] } = useQuery({ queryKey: ['services'], queryFn: getServices });

  const seoData = {
    title: isArabic ? 'خريطة الموقع - مساعد' : 'Sitemap - Musaaed',
    description: isArabic 
      ? 'خريطة شاملة لجميع صفحات موقع مساعد للخدمات المحلية' 
      : 'Complete sitemap of all Musaaed local services pages',
    keywords: isArabic 
      ? 'خريطة الموقع، مساعد، خدمات محلية، صفحات الموقع'
      : 'sitemap, musaaed, local services, website pages',
    ogImage: '/images/sitemap-og.jpg'
  };

  const staticPages = [
    { path: '/', titleAr: 'الصفحة الرئيسية', titleEn: 'Home Page' },
    { path: '/about', titleAr: 'من نحن', titleEn: 'About Us' },
    { path: '/contact', titleAr: 'اتصل بنا', titleEn: 'Contact Us' },
    { path: '/services', titleAr: 'الخدمات', titleEn: 'Services' },
    { path: '/privacy-policy', titleAr: 'سياسة الخصوصية', titleEn: 'Privacy Policy' },
    { path: '/terms-conditions', titleAr: 'الشروط والأحكام', titleEn: 'Terms & Conditions' }
  ];

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {isArabic ? 'خريطة الموقع' : 'Website Sitemap'}
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {isArabic 
                ? 'استكشف جميع صفحات وخدمات موقع مساعد بسهولة'
                : 'Explore all pages and services on Musaaed website easily'
              }
            </p>
          </div>

          <div className="grid gap-8">
            {/* Static Pages */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="w-6 h-6 text-blue-400" />
                  {isArabic ? 'الصفحات الرئيسية' : 'Main Pages'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {staticPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <span className="text-blue-300 hover:text-white">
                        {isArabic ? page.titleAr : page.titleEn}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Countries */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Globe className="w-6 h-6 text-green-400" />
                  {isArabic ? 'صفحات الدول' : 'Country Pages'}
                  <span className="text-sm bg-green-600/20 text-green-300 px-2 py-1 rounded-full">
                    {countries.length}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {countries.map((country) => (
                    <Link
                      key={country.id}
                      to={`/${country.slug}`}
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <span className="text-blue-300 hover:text-white font-medium">
                        {isArabic ? country.nameAr : country.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cities by Country */}
            {countries.map((country) => {
              const countryCities = cities.filter(city => city.countryId === country.id);
              if (countryCities.length === 0) return null;

              return (
                <Card key={country.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white">
                      <MapPin className="w-6 h-6 text-purple-400" />
                      {isArabic ? `مدن ${country.nameAr}` : `${country.name} Cities`}
                      <span className="text-sm bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                        {countryCities.length}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {countryCities.map((city) => (
                        <Link
                          key={city.id}
                          to={`/${country.slug}/${city.slug}`}
                          className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <span className="text-blue-300 hover:text-white">
                            {isArabic ? city.nameAr : city.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Services */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Wrench className="w-6 h-6 text-yellow-400" />
                  {isArabic ? 'صفحات الخدمات' : 'Service Pages'}
                  <span className="text-sm bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded-full">
                    {services.filter(s => s.isActive).length}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.filter(s => s.isActive).map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <span className="text-blue-300 hover:text-white">
                        {isArabic ? service.nameAr : service.name}
                      </span>
                      {service.isPopular && (
                        <span className="ml-2 text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded-full">
                          {isArabic ? 'شائع' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {isArabic ? 'معلومات إضافية' : 'Additional Information'}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{countries.length}</div>
                      <div className="text-sm text-blue-200">{isArabic ? 'دولة' : 'Countries'}</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{cities.length}</div>
                      <div className="text-sm text-blue-200">{isArabic ? 'مدينة' : 'Cities'}</div>
                    </div>
                    <div className="text-center">
                      <Wrench className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{services.filter(s => s.isActive).length}</div>
                      <div className="text-sm text-blue-200">{isArabic ? 'خدمة' : 'Services'}</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-blue-200 mb-4">
                      {isArabic 
                        ? 'لمزيد من المعلومات أو المساعدة، لا تتردد في التواصل معنا'
                        : 'For more information or assistance, feel free to contact us'
                      }
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <User className="w-5 h-5" />
                        {isArabic ? 'اتصل بنا' : 'Contact Us'}
                      </Link>
                      <a
                        href="tel:+966111234567"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        {isArabic ? 'اتصال مباشر' : 'Direct Call'}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
