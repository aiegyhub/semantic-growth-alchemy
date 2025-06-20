
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    titleEn: "5 Signs Your AC Needs Professional Cleaning",
    titleAr: "5 علامات تدل على حاجة مكيفك للتنظيف المهني",
    excerptEn: "Learn the warning signs that indicate your air conditioner needs immediate professional attention.",
    excerptAr: "تعلم العلامات التحذيرية التي تشير إلى حاجة مكيف الهواء للاهتمام المهني الفوري.",
    date: "2024-01-15",
    author: "فريق مساعد",
    image: "/images/blog/ac-cleaning-signs.jpg"
  },
  {
    id: 2,
    titleEn: "Emergency Plumbing: What to Do Before Help Arrives",
    titleAr: "السباكة الطارئة: ما يجب فعله قبل وصول المساعدة",
    excerptEn: "Essential steps to minimize damage during plumbing emergencies in your home or office.",
    excerptAr: "الخطوات الأساسية لتقليل الأضرار أثناء طوارئ السباكة في منزلك أو مكتبك.",
    date: "2024-01-10",
    author: "خبراء مساعد",
    image: "/images/blog/emergency-plumbing.jpg"
  },
  {
    id: 3,
    titleEn: "Preventive Maintenance: Save Money on Home Repairs",
    titleAr: "الصيانة الوقائية: وفر المال في إصلاحات المنزل",
    excerptEn: "How regular maintenance can prevent costly repairs and extend appliance life.",
    excerptAr: "كيف يمكن للصيانة المنتظمة منع الإصلاحات المكلفة وإطالة عمر الأجهزة.",
    date: "2024-01-05",
    author: "مساعد",
    image: "/images/blog/preventive-maintenance.jpg"
  }
];

export default function BlogSection() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isArabic ? 'آخر المقالات والنصائح' : 'Latest Articles & Tips'}
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            {isArabic 
              ? 'اكتشف نصائح الخبراء وأحدث الاتجاهات في عالم الخدمات المنزلية والتجارية'
              : 'Discover expert tips and latest trends in home and business services'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white text-sm">صورة المقال</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {isArabic ? post.titleAr : post.titleEn}
                </h3>
                <p className="text-blue-200 text-sm mb-4 line-clamp-3">
                  {isArabic ? post.excerptAr : post.excerptEn}
                </p>
                <div className="flex items-center justify-between text-xs text-blue-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
