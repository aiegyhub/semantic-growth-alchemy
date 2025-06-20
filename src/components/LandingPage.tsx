
import { Country, Service } from '@/types';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CountriesSection from '@/components/CountriesSection';
import PopularServicesSection from '@/components/PopularServicesSection';
import OffersSection from '@/components/OffersSection';
import InteractiveMap from '@/components/InteractiveMap';
import PlatformFeaturesSection from '@/components/PlatformFeaturesSection';
import ImprovedTestimonialsCarousel from '@/components/ImprovedTestimonialsCarousel';
import ContentOptimizationSection from '@/components/ContentOptimizationSection';
import BlogSection from '@/components/BlogSection';
import OffersSidebar from '@/components/OffersSidebar';

interface LandingPageProps {
  countries: Country[];
  popularServices: Service[];
}

export default function LandingPage({ countries, popularServices }: LandingPageProps) {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <OffersSection />
      <CountriesSection countries={countries} />
      <PopularServicesSection services={popularServices} />
      <InteractiveMap />
      <ContentOptimizationSection />
      <ImprovedTestimonialsCarousel />
      <BlogSection />
      <PlatformFeaturesSection />
      <OffersSidebar />
    </div>
  );
}
