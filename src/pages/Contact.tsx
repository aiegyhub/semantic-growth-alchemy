
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const { language, t } = useLanguage();

  const seoData = {
    title: t('contact.page.title'),
    description: t('contact.page.description'),
    keywords: [t('contact.title'), 'LocalServices', language === 'ar' ? 'تواصل معنا' : 'contact us', language === 'ar' ? 'دعم العملاء' : 'customer support'],
    canonical: '/contact',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": t('contact.page.title'),
      "description": t('contact.page.description')
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.phoneSupport'),
      description: t('contact.instantResponse'),
      action: language === 'ar' ? 'اتصل الآن' : 'Call Now',
      link: 'tel:+966111234567',
      primary: true
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      description: language === 'ar' ? 'دردشة سريعة ومباشرة' : 'Quick and direct chat',
      action: language === 'ar' ? 'أرسل رسالة' : 'Send Message',
      link: 'https://wa.me/966111234567',
      primary: false
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      description: language === 'ar' ? 'للاستفسارات التفصيلية' : 'For detailed inquiries',
      action: language === 'ar' ? 'أرسل إيميل' : 'Send Email',
      link: 'mailto:info@localservices.com',
      primary: false
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: language === 'ar' ? 'دعم 24/7' : '24/7 Support',
      description: language === 'ar' ? 'متاحون على مدار الساعة' : 'Available around the clock'
    },
    {
      icon: Headphones,
      title: t('contact.professionalSupport'),
      description: language === 'ar' ? 'فريق متخصص ومدرب' : 'Specialized and trained team'
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'تغطية شاملة' : 'Complete Coverage',
      description: language === 'ar' ? 'خدمة في جميع المدن الرئيسية' : 'Service in all major cities'
    }
  ];

  const officeLocations = [
    {
      country: language === 'ar' ? 'السعودية' : 'Saudi Arabia',
      city: language === 'ar' ? 'الرياض' : 'Riyadh',
      address: language === 'ar' ? 'شارع الملك فهد، حي العليا' : 'King Fahd Road, Al Olaya District',
      phone: '+966 11 123 4567'
    },
    {
      country: language === 'ar' ? 'الإمارات' : 'UAE',
      city: language === 'ar' ? 'دبي' : 'Dubai',
      address: language === 'ar' ? 'شارع الشيخ زايد، دبي مارينا' : 'Sheikh Zayed Road, Dubai Marina',
      phone: '+971 4 123 4567'
    }
  ];

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.page.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t('contact.page.description')}
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {language === 'ar' ? 'طرق التواصل' : 'Contact Methods'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`bg-white/10 backdrop-blur-sm border-white/20 ${method.primary ? 'ring-2 ring-blue-400' : ''}`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <method.icon className={`w-12 h-12 ${method.primary ? 'text-blue-300' : 'text-gray-300'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-blue-200 mb-4">
                      {method.description}
                    </p>
                    <Button 
                      asChild 
                      className={method.primary ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}
                    >
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {language === 'ar' ? 'مميزات الدعم' : 'Support Features'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-16 h-16 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {language === 'ar' ? 'مواقع المكاتب' : 'Office Locations'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {officeLocations.map((office, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {office.country} - {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-300 mt-1" />
                      <span className="text-blue-100">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-300" />
                      <a href={`tel:${office.phone}`} className="text-blue-100 hover:text-white">
                        {office.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-red-900/20 border-red-400 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Phone className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === 'ar' ? 'خط الطوارئ' : 'Emergency Hotline'}
                </h3>
                <p className="text-red-200 mb-6">
                  {language === 'ar' ? 'للحالات الطارئة في السباكة والكهرباء والتكييف' : 'For urgent plumbing, electrical, and HVAC emergencies'}
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <a href="tel:+966505123456" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +966 505 123 456
                  </a>
                </Button>
                <p className="text-red-300 mt-4 text-sm">
                  {language === 'ar' ? 'متاح 24/7' : 'Available 24/7'}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
