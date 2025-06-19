import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  author: string;
  datePublished: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    titleAr: 'دليل شامل لصيانة المكيفات في الصيف',
    titleEn: 'Complete Guide to AC Maintenance in Summer',
    excerptAr: 'تعلم كيفية الحفاظ على مكيفك يعمل بكفاءة عالية خلال أشهر الصيف الحارة',
    excerptEn: 'Learn how to keep your AC running efficiently during hot summer months',
    contentAr: 'محتوى المقال باللغة العربية...',
    contentEn: 'Article content in English...',
    author: 'musaaed',
    datePublished: '2024-06-15',
    readTime: 8,
    category: 'تكييف وتبريد',
    tags: ['صيانة', 'مكيفات', 'صيف'],
    image: '/images/blog/ac-maintenance.jpg',
    featured: true
  },
  {
    id: '2',
    titleAr: 'أساسيات السباكة المنزلية: حلول سريعة للمشاكل الشائعة',
    titleEn: 'Home Plumbing Basics: Quick Solutions for Common Issues',
    excerptAr: 'تعرف على الحلول السريعة لأكثر مشاكل السباكة شيوعاً في المنزل',
    excerptEn: 'Discover quick solutions to the most common plumbing problems at home',
    contentAr: 'محتوى المقال باللغة العربية...',
    contentEn: 'Article content in English...',
    author: 'musaaed',
    datePublished: '2024-06-10',
    readTime: 6,
    category: 'سباكة',
    tags: ['سباكة', 'إصلاح', 'منزل'],
    image: '/images/blog/plumbing-basics.jpg',
    featured: false
  },
  {
    id: '3',
    titleAr: 'نصائح الأمان الكهربائي للمنازل',
    titleEn: 'Electrical Safety Tips for Homes',
    excerptAr: 'نصائح مهمة للحفاظ على سلامتك وسلامة عائلتك من المخاطر الكهربائية',
    excerptEn: 'Important tips to keep you and your family safe from electrical hazards',
    contentAr: 'محتوى المقال باللغة العربية...',
    contentEn: 'Article content in English...',
    author: 'musaaed',
    datePublished: '2024-06-05',
    readTime: 5,
    category: 'كهرباء',
    tags: ['كهرباء', 'أمان', 'سلامة'],
    image: '/images/blog/electrical-safety.jpg',
    featured: false
  }
];

export default function BlogSection() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Simulate API call
    setPosts(mockBlogPosts);
  }, []);

  const featuredPost = posts.find(post => post.featured);
  const otherPosts = posts.filter(post => !post.featured);

  return (
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isArabic ? 'مدونة مساعد الخدمات' : 'Service Helper Blog'}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {isArabic 
              ? 'نصائح وإرشادات مفيدة للحفاظ على منزلك وتحسين جودة الخدمات'
              : 'Helpful tips and guides to maintain your home and improve service quality'
            }
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={isArabic ? featuredPost.titleAr : featuredPost.titleEn}
                    className="w-full h-64 lg:h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/images/blog/default.jpg'; }}
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {isArabic ? 'مميز' : 'Featured'}
                  </div>
                </div>
                <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.datePublished}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime} {isArabic ? 'دقائق' : 'min read'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {isArabic ? featuredPost.titleAr : featuredPost.titleEn}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {isArabic ? featuredPost.excerptAr : featuredPost.excerptEn}
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                    <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-2">
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {otherPosts.map((post) => (
            <Card key={post.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={isArabic ? post.titleAr : post.titleEn}
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/blog/default.jpg'; }}
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span>{post.datePublished}</span>
                  <span>{post.readTime} {isArabic ? 'دقائق' : 'min'}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {isArabic ? post.titleAr : post.titleEn}
                </h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {isArabic ? post.excerptAr : post.excerptEn}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                >
                  {isArabic ? 'اقرأ المزيد' : 'Read More'}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            <Link to="/blog">
              {isArabic ? 'عرض جميع المقالات' : 'View All Articles'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
