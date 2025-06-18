
import { useState } from 'react';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Note: This is a simplified version. For a real Mapbox implementation,
// you would need to install mapbox-gl and use the Mapbox API
export default function InteractiveMap() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const coverageAreas = [
    {
      id: 'riyadh',
      nameAr: 'الرياض',
      nameEn: 'Riyadh',
      country: 'السعودية',
      providers: 450,
      rating: 4.8,
      responseTime: 15,
      position: { x: 45, y: 35 }
    },
    {
      id: 'jeddah',
      nameAr: 'جدة',
      nameEn: 'Jeddah',
      country: 'السعودية',
      providers: 380,
      rating: 4.7,
      responseTime: 18,
      position: { x: 30, y: 45 }
    },
    {
      id: 'dubai',
      nameAr: 'دبي',
      nameEn: 'Dubai',
      country: 'الإمارات',
      providers: 520,
      rating: 4.9,
      responseTime: 12,
      position: { x: 65, y: 55 }
    },
    {
      id: 'kuwait-city',
      nameAr: 'الكويت',
      nameEn: 'Kuwait City',
      country: 'الكويت',
      providers: 290,
      rating: 4.8,
      responseTime: 14,
      position: { x: 55, y: 40 }
    },
    {
      id: 'cairo',
      nameAr: 'القاهرة',
      nameEn: 'Cairo',
      country: 'مصر',
      providers: 680,
      rating: 4.6,
      responseTime: 20,
      position: { x: 25, y: 65 }
    },
    {
      id: 'alexandria',
      nameAr: 'الإسكندرية',
      nameEn: 'Alexandria',
      country: 'مصر',
      providers: 420,
      rating: 4.5,
      responseTime: 22,
      position: { x: 20, y: 70 }
    }
  ];

  const selectedCityData = coverageAreas.find(city => city.id === selectedCity);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isArabic ? 'مناطق التغطية' : 'Coverage Areas'}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {isArabic 
              ? 'شبكة واسعة من مزودي الخدمات المعتمدين في جميع أنحاء المنطقة'
              : 'Wide network of verified service providers across the region'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-blue-800 to-purple-800 overflow-hidden">
                  {/* Simplified Map Background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      {/* Saudi Arabia outline */}
                      <path d="M50 80 L180 60 L200 120 L160 180 L80 160 Z" fill="currentColor" className="text-green-600" />
                      {/* UAE outline */}
                      <path d="L220 140 L280 135 L285 160 L225 165 Z" fill="currentColor" className="text-red-600" />
                      {/* Kuwait outline */}
                      <path d="M200 100 L230 95 L235 115 L205 120 Z" fill="currentColor" className="text-blue-600" />
                      {/* Egypt outline */}
                      <path d="M20 180 L80 175 L85 240 L25 245 Z" fill="currentColor" className="text-yellow-600" />
                    </svg>
                  </div>

                  {/* City Markers */}
                  {coverageAreas.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        selectedCity === city.id 
                          ? 'scale-125 z-10' 
                          : 'hover:scale-110 z-0'
                      }`}
                      style={{
                        left: `${city.position.x}%`,
                        top: `${city.position.y}%`
                      }}
                    >
                      <div className={`relative ${
                        selectedCity === city.id 
                          ? 'text-yellow-400' 
                          : 'text-white hover:text-yellow-300'
                      }`}>
                        <MapPin className="w-8 h-8 drop-shadow-lg" />
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {isArabic ? city.nameAr : city.nameEn}
                        </div>
                        {/* Ripple Effect */}
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                          selectedCity === city.id 
                            ? 'animate-ping bg-yellow-400/30' 
                            : 'bg-white/20'
                        } rounded-full w-6 h-6 -z-10`}></div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* City Information */}
          <div className="space-y-6">
            {selectedCityData ? (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">
                      {isArabic ? selectedCityData.nameAr : selectedCityData.nameEn}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">{selectedCityData.providers}</div>
                      <div className="text-sm text-blue-200">{isArabic ? 'مزود خدمة' : 'Providers'}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-2xl font-bold text-white">{selectedCityData.rating}</span>
                      </div>
                      <div className="text-sm text-blue-200">{isArabic ? 'تقييم' : 'Rating'}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-2xl font-bold text-white">{selectedCityData.responseTime}</span>
                      </div>
                      <div className="text-sm text-blue-200">{isArabic ? 'دقيقة استجابة' : 'Min Response'}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="tel:+966111234567" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      {isArabic ? 'احجز خدمة في هذه المدينة' : 'Book Service in This City'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {isArabic ? 'اختر مدينة' : 'Select a City'}
                  </h3>
                  <p className="text-blue-200">
                    {isArabic 
                      ? 'انقر على أي مدينة في الخريطة لمعرفة تفاصيل الخدمة'
                      : 'Click on any city on the map to see service details'
                    }
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Coverage Summary */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  {isArabic ? 'ملخص التغطية' : 'Coverage Summary'}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {coverageAreas.reduce((total, city) => total + city.providers, 0)}+
                    </div>
                    <div className="text-sm text-blue-200">
                      {isArabic ? 'إجمالي مزودي الخدمة' : 'Total Providers'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{coverageAreas.length}</div>
                    <div className="text-sm text-blue-200">
                      {isArabic ? 'مدن مغطاة' : 'Cities Covered'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
