
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { Testimonial } from '@/lib/testimonials';
import { useLanguage } from '@/contexts/LanguageContext';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsCarousel({ testimonials, className = "" }: TestimonialsCarouselProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

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
                  {/* Header with rating and verification */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                      <span className="text-yellow-400 ml-2 font-semibold text-sm">
                        {testimonial.rating}/5
                      </span>
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 bg-green-600/20 rounded-full px-2 py-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-300">{isArabic ? 'مُتحقق' : 'Verified'}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Comment */}
                  <div className="flex-grow mb-4">
                    <p className="text-blue-100 text-sm leading-relaxed line-clamp-4" dir={isArabic ? 'rtl' : 'ltr'}>
                      {testimonial.comment}
                    </p>
                  </div>
                  
                  {/* Service badge */}
                  {(testimonial.serviceNameAr || testimonial.serviceNameEn) && (
                    <div className="mb-4">
                      <span className="inline-block bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {isArabic ? testimonial.serviceNameAr : testimonial.serviceNameEn}
                      </span>
                    </div>
                  )}
                  
                  {/* Footer with customer info */}
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{testimonial.name}</div>
                          <div className="flex items-center gap-1 text-xs text-blue-300">
                            <MapPin className="w-3 h-3" />
                            <span>{isArabic ? testimonial.cityAr : testimonial.cityEn}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-blue-300">
                        {new Date(testimonial.date).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
                          year: 'numeric',
                          month: 'short'
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
        <CarouselNext className="hidden md:flex -right-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
      </Carousel>
    </div>
  );
}
