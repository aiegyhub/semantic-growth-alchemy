
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

interface CountryServiceTabsProps {
  serviceName: string;
}

export default function CountryServiceTabs({ serviceName }: CountryServiceTabsProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [activeCountry, setActiveCountry] = useState('sa');

  const countries = {
    sa: {
      name: isArabic ? 'السعودية' : 'Saudi Arabia',
      currency: isArabic ? 'ريال سعودي' : 'SAR',
      cities: [
        { name: isArabic ? 'الرياض' : 'Riyadh', areas: ['الملز', 'العليا', 'الدرعية', 'الخرج'] },
        { name: isArabic ? 'جدة' : 'Jeddah', areas: ['الروضة', 'الكورنيش', 'البحر الأحمر', 'الحمراء'] },
        { name: isArabic ? 'الدمام' : 'Dammam', areas: ['الخبر', 'الظهران', 'القطيف', 'الجبيل'] },
        { name: isArabic ? 'مكة المكرمة' : 'Makkah', areas: ['العزيزية', 'أجياد', 'الزاهر', 'الرصيفة'] }
      ]
    },
    ae: {
      name: isArabic ? 'الإمارات' : 'UAE',
      currency: isArabic ? 'درهم إماراتي' : 'AED',
      cities: [
        { name: isArabic ? 'دبي' : 'Dubai', areas: ['دبي مارينا', 'داون تاون', 'ديرة', 'جميرا'] },
        { name: isArabic ? 'أبوظبي' : 'Abu Dhabi', areas: ['الكورنيش', 'المصفح', 'الخالدية', 'النهدة'] },
        { name: isArabic ? 'الشارقة' : 'Sharjah', areas: ['المجاز', 'الصحراء', 'الخان', 'الغوير'] },
        { name: isArabic ? 'عجمان' : 'Ajman', areas: ['الجرف', 'الروضة', 'النعيمية', 'البستان'] }
      ]
    },
    kw: {
      name: isArabic ? 'الكويت' : 'Kuwait',
      currency: isArabic ? 'دينار كويتي' : 'KWD',
      cities: [
        { name: isArabic ? 'الكويت' : 'Kuwait City', areas: ['الصالحية', 'المرقاب', 'الشرق', 'دسمان'] },
        { name: isArabic ? 'حولي' : 'Hawalli', areas: ['السالمية', 'حولي', 'الجابريه', 'بيان'] },
        { name: isArabic ? 'الفروانية' : 'Farwaniya', areas: ['الفردوس', 'الرابية', 'الأندلس', 'خيطان'] },
        { name: isArabic ? 'الأحمدي' : 'Ahmadi', areas: ['الأحمدي', 'المهبولة', 'الفنطاس', 'أبو حليفة'] }
      ]
    },
    eg: {
      name: isArabic ? 'مصر' : 'Egypt',
      currency: isArabic ? 'جنيه مصري' : 'EGP',
      cities: [
        { name: isArabic ? 'القاهرة' : 'Cairo', areas: ['مصر الجديدة', 'المعادي', 'الزمالك', 'مدينة نصر'] },
        { name: isArabic ? 'الإسكندرية' : 'Alexandria', areas: ['المنتزه', 'سيدي بشر', 'الرمل', 'العامرية'] },
        { name: isArabic ? 'الجيزة' : 'Giza', areas: ['الدقي', 'المهندسين', 'الهرم', 'أكتوبر'] },
        { name: isArabic ? 'الغردقة' : 'Hurghada', areas: ['السقالة', 'الدهار', 'المعمورة', 'الجونة'] }
      ]
    }
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {isArabic ? `${serviceName} متاح في جميع أنحاء المنطقة` : `${serviceName} Available Across the Region`}
      </h3>
      
      {/* Country Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
          {Object.entries(countries).map(([code, country]) => (
            <button
              key={code}
              onClick={() => setActiveCountry(code)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCountry === code
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>

      {/* Cities and Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries[activeCountry as keyof typeof countries].cities.map((city, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-white">{city.name}</h4>
              </div>
              <ul className="space-y-1 mb-4">
                {city.areas.map((area, areaIndex) => (
                  <li key={areaIndex} className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer">
                    • {area}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{countries[activeCountry as keyof typeof countries].currency}</span>
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{isArabic ? 'متاح' : 'Available'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
