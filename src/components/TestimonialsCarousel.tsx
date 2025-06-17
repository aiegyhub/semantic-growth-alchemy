
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/testimonials';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsCarousel({ testimonials, className = "" }: TestimonialsCarouselProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-yellow-400 ml-2 font-semibold">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  
                  <p className="text-blue-100 mb-4 text-sm leading-relaxed flex-grow">
                    {testimonial.comment}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm mt-auto">
                    <span className="text-white font-semibold">{testimonial.name}</span>
                    <span className="text-blue-300">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
