
import { Star, ThumbsUp, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Testimonial } from '@/lib/testimonials';

interface ServiceReviewsProps {
  reviews: Testimonial[];
  averageRating: number;
  totalReviews: number;
}

export default function ServiceReviews({ reviews, averageRating, totalReviews }: ServiceReviewsProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(r => r.rating === rating).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                  />
                ))}
              </div>
              <p className="text-blue-200">
                {isArabic ? `${totalReviews} تقييم` : `${totalReviews} reviews`}
              </p>
            </div>
            
            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-white text-sm w-8">{rating}</span>
                  <Star className="w-4 h-4 text-yellow-400" />
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-blue-200 text-sm w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.slice(0, 6).map((review) => (
          <Card key={review.id} className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-blue-200">
                      <MapPin className="w-3 h-3" />
                      <span>{isArabic ? review.cityAr : review.cityEn}</span>
                      <Calendar className="w-3 h-3 ml-2" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {isArabic ? 'مُتحقق' : 'Verified'}
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-blue-100 mb-4 leading-relaxed" dir={isArabic ? 'rtl' : 'ltr'}>
                {review.comment}
              </p>
              
              {review.serviceNameAr && (
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <span>{isArabic ? 'الخدمة:' : 'Service:'}</span>
                  <Badge variant="outline" className="border-blue-400 text-blue-300">
                    {isArabic ? review.serviceNameAr : review.serviceNameEn}
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{isArabic ? 'مفيد' : 'Helpful'}</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
