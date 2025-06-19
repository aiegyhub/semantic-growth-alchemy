
import { useState } from 'react';
import { Gift, X, Star, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Offer {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  discount: string;
  serviceId: string;
  cityIds: string[];
  validUntil: string;
  isUrgent: boolean;
}

const mockOffers: Offer[] = [
  {
    id: '1',
    titleAr: 'خصم 30% على تنظيف المكيفات',
    titleEn: '30% OFF AC Cleaning Service',
    descriptionAr: 'احصل على خصم 30% على خدمة تنظيف وصيانة المكيفات',
    descriptionEn: 'Get 30% discount on AC cleaning and maintenance service',
    discount: '30%',
    serviceId: 'ac-cleaning',
    cityIds: ['riyadh', 'jeddah', 'dubai'],
    validUntil: '2024-12-31',
    isUrgent: true
  },
  {
    id: '2',
    titleAr: 'عرض خاص على السباكة الطارئة',
    titleEn: 'Special Emergency Plumbing Deal',
    descriptionAr: 'خدمة سباكة طارئة 24/7 بسعر مخفض',
    descriptionEn: '24/7 emergency plumbing service at reduced price',
    discount: '25%',
    serviceId: 'emergency-plumbing',
    cityIds: ['riyadh', 'kuwait-city'],
    validUntil: '2024-12-25',
    isUrgent: false
  },
  {
    id: '3',
    titleAr: 'تنظيف خزانات المياه بأفضل الأسعار',
    titleEn: 'Best Price Water Tank Cleaning',
    descriptionAr: 'تنظيف وتعقيم خزانات المياه بضمان الجودة',
    descriptionEn: 'Water tank cleaning and sterilization with quality guarantee',
    discount: '20%',
    serviceId: 'water-tank-cleaning',
    cityIds: ['cairo', 'alexandria'],
    validUntil: '2024-12-20',
    isUrgent: true
  }
];

export default function FloatingOffersButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <>
      {/* Floating Button - نقل إلى الشمال */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full p-4 shadow-lg animate-pulse"
          size="lg"
        >
          <Gift className="w-7 h-7" />
          <span className={`font-bold text-lg ${isArabic ? 'mr-2 ml-0' : 'ml-2'}`}>
            {isArabic ? 'العروض' : 'Offers'}
          </span>
        </Button>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar - محسن للعرض من الشمال */}
          <div className={`relative bg-white h-full w-96 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
            isArabic ? 'mr-auto translate-x-0' : 'ml-0 translate-x-0'
          }`}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isArabic ? 'العروض الحالية' : 'Current Offers'}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Offers List */}
              <div className="space-y-4">
                {mockOffers.map((offer) => (
                  <Card key={offer.id} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-gray-900">
                          {isArabic ? offer.titleAr : offer.titleEn}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {offer.discount}
                          </span>
                          {offer.isUrgent && (
                            <Clock className="w-5 h-5 text-orange-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {isArabic ? offer.descriptionAr : offer.descriptionEn}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {isArabic ? 'متاح في:' : 'Available in:'} {offer.cityIds.length} {isArabic ? 'مدن' : 'cities'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {isArabic ? 'ينتهي في:' : 'Valid until:'} {offer.validUntil}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
                        >
                          {isArabic ? 'احجز الآن' : 'Book Now'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">
                    {isArabic ? 'عروض حصرية' : 'Exclusive Offers'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {isArabic 
                    ? 'تحديث العروض كل يوم. لا تفوت الفرصة!'
                    : 'Offers updated daily. Don\'t miss out!'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
