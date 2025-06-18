
import { Phone, Clock, MapPin, Shield, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EnhancedHero() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-purple-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="container mx-auto text-center relative">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('hero.title')}
            <span className="block text-blue-300 mt-2">{t('hero.subtitle')}</span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
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
              <span className="text-sm font-medium">4.9/5</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">50+ {t('about.stats.citiesCovered')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">{t('hero.available247')}</span>
            </div>
          </div>
          
          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              size="lg"
            >
              <Clock className="w-5 h-5 mr-2" />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Service Coverage with Flags */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-6">{t('countries.availableIn')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🇸🇦</div>
                <p className="text-white font-medium">{t('nav.saudi')}</p>
                <p className="text-blue-200 text-sm">25+ مدينة</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🇦🇪</div>
                <p className="text-white font-medium">{t('nav.uae')}</p>
                <p className="text-blue-200 text-sm">15+ مدينة</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🇰🇼</div>
                <p className="text-white font-medium">{t('nav.kuwait')}</p>
                <p className="text-blue-200 text-sm">8+ مدينة</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🇪🇬</div>
                <p className="text-white font-medium">{t('nav.egypt')}</p>
                <p className="text-blue-200 text-sm">12+ مدينة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
