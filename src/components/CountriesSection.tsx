
import { Globe, ArrowRight, MapPin, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Country } from '@/types';

interface CountriesSectionProps {
  countries: Country[];
}

export default function CountriesSection({ countries }: CountriesSectionProps) {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const getCountryStats = (countrySlug: string) => {
    const stats = {
      sa: { cities: '15+', services: '25+', rating: '4.9' },
      ae: { cities: '12+', services: '22+', rating: '4.8' },
      kw: { cities: '8+', services: '20+', rating: '4.9' },
      eg: { cities: '18+', services: '24+', rating: '4.7' }
    };
    return stats[countrySlug as keyof typeof stats] || { cities: '10+', services: '20+', rating: '4.8' };
  };

  const getCountryFlag = (countryCode: string) => {
    const flags = {
      SA: '🇸🇦',
      AE: '🇦🇪', 
      KW: '🇰🇼',
      EG: '🇪🇬'
    };
    return flags[countryCode as keyof typeof flags] || '🌍';
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-blue-100 font-medium">
                {isArabic ? 'متاحة في 4 دول' : 'Available in 4 Countries'}
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isArabic ? 'تغطية شاملة عبر الشرق الأوسط' : 'Comprehensive Coverage Across Middle East'}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {isArabic ? 
              'خدمات مهنية موثوقة في أهم المدن والمناطق' : 
              'Reliable professional services in major cities and regions'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => {
            const stats = getCountryStats(country.slug);
            const flag = getCountryFlag(country.code);
            
            return (
              <Card key={country.id} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="text-4xl mb-3">{flag}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isArabic ? country.nameAr : country.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-blue-300">
                        <MapPin className="w-4 h-4" />
                        <span>{isArabic ? 'المدن' : 'Cities'}</span>
                      </div>
                      <span className="text-white font-semibold">{stats.cities}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-blue-300">
                        <Users className="w-4 h-4" />
                        <span>{isArabic ? 'الخدمات' : 'Services'}</span>
                      </div>
                      <span className="text-white font-semibold">{stats.services}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-blue-300">
                        <Star className="w-4 h-4" />
                        <span>{isArabic ? 'التقييم' : 'Rating'}</span>
                      </div>
                      <span className="text-yellow-400 font-semibold">{stats.rating}/5</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 group-hover:border-white/50"
                  >
                    <Link to={`/${country.slug}`} className="flex items-center justify-center gap-2">
                      <span>{isArabic ? 'استكشف الخدمات' : 'Explore Services'}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">
              {isArabic ? 
                'أكثر من 50,000 عميل راضي عبر المنطقة' : 
                '50,000+ satisfied customers across the region'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
