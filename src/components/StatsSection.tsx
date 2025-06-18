
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Award, MapPin, Clock } from 'lucide-react';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: t('about.stats.happyCustomers'),
      color: 'text-blue-400'
    },
    {
      icon: Award,
      number: '1,000+',
      label: t('about.stats.verifiedProfessionals'),
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      number: '50+',
      label: t('about.stats.citiesCovered'),
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      number: '24/7',
      label: t('hero.support'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-16 bg-blue-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.stats.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('about.stats.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
