
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, Percent, Gift, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Offer {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  discount: number;
  validUntil: string;
  serviceType: string;
  isPopular?: boolean;
  color: string;
}

const offers: Offer[] = [
  {
    id: '1',
    titleAr: 'خصم 30% على تنظيف المكيفات',
    titleEn: '30% Off AC Cleaning',
    descriptionAr: 'احصل على خصم 30% على خدمات تنظيف وصيانة المكيفات المنزلية والتجارية',
    descriptionEn: 'Get 30% discount on residential and commercial AC cleaning and maintenance services',
    discount: 30,
    validUntil: '2024-07-31',
    serviceType: 'تكييف',
    isPopular: true,
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: '2',
    titleAr: 'عرض خاص: صيانة سباكة شاملة',
    titleEn: 'Special: Complete Plumbing Service',
    descriptionAr: 'خدمة سباكة شاملة بسعر ثابت تشمل التشخيص والإصلاح والضمان',
    descriptionEn: 'Complete plumbing service at fixed price including diagnosis, repair and warranty',
    discount: 25,
    validUntil: '2024-07-25',
    serviceType: 'سباكة',
    color: 'from-green-600 to-green-800'
  },
  {
    id: '3',
    titleAr: 'صيانة كهرباء منزلية بخصم 20%',
    titleEn: '20% Off Home Electrical Services',
    descriptionAr: 'جميع أعمال الكهرباء المنزلية بخصم 20% مع ضمان على العمل',
    descriptionEn: 'All residential electrical work with 20% discount and work guarantee',
    discount: 20,
    validUntil: '2024-08-15',
    serviceType: 'كهرباء',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: '4',
    titleAr: 'تنظيف شامل للمنزل - باقة مميزة',
    titleEn: 'Complete Home Cleaning - Premium Package',
    descriptionAr: 'باقة تنظيف شاملة تشمل جميع الغرف والحمامات والمطبخ بسعر مخفض',
    descriptionEn: 'Complete cleaning package including all rooms, bathrooms and kitchen at reduced price',
    discount: 35,
    validUntil: '2024-08-01',
    serviceType: 'تنظيف',
    isPopular: true,
    color: 'from-purple-600 to-purple-800'
  }
];

export default function OffersSection() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentOffer = offers[currentOfferIndex];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Gift className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">
              {isArabic ? 'عروض محدودة الوقت' : 'Limited Time Offers'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isArabic ? 'عروض خاصة لا تُفوت' : "Don't Miss Our Special Offers"}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {isArabic 
              ? 'وفر أكثر مع عروضنا الحصرية على أفضل الخدمات المنزلية'
              : 'Save more with our exclusive deals on top home services'
            }
          </p>
        </div>

        {/* Main Rotating Offer */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className={`bg-gradient-to-r ${currentOffer.color} border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105`}>
            <CardContent className="p-8 text-white relative">
              {currentOffer.isPopular && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-black font-bold">
                  {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                </Badge>
              )}
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Percent className="w-6 h-6 text-yellow-400" />
                    <span className="text-3xl font-bold text-yellow-400">
                      {currentOffer.discount}% {isArabic ? 'خصم' : 'OFF'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {isArabic ? currentOffer.titleAr : currentOffer.titleEn}
                  </h3>
                  
                  <p className="text-lg mb-6 opacity-90">
                    {isArabic ? currentOffer.descriptionAr : currentOffer.descriptionEn}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm">
                        {isArabic ? 'ينتهي في:' : 'Expires:'} {new Date(currentOffer.validUntil).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}
                      </span>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-white">
                      {currentOffer.serviceType}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-4">
                      {isArabic ? 'احجز الآن واستفد من العرض' : 'Book Now & Save'}
                    </h4>
                    <Button 
                      size="lg" 
                      className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 w-full"
                      asChild
                    >
                      <a href="tel:+966111234567" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        {isArabic ? 'اتصل الآن' : 'Call Now'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offer Indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentOfferIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentOfferIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* All Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <Card 
              key={offer.id} 
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                index === currentOfferIndex ? 'ring-2 ring-white/50 scale-105' : ''
              }`}
              onClick={() => setCurrentOfferIndex(index)}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Percent className="w-5 h-5 text-yellow-400" />
                  <span className="text-xl font-bold text-yellow-400">
                    {offer.discount}%
                  </span>
                </div>
                
                <h4 className="text-white font-bold mb-2 flex-grow">
                  {isArabic ? offer.titleAr : offer.titleEn}
                </h4>
                
                <Badge variant="outline" className="border-white/30 text-white mb-3">
                  {offer.serviceType}
                </Badge>
                
                <div className="flex items-center justify-center gap-1 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(offer.validUntil).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
