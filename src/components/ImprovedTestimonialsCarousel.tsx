
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  serviceAr: string;
  serviceEn: string;
  rating: number;
  testimonialAr: string;
  testimonialEn: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    nameAr: 'أحمد محمد',
    nameEn: 'Ahmed Mohammed',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    serviceAr: 'تنظيف مكيفات',
    serviceEn: 'AC Cleaning',
    rating: 5,
    testimonialAr: 'خدمة ممتازة وسريعة. الفني وصل في الوقت المحدد ونظف المكيف بإتقان. أنصح الجميع بهذه الخدمة.',
    testimonialEn: 'Excellent and fast service. The technician arrived on time and cleaned the AC perfectly. I recommend this service to everyone.',
    avatar: '/images/avatars/ahmed.jpg',
    date: '2024-06-15'
  },
  {
    id: '2',
    nameAr: 'فاطمة السعيد',
    nameEn: 'Fatima Al-Saeed',
    cityAr: 'جدة',
    cityEn: 'Jeddah',
    serviceAr: 'سباكة طارئة',
    serviceEn: 'Emergency Plumbing',
    rating: 5,
    testimonialAr: 'كان لدي مشكلة في السباكة في منتصف الليل. اتصلت بهم وحضر الفني خلال 20 دقيقة وحل المشكلة بسرعة.',
    testimonialEn: 'I had a plumbing issue in the middle of the night. I called them and the technician came within 20 minutes and solved the problem quickly.',
    avatar: '/images/avatars/fatima.jpg',
    date: '2024-06-12'
  },
  {
    id: '3',
    nameAr: 'خالد العتيبي',
    nameEn: 'Khalid Al-Otaibi',
    cityAr: 'الدمام',
    cityEn: 'Dammam',
    serviceAr: 'صيانة كهرباء',
    serviceEn: 'Electrical Maintenance',
    rating: 4,
    testimonialAr: 'فني محترف وأسعار معقولة. تم إصلاح المشكلة الكهربائية بكفاءة عالية وضمان على العمل.',
    testimonialEn: 'Professional technician and reasonable prices. The electrical problem was fixed efficiently with work guarantee.',
    avatar: '/images/avatars/khalid.jpg',
    date: '2024-06-08'
  },
  {
    id: '4',
    nameAr: 'نورا أحمد',
    nameEn: 'Nora Ahmed',
    cityAr: 'الكويت',
    cityEn: 'Kuwait City',
    serviceAr: 'تنظيف منازل',
    serviceEn: 'House Cleaning',
    rating: 5,
    testimonialAr: 'فريق تنظيف رائع ومنظم. نظفوا المنزل بالكامل واهتموا بأدق التفاصيل. سأطلب خدماتهم مرة أخرى بالتأكيد.',
    testimonialEn: 'Amazing and organized cleaning team. They cleaned the entire house and paid attention to the smallest details. I will definitely request their services again.',
    avatar: '/images/avatars/nora.jpg',
    date: '2024-06-05'
  },
  {
    id: '5',
    nameAr: 'عبدالله الفارس',
    nameEn: 'Abdullah Al-Fares',
    cityAr: 'دبي',
    cityEn: 'Dubai',
    serviceAr: 'تنظيف خزانات',
    serviceEn: 'Tank Cleaning',
    rating: 5,
    testimonialAr: 'خدمة احترافية من الألف إلى الياء. تم تنظيف وتعقيم الخزان بأحدث الطرق مع تقرير مفصل عن العمل.',
    testimonialEn: 'Professional service from A to Z. The tank was cleaned and sterilized using the latest methods with a detailed work report.',
    avatar: '/images/avatars/abdullah.jpg',
    date: '2024-06-03'
  },
  {
    id: '6',
    nameAr: 'مريم الزهراني',
    nameEn: 'Mariam Al-Zahrani',
    cityAr: 'القاهرة',
    cityEn: 'Cairo',
    serviceAr: 'مكافحة حشرات',
    serviceEn: 'Pest Control',
    rating: 4,
    testimonialAr: 'تخلصت من مشكلة النمل نهائياً بعد معاناة طويلة. الفني استخدم مواد آمنة وصديقة للبيئة.',
    testimonialEn: 'Got rid of the ant problem completely after a long struggle. The technician used safe and eco-friendly materials.',
    avatar: '/images/avatars/mariam.jpg',
    date: '2024-06-01'
  }
];

export default function ImprovedTestimonialsCarousel() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Always show exactly 3 testimonials
  const visibleTestimonials = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleTestimonials);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + visibleTestimonials);
  };

  return (
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isArabic ? 'آراء عملائنا' : 'Customer Reviews'}
          </h2>
          <p className="text-xl text-blue-200">
            {isArabic ? 'تجارب حقيقية من عملائنا الكرام' : 'Real experiences from our valued customers'}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              disabled={testimonials.length <= visibleTestimonials}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              disabled={testimonials.length <= visibleTestimonials}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Testimonials Grid - Always show 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/30" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={isArabic ? testimonial.nameAr : testimonial.nameEn}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30"
                      onError={(e) => {
                        e.currentTarget.src = '/images/avatars/default.jpg';
                      }}
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {isArabic ? testimonial.nameAr : testimonial.nameEn}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {isArabic ? testimonial.cityAr : testimonial.cityEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-300">
                      ({testimonial.rating}/5)
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-4">
                    {isArabic ? testimonial.testimonialAr : testimonial.testimonialEn}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span className="bg-blue-600/20 px-2 py-1 rounded">
                      {isArabic ? testimonial.serviceAr : testimonial.serviceEn}
                    </span>
                    <span>{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          {testimonials.length > visibleTestimonials && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex ? 'bg-blue-400' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
