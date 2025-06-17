import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Clock, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useMemo } from 'react';
import { getServices, getCountries, getCities, getServiceCategories } from '@/lib/cms';
import { Service, Country, City, ServiceCategory } from '@/types';
import ServiceIcon from '@/components/ServiceIcon';

const ServicesListPage = () => {
  const { language, t } = useLanguage();
  const [services, setServices] = useState<Service[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [selectedCountryId, setSelectedCountryId] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesData, countriesData, citiesData, categoriesData] = await Promise.all([
          getServices(),
          getCountries(),
          getCities(),
          getServiceCategories(),
        ]);
        setServices(servicesData);
        setCountries(countriesData);
        setCities(citiesData);
        setServiceCategories(categoriesData);
        setFilteredServices(servicesData);
      } catch (error) {
        console.error('Error loading services page data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const countryCityMap = useMemo(() => {
    return countries.reduce((acc, country) => {
      acc[country.id] = cities.filter(c => c.countryId === country.id).map(c => c.id);
      return acc;
    }, {} as Record<string, string[]>);
  }, [countries, cities]);

  useEffect(() => {
    let filtered = services;

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const categoryMap = new Map(serviceCategories.map(c => [c.id, c]));
      
      filtered = filtered.filter(service => {
        const category = categoryMap.get(service.categoryId);
        return (
          service.name.toLowerCase().includes(lowercasedTerm) ||
          service.nameAr.toLowerCase().includes(lowercasedTerm) ||
          category?.name.toLowerCase().includes(lowercasedTerm) ||
          category?.nameAr.toLowerCase().includes(lowercasedTerm)
        );
      });
    }

    if (selectedCategoryId !== 'all') {
      filtered = filtered.filter(service => service.categoryId === selectedCategoryId);
    }

    if (selectedCountryId !== 'all') {
      const cityIdsInCountry = countryCityMap[selectedCountryId] || [];
      filtered = filtered.filter(service => 
        service.availableCityIds.some(cityId => cityIdsInCountry.includes(cityId))
      );
    }
    
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategoryId, selectedCountryId, services, serviceCategories, countryCityMap]);

  const getCategoryById = (id: string) => {
    return serviceCategories.find(c => c.id === id);
  }

  if (loading) {
    return (
      <Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('loading')}</div></div></Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="py-20 px-4"><div className="container mx-auto text-center"><h1 className="text-5xl font-bold text-white mb-6">{t('services.title')}</h1><p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{t('services.description')}</p></div></section>
        
        <section className="py-8 bg-white/10 backdrop-blur-sm sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="relative md:col-span-2">
                <Search className="absolute start-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="text" placeholder={t('searchServices')} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="ps-10 bg-white/20 border-white/30 text-white placeholder-blue-200" />
              </div>
              
              <select value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)} className="px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white w-full">
                <option value="all">{t('allCategories')}</option>
                {serviceCategories.map((category) => (<option key={category.id} value={category.id} className="text-black">{language === 'ar' ? category.nameAr : category.name}</option>))}
              </select>
              
              <select value={selectedCountryId} onChange={(e) => setSelectedCountryId(e.target.value)} className="px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white w-full">
                <option value="all">{t('allCountries')}</option>
                {countries.map((country) => (<option key={country.id} value={country.id} className="text-black">{language === 'ar' ? country.nameAr : country.name}</option>))}
              </select>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const category = getCategoryById(service.categoryId);
                const price = service.pricing.basePrice ? `${service.pricing.basePrice} ${service.pricing.currency}` : t('pricing.onQuote');
                return (
                  <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-x-4 mb-4">
                        <ServiceIcon iconName={service.icon} className="w-10 h-10 text-blue-300 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{language === 'ar' ? service.nameAr : service.name}</h3>
                          {category && <p className="text-blue-200 text-sm">{language === 'ar' ? category.nameAr : category.name}</p>}
                        </div>
                      </div>
                      <p className="text-blue-100 mb-4 text-sm flex-grow">{language === 'ar' ? service.description.shortAr : service.description.short}</p>
                      <div className="mt-auto space-y-4">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-x-1 text-yellow-300"><Star className="w-4 h-4 fill-current" /><span>{service.rating} ({service.reviewCount})</span></div>
                          <div className="flex items-center gap-x-1 text-green-300"><Clock className="w-4 h-4" /><span>{language === 'ar' ? service.duration.textAr : service.duration.text}</span></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">{t('startingFrom')} {price}</span>
                          {service.isEmergency && (<div className="flex items-center text-red-300 gap-x-1"><Shield className="w-4 h-4" /><span className="text-xs">{t('emergency')}</span></div>)}
                        </div>
                        {/* FIX: Updated link to the new unambiguous route */}
                        <Link to={`/services/item/${service.slug}`}><Button className="w-full bg-blue-600 hover:bg-blue-700">{t('button.viewDetails')}</Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            {filteredServices.length === 0 && (<div className="text-center py-12"><p className="text-white text-xl">{t('noServicesFound')}</p><p className="text-blue-200 mt-2">{t('tryDifferentSearch')}</p></div>)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesListPage;