
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCities, getCountries, getServices } from '@/lib/cms';
import { City, Service } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContactButtons() {
  const location = useLocation();
  const { language } = useLanguage();
  const [contactInfo, setContactInfo] = useState<{ phone: string; whatsapp: string; serviceName: string; } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    async function loadContactInfo() {
      try {
        // Only show on service pages (3 parts: country/city/service)
        if (pathParts.length !== 3) {
          setContactInfo(null);
          setIsVisible(false);
          return;
        }

        const [cities, countries, services] = await Promise.all([getCities(), getCountries(), getServices()]);
        
        const countrySlug = pathParts[0];
        const citySlug = pathParts[1];
        const serviceSlug = pathParts[2];
        
        const country = countries.find(c => c.slug === countrySlug);
        const city = cities.find(c => c.slug === citySlug && country && c.countryId === country.id);
        const service = services.find(s => s.slug === serviceSlug);
        
        if (country && city && service) {
          // Get service-specific contact info
          const serviceContactInfo = getServiceContactInfo(service, city);
          
          setContactInfo({
            phone: serviceContactInfo.phone,
            whatsapp: serviceContactInfo.whatsapp,
            serviceName: language === 'ar' ? service.nameAr : service.name
          });
          setIsVisible(true);
        } else {
          setContactInfo(null);
          setIsVisible(false);
        }
      } catch (error) {
        console.error('Error loading contact info:', error);
        setContactInfo(null);
        setIsVisible(false);
      }
    }

    loadContactInfo();
  }, [location.pathname, language]);

  // Function to get service-specific contact info
  const getServiceContactInfo = (service: Service, city: City) => {
    // Different phone numbers for different service categories
    const serviceCategories: { [key: string]: number } = {
      'cleaning': 0,
      'ac-services': 1,
      'plumbing': 2,
      'electrical': 3,
      'pest-control': 4,
      'carpentry': 5,
      'painting': 6,
      'water-tank': 7
    };

    const categoryIndex = serviceCategories[service.categoryId] || 0;
    const phoneIndex = Math.min(categoryIndex, city.phoneNumbers.length - 1);
    const whatsappIndex = Math.min(categoryIndex, city.whatsappNumbers.length - 1);

    return {
      phone: city.phoneNumbers[phoneIndex] || city.phoneNumbers[0],
      whatsapp: city.whatsappNumbers[whatsappIndex] || city.whatsappNumbers[0]
    };
  };

  if (!contactInfo || !isVisible) return null;

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };
  
  const handleWhatsAppClick = () => {
    const cleanNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };
  
  const positionClass = language === 'ar' ? 'left-6' : 'right-6';

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50 flex flex-col gap-3`}>
      <Button
        onClick={handlePhoneClick}
        className="w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110 group"
        size="icon"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className={`absolute top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${language === 'ar' ? 'right-14' : 'left-14'}`}>
          {contactInfo.serviceName}: {contactInfo.phone}
        </span>
      </Button>

      <Button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 rounded-2xl bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 group"
        size="icon"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className={`absolute top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${language === 'ar' ? 'right-14' : 'left-14'}`}>
          {contactInfo.serviceName} - WhatsApp
        </span>
      </Button>
    </div>
  );
}
