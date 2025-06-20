import Layout from '@/components/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const { language, t } = useLanguage();

  const seoData = {
    title: t('contact.page.title'),
    description: t('contact.page.description'),
    keywords: ['contact', 'support', 'customer service', 'help'],
    canonical: '/contact',
    ogTitle: t('contact.page.title'),
    ogDescription: t('contact.page.description'),
    ogImage: 'https://musaaed.com/og-contact.jpg',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: t('contact.page.title'),
      description: t('contact.page.description'),
    }
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="min-h-screen">
        <section className="py-20 px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t('contact.page.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('contact.page.description')}
          </p>
        </section>

        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-blue-200 text-sm font-medium mb-2">{t('contact.form.name')}</label>
                    <input type="text" id="name" className="shadow-sm bg-blue-900 border border-blue-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={t('contact.form.namePlaceholder')} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">{t('contact.form.email')}</label>
                    <input type="email" id="email" className="shadow-sm bg-blue-900 border border-blue-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={t('contact.form.emailPlaceholder')} required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-blue-200 text-sm font-medium mb-2">{t('contact.form.message')}</label>
                    <textarea id="message" rows={5} className="shadow-sm bg-blue-900 border border-blue-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={t('contact.form.messagePlaceholder')} required></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">{t('contact.form.submit')}</button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-400 w-6 h-6" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('contact.info.addressTitle')}</h3>
                      <p className="text-blue-200">{t('contact.info.address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-400 w-6 h-6" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('contact.info.phoneTitle')}</h3>
                      <p className="text-blue-200">+966-111-234567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-400 w-6 h-6" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('contact.info.emailTitle')}</h3>
                      <p className="text-blue-200">support@musaaed.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
