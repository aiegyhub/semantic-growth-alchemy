
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, TrendingUp, Zap } from 'lucide-react';

export default function ContentOptimizationSection() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const features = [
    {
      icon: Search,
      titleKey: 'features.professional.title',
      descriptionKey: 'features.professional.description',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      titleKey: 'features.quick.title', 
      descriptionKey: 'features.quick.description',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      titleKey: 'features.reliable.title',
      descriptionKey: 'features.reliable.description',
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      titleKey: 'features.affordable.title',
      descriptionKey: 'features.affordable.description',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('features.platform.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('coverage.description')}
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isArabic ? 'text-right' : 'text-left'}`}>
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
