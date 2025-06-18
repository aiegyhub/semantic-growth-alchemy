
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { getServices, getServiceCategories } from '@/lib/cms';
import SEOHead from '@/components/SEOHead';
import ServiceIcon from '@/components/ServiceIcon';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { language, t } = useLanguage();

  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['serviceCategories'],
    queryFn: getServiceCategories
  });

  const { data: services = [], isLoading: servicesLoading } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

  const currentCategory = categories.find(c => c.slug === categorySlug);
  const categoryServices = services.filter(s => s.categoryId === currentCategory?.id && s.isActive);

  const isLoading = categoriesLoading || servicesLoading;

  if (isLoading) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">{t('loading')}</div></Layout>;
  }

  if (!currentCategory) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">{t('category.notFound') || 'Category not found'}</div></Layout>;
  }
  
  const categoryName = language === 'ar' ? currentCategory.nameAr : currentCategory.name;
  const seoData = {
    title: `${categoryName} | ${t('nav.services')}`,
    description: `Browse all our ${categoryName} services. Find experts for ${categoryServices.map(s => s.name).join(', ')}.`,
    keywords: [categoryName, ...categoryServices.flatMap(s => s.keywords)],
    canonical: `/services/category/${currentCategory.slug}`,
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${categoryName} Services`,
      "description": `All available ${categoryName} services.`,
    }
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="min-h-screen">
        <section className="py-20 px-4 text-center">
          <p className="text-blue-300 font-semibold mb-2">{t('nav.services')}</p>
          <h1 className="text-5xl font-bold text-white">{categoryName}</h1>
        </section>

        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Card key={service.id} className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-x-4 mb-4">
                      <ServiceIcon iconName={service.icon} className="w-10 h-10 text-blue-300 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{language === 'ar' ? service.nameAr : service.name}</h3>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-4 text-sm flex-grow">{language === 'ar' ? service.description.shortAr : service.description.short}</p>
                    <div className="mt-auto">
                      <Link to={`/services/item/${service.slug}`}><Button className="w-full bg-blue-600 hover:bg-blue-700">{t('button.viewDetails')}</Button></Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
             {categoryServices.length === 0 && (<div className="text-center py-12"><p className="text-white text-xl">{t('noServicesFound')}</p></div>)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CategoryPage;
