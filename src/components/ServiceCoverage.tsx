import { MapPin } from 'lucide-react';
import { coverageData } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';

interface ServiceCoverageProps {
  cityId: string;
}

export default function ServiceCoverage({ cityId }: ServiceCoverageProps) {
  const { language, t } = useLanguage();
  const cityCoverage = useMemo(() => coverageData[cityId] || [], [cityId]);

  if (cityCoverage.length === 0) {
    return <p className={`text-blue-200 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t('coverage.all_areas')}</p>;
  }

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h3 className="text-xl font-bold text-white mb-4 text-start">{t('coverage.title')}</h3>
      {/* FIX: Replaced CSS Grid with a column-based Flexbox layout.
        - 'flex-col' sets the main direction to vertical.
        - 'flex-wrap' allows items to wrap into new columns.
        - 'h-48' (or similar) provides a fixed height, forcing the wrap to occur.
        - This combination is more robust and prevents content from overflowing its container.
      */}
      <div className="flex flex-col flex-wrap h-48 gap-x-4 gap-y-2">
        {cityCoverage.map(area => (
          <div key={area} className="flex items-center gap-x-2 text-start">
            <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
            <span className="text-white text-sm font-medium">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}