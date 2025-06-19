
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  // Country-specific popular services that rotate
  const [currentCountry, setCurrentCountry] = useState('sa');
  const [popularServices, setPopularServices] = useState<string[]>([]);

  const countryServices = {
    sa: ['تنظيف المكيفات', 'سباكة طارئة', 'كهرباء منزلية', 'تنظيف خزانات'],
    ae: ['صيانة المسابح', 'تنظيف المكيفات', 'خدمات التنظيف', 'كهرباء منزلية'],
    kw: ['سباكة طارئة', 'تنظيف شقق', 'صيانة عامة', 'تنظيف خزانات'],
    eg: ['سباكة', 'كهرباء', 'تنظيف منازل', 'صيانة أجهزة']
  };

  useEffect(() => {
    // Rotate country services every session/refresh
    const countries = ['sa', 'ae', 'kw', 'eg'];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    setCurrentCountry(randomCountry);
    setPopularServices(countryServices[randomCountry as keyof typeof countryServices]);
  }, []);

  const currencies = {
    sa: 'ريال سعودي',
    ae: 'درهم إماراتي', 
    kw: 'دينار كويتي',
    eg: 'جنيه مصري'
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">مساعد الخدمات</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {isArabic 
                ? 'منصة رائدة لربط العملاء بمقدمي الخدمات المنزلية المعتمدين في الشرق الأوسط'
                : 'Leading platform connecting customers with verified home service providers across the Middle East'
              }
            </p>
            <div className="text-sm text-gray-400">
              <p>{isArabic ? 'العملة المستخدمة:' : 'Currency:'} {currencies[currentCountry as keyof typeof currencies]}</p>
            </div>
          </div>

          {/* Popular Services (Country-specific) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {isArabic ? 'الخدمات الشائعة' : 'Popular Services'}
            </h3>
            <ul className="space-y-2">
              {popularServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {isArabic ? 'الدعم' : 'Support'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {isArabic ? 'من نحن' : 'About Us'}
                </Link>
              </li>
              <li className="text-gray-300 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {isArabic ? 'خدمة 24/7' : '24/7 Service'}
              </li>
            </ul>

            {/* Social Media Icons - Moved here under support */}
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3 text-gray-200">
                {isArabic ? 'تابعنا على' : 'Follow Us'}
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {isArabic ? 'روابط مهمة' : 'Important Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-conditions"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/sitemap"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {isArabic ? 'خريطة الموقع' : 'Sitemap'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Improved Design */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© 2024 مساعد الخدمات. جميع الحقوق محفوظة.</p>
            </div>
            <div className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
              <span className="flex items-center gap-1">
                ⚡ {isArabic ? 'تطوير وبرمجة:' : 'Developed by:'} 
                <span className="text-blue-400 font-medium">musaaed</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
