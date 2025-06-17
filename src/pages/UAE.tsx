import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCities, getCountries } from '@/lib/cms';
import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UAE() {
  const { language } = useLanguage();

  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({ queryKey: ['countries'], queryFn: getCountries });
  const { data: cities = [], isLoading: isCitiesLoading } = useQuery({ queryKey: ['cities'], queryFn: getCities });

  const uaeCountry = useMemo(() => 
    countries.find(c => c.slug === 'ae'), 
  [countries]);

  const uaeCities = useMemo(() => 
    cities.filter(c => c.countryId === uaeCountry?.id), 
  [cities, uaeCountry]);

  const isLoading = isCountriesLoading || isCitiesLoading;

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-10 rounded" viewBox="0 0 24 16" fill="none">
                <rect width="24" height="16" fill="#FF0000"/>
                <rect x="6" y="0" width="18" height="5.33" fill="#00FF00"/>
                <rect x="6" y="5.33" width="18" height="5.34" fill="white"/>
                <rect x="6" y="10.67" width="18" height="5.33" fill="#000000"/>
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Local Services in UAE
              <span className="block text-blue-300 text-3xl mt-2">خدمات محلية في الإمارات</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Premium services across all Emirates. Experienced professionals 
              serving Dubai, Abu Dhabi, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white bg-green-600/50 px-6 py-3 rounded-lg">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+971-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-white bg-blue-600/50 px-6 py-3 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Emirates We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {uaeCities.map((city) => (
                <Card key={city.id} className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-white mb-1">{language === 'ar' ? city.nameAr : city.name}</h3>
                    <p className="text-blue-200 mb-3">{language === 'ar' ? city.regionAr : city.region}</p>
                    <Link to={`/ae/${city.slug}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Services
                      </Button>
                    </Link>
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