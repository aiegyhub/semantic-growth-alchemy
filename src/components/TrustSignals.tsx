
import { Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrustSignals() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const trustMetrics = [
    {
      icon: Users,
      value: '50,000+',
      labelKey: 'trust.customers',
      color: 'text-blue-400'
    },
    {
      icon: CheckCircle,
      value: '98%',
      labelKey: 'trust.satisfaction',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: '24/7',
      labelKey: 'trust.support',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      value: '5+',
      labelKey: 'trust.experience',
      color: 'text-yellow-400'
    }
  ];

  const certifications = [
    { name: isArabic ? 'معتمد من وزارة التجارة' : 'Ministry of Commerce Certified', verified: true },
    { name: isArabic ? 'شهادة الجودة ISO 9001' : 'ISO 9001 Quality Certificate', verified: true },
    { name: isArabic ? 'تأمين شامل للخدمات' : 'Comprehensive Service Insurance', verified: true }
  ];

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isArabic ? 'لماذا يثق بنا العملاء' : 'Why Customers Trust Us'}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {isArabic ? 
              'نفخر بتقديم أعلى معايير الجودة والمهنية في جميع خدماتنا' : 
              'We pride ourselves on delivering the highest standards of quality and professionalism'
            }
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <p className="text-blue-200">{t(metric.labelKey)}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-semibold text-white">
              {isArabic ? 'الشهادات والتراخيص' : 'Certifications & Licenses'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                <div className="flex-shrink-0">
                  {cert.verified ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                <span className="text-white text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Rating Display */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-blue-200">
              {isArabic ? 'من 10,000+ تقييم' : 'from 10,000+ reviews'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
