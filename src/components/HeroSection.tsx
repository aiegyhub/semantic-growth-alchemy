
import { Phone, Clock, MapPin, Shield, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          {t('hero.title')}
          <span className="block text-blue-300 mt-2">{t('hero.subtitle')}</span>
        </h1>
        
        {/* Enhanced Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-blue-200">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">{t('verified')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">4.9/5 {t('about.stats.averageRating')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">50+ {t('about.stats.citiesCovered')}</span>
          </div>
        </div>
        
        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
          <a 
            href="tel:+966111234567" 
            className="flex items-center space-x-3 text-white bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>{t('hero.call')} +966-111-234567</span>
          </a>
          <div className="flex items-center space-x-3 text-white bg-green-600/80 px-6 py-4 rounded-lg w-full sm:w-auto justify-center">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{t('hero.available247')}</span>
          </div>
        </div>

        {/* Service Coverage */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4">{t('countries.availableIn')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">🇸🇦</div>
              <p className="mt-1 text-sm font-medium">{t('nav.saudi')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">🇦🇪</div>
              <p className="mt-1 text-sm font-medium">{t('nav.uae')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">🇰🇼</div>
              <p className="mt-1 text-sm font-medium">{t('nav.kuwait')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">🇪🇬</div>
              <p className="mt-1 text-sm font-medium">{t('nav.egypt')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
