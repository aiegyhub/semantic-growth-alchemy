
import { Phone, Search, CheckCircle, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function EnhancedHero() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const trustIndicators = [
    { icon: CheckCircle, text: isArabic ? 'محترفون معتمدون' : 'Verified Professionals' },
    { icon: Clock, text: isArabic ? 'خدمة سريعة' : 'Fast Service' },
    { icon: Star, text: isArabic ? 'تقييم ممتاز' : 'Excellent Rating' }
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">
            {isArabic ? '4.9/5 من آلاف العملاء' : '4.9/5 from thousands of customers'}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">{t('hero.title')}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {t('hero.subtitle')}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2 text-blue-200">
              <indicator.icon className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl"
          >
            <Link to="/services" className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              {t('hero.cta.primary')}
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
          >
            <a href="tel:+966111234567" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {t('hero.cta.secondary')}
            </a>
          </Button>
        </div>

        {/* Bottom section with availability */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold mb-1">{t('hero.available247')}</h3>
              <p className="text-blue-200 text-sm">{t('hero.support')}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">
                {isArabic ? 'متصل الآن' : 'Online Now'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
