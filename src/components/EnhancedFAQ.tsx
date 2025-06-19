
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

interface EnhancedFAQProps {
  serviceName: string;
  cityName: string;
}

export default function EnhancedFAQ({ serviceName, cityName }: EnhancedFAQProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Dynamic FAQ generation based on service and city
  const faqs: FAQItem[] = [
    {
      questionAr: `كم تكلفة خدمة ${serviceName} في ${cityName}؟`,
      questionEn: `How much does ${serviceName} service cost in ${cityName}?`,
      answerAr: `تتراوح تكلفة خدمة ${serviceName} في ${cityName} حسب نوع الخدمة والمساحة. نحن نقدم أسعاراً تنافسية مع ضمان الجودة.`,
      answerEn: `The cost of ${serviceName} service in ${cityName} varies based on service type and area. We offer competitive prices with quality guarantee.`
    },
    {
      questionAr: `هل خدمة ${serviceName} متاحة على مدار 24 ساعة في ${cityName}؟`,
      questionEn: `Is ${serviceName} service available 24/7 in ${cityName}?`,
      answerAr: `نعم، نحن نقدم خدمة ${serviceName} على مدار الساعة طوال أيام الأسبوع في ${cityName} للحالات الطارئة.`,
      answerEn: `Yes, we provide ${serviceName} service 24/7 throughout the week in ${cityName} for emergency cases.`
    },
    {
      questionAr: `كم من الوقت يستغرق وصول فني ${serviceName} في ${cityName}؟`,
      questionEn: `How long does it take for a ${serviceName} technician to arrive in ${cityName}?`,
      answerAr: `عادة ما يصل فني ${serviceName} المعتمد في ${cityName} خلال 30-60 دقيقة من طلب الخدمة.`,
      answerEn: `Usually, a certified ${serviceName} technician arrives in ${cityName} within 30-60 minutes of service request.`
    },
    {
      questionAr: `هل يوجد ضمان على خدمة ${serviceName} في ${cityName}؟`,
      questionEn: `Is there a warranty on ${serviceName} service in ${cityName}?`,
      answerAr: `نعم، نحن نقدم ضماناً شاملاً على جميع خدمات ${serviceName} في ${cityName} لمدة تصل إلى 6 أشهر.`,
      answerEn: `Yes, we provide comprehensive warranty on all ${serviceName} services in ${cityName} for up to 6 months.`
    },
    {
      questionAr: `كيف يمكنني حجز خدمة ${serviceName} في ${cityName}؟`,
      questionEn: `How can I book ${serviceName} service in ${cityName}?`,
      answerAr: `يمكنك حجز خدمة ${serviceName} في ${cityName} من خلال موقعنا الإلكتروني أو الاتصال بنا أو عبر تطبيق الواتساب.`,
      answerEn: `You can book ${serviceName} service in ${cityName} through our website, by calling us, or via WhatsApp.`
    },
    {
      questionAr: `هل الفنيون معتمدون لتقديم خدمة ${serviceName} في ${cityName}؟`,
      questionEn: `Are technicians certified to provide ${serviceName} service in ${cityName}?`,
      answerAr: `نعم، جميع فنيي ${serviceName} في ${cityName} معتمدون ومدربون على أعلى المستويات المهنية.`,
      answerEn: `Yes, all ${serviceName} technicians in ${cityName} are certified and trained to the highest professional standards.`
    }
  ];

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": isArabic ? faq.questionAr : faq.questionEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isArabic ? faq.answerAr : faq.answerEn
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-white pr-4">
                      {isArabic ? faq.questionAr : faq.questionEn}
                    </h3>
                    {openIndex === index ? 
                      <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0" /> : 
                      <ChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    }
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {isArabic ? faq.answerAr : faq.answerEn}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
