
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Phone, MapPin, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCities, getCountries } from '@/lib/cms';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SaudiArabia() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({ queryKey: ['countries'], queryFn: getCountries });
  const { data: cities = [], isLoading: isCitiesLoading } = useQuery({ queryKey: ['cities'], queryFn: getCities });

  const saudiArabia = useMemo(() => 
    countries.find(c => c.slug === 'sa'), 
  [countries]);

  const saudiCities = useMemo(() => 
    cities.filter(c => c.countryId === saudiArabia?.id), 
  [cities, saudiArabia]);

  const filteredCities = useMemo(() => {
    if (!searchTerm) return saudiCities;
    
    return saudiCities.filter(city => 
      (language === 'ar' ? city.nameAr : city.name)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (language === 'ar' ? city.regionAr : city.region)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [saudiCities, searchTerm, language]);

  const isLoading = isCountriesLoading || isCitiesLoading;

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-white">جاري التحميل...</div>
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
                <rect width="24" height="16" fill="#006C35"/>
                <text x="12" y="10" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">KSA</text>
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              خدمات محلية في المملكة العربية السعودية
              <span className="block text-blue-300 text-3xl mt-2">Local Services in Saudi Arabia</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              اكتشف أفضل مقدمي الخدمات المحليين في جميع مدن المملكة العربية السعودية. 
              خدمات طوارئ متاحة على مدار الساعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white bg-green-600/50 px-6 py-3 rounded-lg">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+966-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-white bg-blue-600/50 px-6 py-3 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>خدمة طوارئ 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Cities Section */}
        <section className="py-16 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                المدن التي نخدمها
              </h2>
              <p className="text-blue-200 mb-8">
                نقدم خدماتنا في {saudiCities.length} مدينة عبر المملكة
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث عن مدينة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCities.map((city) => (
                <Card key={city.id} className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-3 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-semibold text-white mb-1">{language === 'ar' ? city.nameAr : city.name}</h3>
                    <p className="text-blue-200 mb-3">{language === 'ar' ? city.regionAr : city.region}</p>
                    <div className="text-sm text-blue-300 mb-4">
                      {city.phoneNumbers.length} رقم هاتف متاح
                    </div>
                    <Link to={`/sa/${city.slug}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                        عرض الخدمات
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCities.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-blue-200 text-lg">
                  لم يتم العثور على مدن تطابق البحث "{searchTerm}"
                </div>
                <Button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  عرض جميع المدن
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-300 mb-2">{saudiCities.length}+</div>
                <div className="text-white text-lg">مدينة نخدمها</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white text-lg">خدمة طوارئ</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5★</div>
                <div className="text-white text-lg">تقييم العملاء</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
