
import { Globe, Users, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Country } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface CountriesSectionProps {
  countries: Country[];
}

export default function CountriesSection({ countries }: CountriesSectionProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const countryStats = {
    sa: { providers: '2500+', rating: '4.8', response: '15' },
    ae: { providers: '1800+', rating: '4.7', response: '20' },
    kw: { providers: '1200+', rating: '4.9', response: '12' },
    eg: { providers: '3000+', rating: '4.6', response: '18' }
  };

  const getCountryEmoji = (slug: string) => {
    const emojiMap: Record<string, string> = {
      sa: '🇸🇦',
      ae: '🇦🇪', 
      kw: '🇰🇼',
      eg: '🇪🇬'
    };
    return emojiMap[slug] || '🌍';
  };

  return (
    <section className="py-16 sm:py-20 bg-white/5" id="countries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isArabic ? 'متوفر في جميع أنحاء المنطقة' : 'Available Across the Region'}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {isArabic 
              ? 'نغطي أكبر المدن في الشرق الأوسط بشبكة واسعة من مزودي الخدمات المعتمدين'
              : 'Covering major cities across the Middle East with a wide network of verified service providers'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => {
            const stats = countryStats[country.slug as keyof typeof countryStats];
            return (
              <Link 
                key={country.id} 
                to={`/${country.slug}`}
                className="group block"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                      {getCountryEmoji(country.slug)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isArabic ? country.nameAr : country.name}
                    </h3>
                    
                    {stats && (
                      <div className="space-y-3 mt-4">
                        <div className="flex items-center justify-center gap-2 text-blue-200">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{stats.providers} {isArabic ? 'مزود خدمة' : 'Providers'}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-blue-200">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{stats.rating}/5 {isArabic ? 'تقييم' : 'Rating'}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-blue-200">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{stats.response} {isArabic ? 'دقيقة استجابة' : 'min response'}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">
              {isArabic ? 'خدماتنا متاحة 24/7 في جميع المناطق' : 'Our services are available 24/7 in all regions'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
