
import { Mail, Phone, MessageCircle, Code, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCountries, getCities, getServices } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';

const LinkSection = ({ title, links }: { title: string, links: { path: string, label: string }[] }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.path}><Link to={link.path} className="text-sm text-blue-300 hover:text-white transition-colors">{link.label}</Link></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const isArabic = language === 'ar';
  
  const { data: countries = [] } = useQuery({ queryKey: ['countries'], queryFn: getCountries });
  const { data: cities = [] } = useQuery({ queryKey: ['cities'], queryFn: getCities });
  const { data: services = [] } = useQuery({ queryKey: ['services'], queryFn: getServices });

  const pathParts = location.pathname.split('/').filter(Boolean);
  const countrySlug = pathParts[0];

  const currentCountry = countries.find(c => c.slug === countrySlug);

  const staticLinks = [
    { path: "/about", label: t('footer.about') },
    { path: "/contact", label: t('footer.contact') },
    { path: "/privacy-policy", label: t('footer.privacy') },
    { path: "/terms-conditions", label: t('footer.terms') },
  ];
  
  const renderCopyrightSection = () => (
    <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-300 order-last sm:order-first">
          {isArabic ? `© 2024 مساعد. ${t('footer.allRightsReserved')}` : `© 2024 Musaaed. ${t('footer.allRightsReserved')}`}
        </p>
        <div className="flex justify-center gap-x-6">
          {staticLinks.map(link => (
            <Link key={link.path} to={link.path} className="text-sm text-blue-300 hover:text-white transition-colors">{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4 pt-2">
        <div className="flex items-center gap-x-2 bg-white/5 rounded-lg px-3 py-2">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">{isArabic ? 'تصميم وتطوير' : 'Designed & Developed by'}</span>
          <span className="text-sm font-semibold text-white">{isArabic ? 'إلبيشو' : 'Elbesho'}</span>
        </div>
        <a 
          href="https://wa.me/201027414343" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-x-2 bg-green-600/20 hover:bg-green-600/30 rounded-lg px-3 py-2 transition-colors"
          aria-label="Contact developer on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-300">{isArabic ? 'تواصل' : 'Contact'}</span>
        </a>
        <a 
          href="https://musaaed.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-x-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg px-3 py-2 transition-colors"
          aria-label="Visit website"
        >
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">musaaed.com</span>
        </a>
      </div>
    </div>
  );

  const renderCountrySpecificFooter = () => {
    if (!currentCountry) return null;

    const countryCities = cities.filter(city => city.countryId === currentCountry.id).slice(0, 5)
      .map(city => ({ path: `/${currentCountry.slug}/${city.slug}`, label: isArabic ? city.nameAr : city.name }));
      
    const popularServices = services.filter(s => s.isPopular && s.availableCityIds.some(cityId => cities.find(c => c.id === cityId)?.countryId === currentCountry.id)).slice(0, 5)
      .map(service => ({ path: `/services/${service.slug}`, label: isArabic ? service.nameAr : service.name }));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">
            {isArabic ? `خدمات محلية في ${currentCountry.nameAr}` : `Local Services in ${currentCountry.name}`}
          </h3>
          <p className="text-blue-200 text-sm mb-4">
            {isArabic ? 'مزودك الموثوق للخدمات المحلية.' : 'Your trusted local services provider.'}
          </p>
        </div>
        <LinkSection title={t('footer.majorCities')} links={countryCities} />
        <LinkSection title={t('footer.popularServices')} links={popularServices} />
        <div>
          <h4 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h4>
          <div className="space-y-3 text-blue-200">
            <div className="flex items-center gap-x-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4" /> 
              <span className="text-sm">{currentCountry.phonePrefix}-XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-x-2 justify-center sm:justify-start">
              <Mail className="w-4 h-4" /> 
              <span className="text-sm">{currentCountry.slug}@musaaed.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderGlobalFooter = () => {
    const countryLinks = countries.map(c => ({ path: `/${c.slug}`, label: isArabic ? c.nameAr : c.name }));
    const serviceLinks = services.filter(s => s.isPopular).slice(0, 5).map(s => ({ path: `/services/${s.slug}`, label: isArabic ? s.nameAr : s.name }));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">{isArabic ? 'مساعد' : 'Musaaed'}</h3>
          <p className="text-blue-200 text-sm mb-4">
            {isArabic ? 'تواصل مع أفضل مزودي الخدمات المحليين.' : 'Connect with the best local service providers.'}
          </p>
        </div>
        <LinkSection title={isArabic ? 'الدول' : 'Countries'} links={countryLinks} />
        <LinkSection title={t('footer.popularServices')} links={serviceLinks} />
        <div>
          <h4 className="text-white font-semibold mb-4">{t('footer.support')}</h4>
          <div className="space-y-3 text-blue-200">
            <div className="flex items-center gap-x-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4" /> 
              <span className="text-sm">{isArabic ? 'دعم فني 24/7' : '24/7 Technical Support'}</span>
            </div>
            <div className="flex items-center gap-x-2 justify-center sm:justify-start">
              <Mail className="w-4 h-4" /> 
              <span className="text-sm">info@musaaed.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className="bg-blue-950/90 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {currentCountry ? renderCountrySpecificFooter() : renderGlobalFooter()}
        {renderCopyrightSection()}
      </div>
    </footer>
  );
}
