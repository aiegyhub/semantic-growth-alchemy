
import { Country, Service } from '@/types';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CountriesSection from '@/components/CountriesSection';
import PopularServicesSection from '@/components/PopularServicesSection';
import PlatformFeaturesSection from '@/components/PlatformFeaturesSection';

interface LandingPageProps {
  countries: Country[];
  popularServices: Service[];
}

export default function LandingPage({ countries, popularServices }: LandingPageProps) {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CountriesSection countries={countries} />
      <PopularServicesSection services={popularServices} />
      <PlatformFeaturesSection />
    </div>
  );
}
