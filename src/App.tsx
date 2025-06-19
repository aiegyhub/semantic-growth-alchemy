
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';

import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import ServicesListPage from '@/pages/ServicesListPage';
import ServicePage from '@/pages/ServicePage';
import GenericServicePage from '@/pages/GenericServicePage';
import CategoryPage from '@/pages/CategoryPage';
import SaudiArabia from '@/pages/SaudiArabia';
import UAE from '@/pages/UAE';
import Kuwait from '@/pages/Kuwait';
import Egypt from '@/pages/Egypt';
import CityPage from '@/pages/CityPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';
import Sitemap from '@/pages/Sitemap';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<ServicesListPage />} />
              <Route path="/services/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/services/item/:serviceSlug" element={<GenericServicePage />} />
              <Route path="/services/:serviceSlug" element={<GenericServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Country routes */}
              <Route path="/sa" element={<SaudiArabia />} />
              <Route path="/ae" element={<UAE />} />
              <Route path="/kw" element={<Kuwait />} />
              <Route path="/eg" element={<Egypt />} />
              
              {/* City and service routes */}
              <Route path="/:countrySlug/:citySlug" element={<CityPage />} />
              <Route path="/:countrySlug/:citySlug/:serviceSlug" element={<ServicePage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </Router>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
