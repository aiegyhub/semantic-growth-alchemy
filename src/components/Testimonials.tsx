
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

// Define the shape of a single testimonial for type safety and clarity
interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceId: string;
  city: string;
  date: string;
}

// The component now only needs the testimonials array to render.
interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // If no testimonials are provided, the component renders nothing.
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
