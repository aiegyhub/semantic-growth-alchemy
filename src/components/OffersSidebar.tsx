
import { useState } from 'react';
import { X, Gift, Percent, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OffersSidebar() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);

  const offers = [
    {
      id: '1',
      titleAr: 'خصم 30% على تنظيف المكيفات',
      titleEn: '30% Off AC Cleaning',
      discount: 30,
      validUntil: '2024-07-31',
      serviceType: 'تكييف',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: '2',
      titleAr: 'عرض خاص: صيانة سباكة شاملة',
      titleEn: 'Special: Complete Plumbing Service',
      discount: 25,
      validUntil: '2024-07-25',
      serviceType: 'سباكة',
      color: 'from-green-600 to-green-800'
    },
    {
      id: '3',
      titleAr: 'صيانة كهرباء منزلية بخصم 20%',
      titleEn: '20% Off Home Electrical Services',
      discount: 20,
      validUntil: '2024-08-15',
      serviceType: 'كهرباء',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <>
      {/* Floating Offers Button */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg rounded-full p-3 animate-pulse"
          size="icon"
        >
          <Gift className="w-6 h-6" />
        </Button>
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          {offers.length}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)}>
          <div 
            className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    {isArabic ? 'العروض الخاصة' : 'Special Offers'}
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-blue-100">
                {isArabic ? 'عروض محدودة الوقت - لا تفوتها!' : 'Limited time offers - Don\'t miss out!'}
              </p>
            </div>

            {/* Offers List */}
            <div className="p-6 space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto">
              {offers.map((offer) => (
                <Card key={offer.id} className={`bg-gradient-to-r ${offer.color} text-white border-0 overflow-hidden`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Percent className="w-5 h-5 text-yellow-300" />
                        <span className="text-2xl font-bold text-yellow-300">
                          {offer.discount}%
                        </span>
                      </div>
                      <Badge className="bg-white/20 text-white border-0">
                        {offer.serviceType}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold mb-2 text-sm">
                      {isArabic ? offer.titleAr : offer.titleEn}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs opacity-90 mb-3">
                      <Clock className="w-3 h-3" />
                      <span>
                        {isArabic ? 'ينتهي:' : 'Expires:'} {new Date(offer.validUntil).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}
                      </span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold"
                      asChild
                    >
                      <a href="tel:+966111234567" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        {isArabic ? 'احجز الآن' : 'Book Now'}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  {isArabic ? 'تحتاج مساعدة؟ اتصل بنا الآن!' : 'Need help? Call us now!'}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <a href="tel:+966111234567" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-bold">+966-111-234567</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
