
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { City } from '@/types';

interface ServiceContactButtonsProps {
  city: City;
}

export default function ServiceContactButtons({ city }: ServiceContactButtonsProps) {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
        <a href={`tel:${city.phoneNumbers[0]}`} className="flex items-center justify-center gap-x-3">
          <Phone className="w-6 h-6" />
          <span className="font-semibold">{t('button.contact')}</span>
        </a>
      </Button>
      <Button asChild size="lg" variant="white" className="shadow-lg">
        <a href={`https://wa.me/${city.whatsappNumbers[0].replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-3">
          <MessageCircle className="w-6 h-6 text-green-600" />
          <span className="font-semibold text-gray-900">{t('whatsapp')}</span>
        </a>
      </Button>
    </div>
  );
}
