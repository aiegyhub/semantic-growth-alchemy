
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    nameEn: "Ahmed Al-Mahmoud",
    nameAr: "أحمد المحمود",
    locationEn: "Riyadh, Saudi Arabia",
    locationAr: "الرياض، السعودية",
    serviceEn: "AC Cleaning Service",
    serviceAr: "خدمة تنظيف المكيفات",
    rating: 5,
    reviewEn: "Excellent service! The technician arrived on time and did a thorough job cleaning my AC units. The difference in air quality is remarkable. Highly recommend Musaaed for all home services.",
    reviewAr: "خدمة ممتازة! وصل الفني في الوقت المحدد وقام بعمل شامل في تنظيف وحدات التكييف. الفرق في جودة الهواء ملحوظ جداً. أنصح بشدة بمساعد لجميع الخدمات المنزلية.",
    avatar: "👨‍💼"
  },
  {
    id: 2,
    nameEn: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    locationEn: "Dubai, UAE",
    locationAr: "دبي، الإمارات",
    serviceEn: "Emergency Plumbing",
    serviceAr: "سباكة طارئة",
    rating: 5,
    reviewEn: "Had a plumbing emergency at 2 AM and Musaaed connected me with a reliable plumber within 30 minutes. Professional, quick, and reasonably priced. Thank you for saving my apartment!",
    reviewAr: "واجهت طارئ سباكة في الساعة 2 صباحاً وربطني مساعد بسباك موثوق خلال 30 دقيقة. محترف وسريع وبأسعار معقولة. شكراً لإنقاذ شقتي!",
    avatar: "👩‍💼"
  },
  {
    id: 3,
    nameEn: "Omar Hassan",
    nameAr: "عمر حسن",
    locationEn: "Kuwait City, Kuwait",
    locationAr: "مدينة الكويت، الكويت",
    serviceEn: "Home Cleaning",
    serviceAr: "تنظيف منازل",
    rating: 5,
    reviewEn: "Regular cleaning service for my home. The team is always punctual, professional, and pays attention to every detail. My house has never looked better!",
    reviewAr: "خدمة تنظيف منتظمة لمنزلي. الفريق دائماً منضبط ومحترف ويهتم بكل التفاصيل. منزلي لم يبدو أفضل من ذلك أبداً!",
    avatar: "👨‍🏢"
  },
  {
    id: 4,
    nameEn: "Maryam Ibrahim",
    nameAr: "مريم إبراهيم",
    locationEn: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    serviceEn: "Electrical Repair",
    serviceAr: "إصلاح كهربائي",
    rating: 5,
    reviewEn: "Professional electrical work at competitive prices. The electrician was knowledgeable and fixed all issues quickly. Great platform for finding trusted service providers.",
    reviewAr: "عمل كهربائي محترف بأسعار تنافسية. الكهربائي كان خبيراً وأصلح جميع المشاكل بسرعة. منصة رائعة للعثور على مقدمي خدمات موثوقين.",
    avatar: "👩‍⚕️"
  },
  {
    id: 5,
    nameEn: "Khalid Al-Rashid",
    nameAr: "خالد الراشد",
    locationEn: "Jeddah, Saudi Arabia",
    locationAr: "جدة، السعودية",
    serviceEn: "Pest Control",
    serviceAr: "مكافحة حشرات",
    rating: 5,
    reviewEn: "Outstanding pest control service! They eliminated all insects from my property and provided helpful prevention tips. Professional team with excellent results.",
    reviewAr: "خدمة مكافحة حشرات متميزة! قضوا على جميع الحشرات في الممتلكات وقدموا نصائح مفيدة للوقاية. فريق محترف بنتائج ممتازة.",
    avatar: "🧑‍💻"
  }
];

export default function ImprovedTestimonialsCarousel() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isArabic ? 'آراء عملائنا' : 'What Our Customers Say'}
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            {isArabic 
              ? 'اكتشف لماذا يثق آلاف العملاء في مساعد لجميع احتياجاتهم من الخدمات المنزلية والتجارية'
              : 'Discover why thousands of customers trust Musaaed for all their home and business service needs'
            }
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 mx-4">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                      
                      <p className="text-blue-100 text-lg leading-relaxed mb-6 italic">
                        "{isArabic ? testimonial.reviewAr : testimonial.reviewEn}"
                      </p>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-3xl">{testimonial.avatar}</div>
                        <div className="text-left">
                          <h4 className="font-semibold text-white">
                            {isArabic ? testimonial.nameAr : testimonial.nameEn}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {isArabic ? testimonial.locationAr : testimonial.locationEn}
                          </p>
                          <p className="text-blue-400 text-xs">
                            {isArabic ? testimonial.serviceAr : testimonial.serviceEn}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex 
                    ? 'bg-blue-400' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
