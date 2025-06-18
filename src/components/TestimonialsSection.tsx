
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { getAllTestimonials } from '@/lib/testimonials';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = getAllTestimonials();

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
            {t('testimonials.subtitle')}
          </p>
          
          {/* Overall Rating Display */}
          <div className="flex items-center justify-center gap-x-3 mb-8">
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white text-lg font-semibold">
              4.9/5 • {testimonials.length}+ {t('testimonials.title')}
            </span>
          </div>
        </div>
        
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
