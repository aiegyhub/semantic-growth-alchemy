import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Home, MapPin, Settings, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import { generateOrganizationSchema } from '@/lib/seo';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const { language, t } = useLanguage();

  const sitePages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contact', path: '/contact', icon: FileText },
    { name: 'Privacy Policy', path: '/privacy', icon: FileText },
    { name: 'Terms & Conditions', path: '/terms', icon: FileText },
  ];

  const countries = [
    { name: 'Saudi Arabia', path: '/sa', nameAr: 'السعودية' },
    { name: 'UAE', path: '/ae', nameAr: 'الإمارات' },
    { name: 'Kuwait', path: '/kw', nameAr: 'الكويت' },
    { name: 'Egypt', path: '/eg', nameAr: 'مصر' },
  ];

  const organizationSchema = generateOrganizationSchema();
  
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sitemap - Musaaed",
    description: "Complete sitemap of all available pages and services on Musaaed platform",
    url: "https://musaaed.com/sitemap",
    author: {
      "@type": "Organization",
      name: "Musaaed"
    }
  };

  const seoData = {
    title: 'Sitemap - Musaaed',
    description: 'Complete sitemap of all available pages and services on Musaaed platform',
    keywords: ['sitemap', 'navigation', 'pages', 'services'],
    canonical: '/sitemap',
    author: 'musaaed',
    ogTitle: 'Sitemap - Musaaed',
    ogDescription: 'Complete sitemap of all available pages and services on Musaaed platform',
    ogImage: 'https://musaaed.com/og-sitemap.jpg',
    schemaMarkup: [organizationSchema, sitemapSchema]
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {language === 'ar' ? 'صفحات الموقع' : 'Site Pages'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {sitePages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.path}
                      className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                    >
                      <page.icon className="w-4 h-4" />
                      <span>{language === 'ar' ? t(`nav.${page.name.toLowerCase()}`) : page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {language === 'ar' ? 'البلدان' : 'Countries'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {countries.map((country, index) => (
                  <li key={index}>
                    <Link 
                      to={country.path}
                      className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{language === 'ar' ? country.nameAr : country.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="w-5 h-5" />
              {language === 'ar' ? 'فئات الخدمات' : 'Service Categories'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'AC Services', 'Plumbing', 'Electrical', 'Cleaning',
                'Pest Control', 'Carpentry', 'Painting', 'Water Tank'
              ].map((category, index) => (
                <Link 
                  key={index}
                  to={`/services/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/5"
                >
                  <Settings className="w-4 h-4" />
                  <span>{language === 'ar' ? t(`categories.${category.toLowerCase().replace(' ', '')}`) : category}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              {language === 'ar' ? 'روابط مفيدة' : 'Useful Links'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Blog', url: '/blog' },
                { name: 'FAQ', url: '/faq' },
                { name: 'Careers', url: '/careers' },
                { name: 'Partner With Us', url: '/partners' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.url}
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'ar' ? t(`links.${link.name.toLowerCase()}`) : link.name}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Sitemap;
