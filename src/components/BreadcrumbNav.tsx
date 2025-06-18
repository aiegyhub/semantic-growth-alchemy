
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
      <Link 
        to="/" 
        className="flex items-center hover:text-white transition-colors"
        aria-label={t('nav.home')}
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className={`w-4 h-4 mx-2 ${isArabic ? 'rotate-180' : ''}`} />
          {item.href ? (
            <Link 
              to={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
