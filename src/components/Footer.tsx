
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const quickLinks = [
    { nameEn: 'About Us', nameAr: 'من نحن', href: '/about' },
    { nameEn: 'Services', nameAr: 'الخدمات', href: '/services' },
    { nameEn: 'Contact', nameAr: 'اتصل بنا', href: '/contact' },
    { nameEn: 'Privacy Policy', nameAr: 'سياسة الخصوصية', href: '/privacy-policy' },
  ];

  const countries = [
    { nameEn: 'Saudi Arabia', nameAr: 'السعودية', href: '/sa' },
    { nameEn: 'UAE', nameAr: 'الإمارات', href: '/ae' },
    { nameEn: 'Kuwait', nameAr: 'الكويت', href: '/kw' },
    { nameEn: 'Egypt', nameAr: 'مصر', href: '/eg' },
  ];

  return (
    <footer className="bg-blue-950/80 backdrop-blur-sm border-t border-blue-800/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {isArabic ? 'مساعد' : 'Musaaed'}
            </h3>
            <p className="text-blue-200 mb-4 leading-relaxed">
              {isArabic 
                ? 'منصة رائدة لربط العملاء بمقدمي الخدمات المنزلية والتجارية المعتمدين في جميع أنحاء الشرق الأوسط.'
                : 'Leading platform connecting customers with certified home and business service providers across the Middle East.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="tel:+966111234567" className="text-green-400 hover:text-green-300">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://wa.me/966111234567" className="text-green-400 hover:text-green-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:info@musaaed.com" className="text-blue-400 hover:text-blue-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {isArabic ? link.nameAr : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {isArabic ? 'الدول المتاحة' : 'Available Countries'}
            </h4>
            <ul className="space-y-2">
              {countries.map((country, index) => (
                <li key={index}>
                  <Link 
                    to={country.href} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    {isArabic ? country.nameAr : country.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {isArabic ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  {isArabic 
                    ? 'الرياض، المملكة العربية السعودية'
                    : 'Riyadh, Saudi Arabia'
                  }
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-blue-200 text-sm">+966 11 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 text-sm">info@musaaed.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            {isArabic 
              ? `© ${new Date().getFullYear()} مساعد. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Musaaed. All rights reserved.`
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
