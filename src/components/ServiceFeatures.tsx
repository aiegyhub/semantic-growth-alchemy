import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServiceFeatures() {
  const { t, language } = useLanguage();

  const features = [
    t('service.features.certified'),
    t('service.features.fast'),
    t('service.features.warranty'),
    t('service.features.pricing'),
  ];

  return (
    // By setting the direction here, all children will inherit the correct layout flow.
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h3 className="text-2xl font-bold text-white mb-6 text-start">{t('service.bestChoice')}</h3>
      <div className="space-y-4">
        {features.map((feature, index) => (
          // A single, unified structure for both LTR and RTL.
          // The `dir="rtl"` on the parent will cause the browser to render the icon
          // on the right side of the text automatically.
          <div key={index} className="flex items-start gap-x-3 text-start">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            <span className="text-gray-200 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}