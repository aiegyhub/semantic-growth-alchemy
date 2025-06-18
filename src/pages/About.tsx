import Layout from '@/components/Layout';
import { Users, Award, MapPin, Clock, Shield, DollarSign, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

interface Stat {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  number: string;
  label: string;
  color: string;
}

interface Value {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

interface CountryCoverage {
  flag: string;
  name: string;
  cities: string;
}

const About = () => {
  const { language, t } = useLanguage();

  const seoData = {
    title: t('about.page.title'),
    description: t('about.page.description'),
    keywords: ['about LocalServices', 'local services company', 'verified professionals', 'Middle East services'],
    canonical: '/about',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": t('about.page.title'),
      "description": t('about.page.description'),
    }
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="min-h-screen">
        <section className="py-20 px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t('about.page.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('about.page.description')}
          </p>
        </section>

        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.mission.title')}</h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Users, number: '50,000+', label: t('about.stats.happyCustomers'), color: 'text-blue-400' },
                { icon: Award, number: '1,000+', label: t('about.stats.verifiedProfessionals'), color: 'text-green-400' },
                { icon: MapPin, number: '50+', label: t('about.stats.citiesCovered'), color: 'text-purple-400' },
                { icon: Clock, number: '24/7', label: t('hero.support'), color: 'text-yellow-400' }
              ].map((stat: Stat, index: number) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{t('about.values.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: t('about.values.trusted.title'), description: t('about.values.trusted.description'), color: 'text-green-400' },
                  { icon: DollarSign, title: t('about.values.transparent.title'), description: t('about.values.transparent.description'), color: 'text-blue-400' },
                  { icon: Headphones, title: t('about.values.support.title'), description: t('about.values.support.description'), color: 'text-purple-400' }
                ].map((value: Value, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                    <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-6`} />
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{t('about.coverage.title')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { flag: '🇸🇦', name: t('nav.saudi'), cities: 'Riyadh, Jeddah, Dammam +' },
                  { flag: '🇦🇪', name: t('nav.uae'), cities: 'Dubai, Abu Dhabi, Sharjah +' },
                  { flag: '🇰🇼', name: t('nav.kuwait'), cities: 'Kuwait City, Hawalli +' },
                  { flag: '🇪🇬', name: t('nav.egypt'), cities: 'Cairo, Alexandria, Giza +' }
                ].map((country: CountryCoverage, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl mb-4">{country.flag}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{country.name}</h3>
                    <p className="text-blue-200 text-sm">{country.cities}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
