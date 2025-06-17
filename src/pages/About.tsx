
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Clock, Star, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const { language, t } = useLanguage();

  const seoData = {
    title: t('about.page.title'),
    description: t('about.page.description'),
    keywords: [t('about.title'), 'LocalServices', language === 'ar' ? 'خدمات محلية' : 'local services', language === 'ar' ? 'الشرق الأوسط' : 'Middle East'],
    canonical: '/about',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": t('about.page.title'),
      "description": t('about.page.description')
    }
  };

  const stats = [
    { icon: Users, value: '50,000+', label: t('about.stats.happyCustomers') },
    { icon: Shield, value: '2,500+', label: t('about.stats.verifiedProfessionals') },
    { icon: MapPin, value: '25+', label: t('about.stats.citiesCovered') },
    { icon: Star, value: '4.8', label: t('about.stats.averageRating') }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.trusted.title'),
      description: t('about.values.trusted.description')
    },
    {
      icon: CheckCircle,
      title: t('about.values.transparent.title'),
      description: t('about.values.transparent.description')
    },
    {
      icon: Clock,
      title: t('about.values.support.title'),
      description: t('about.values.support.description')
    }
  ];

  const countries = [
    { name: language === 'ar' ? 'السعودية' : 'Saudi Arabia', cities: language === 'ar' ? 'الرياض، جدة، الدمام، مكة' : 'Riyadh, Jeddah, Dammam, Mecca' },
    { name: language === 'ar' ? 'الإمارات' : 'United Arab Emirates', cities: language === 'ar' ? 'دبي، أبوظبي، الشارقة' : 'Dubai, Abu Dhabi, Sharjah' },
    { name: language === 'ar' ? 'الكويت' : 'Kuwait', cities: language === 'ar' ? 'مدينة الكويت، الأحمدي' : 'Kuwait City, Al Ahmadi' },
    { name: language === 'ar' ? 'مصر' : 'Egypt', cities: language === 'ar' ? 'القاهرة، الإسكندرية، الجيزة' : 'Cairo, Alexandria, Giza' }
  ];

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.page.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t('about.page.description')}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-3xl text-white text-center">
                    {t('about.mission.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-blue-100 text-center leading-relaxed">
                    {t('about.mission.text')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('about.values.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <value.icon className="w-12 h-12 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('about.coverage.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countries.map((country, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-center">
                      {country.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 text-center text-sm">
                      {country.cities}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
