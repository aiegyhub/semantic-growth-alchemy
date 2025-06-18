
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Testimonial } from '@/lib/testimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          آراء العملاء
        </h2>
        
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
