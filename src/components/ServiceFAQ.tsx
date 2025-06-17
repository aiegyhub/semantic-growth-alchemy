import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FAQ } from "@/types";

interface ServiceFAQProps {
  faqs?: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
    const { language, t } = useLanguage();
    
    if (!faqs || faqs.length === 0) {
        return <p className={`text-blue-200 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t('faq.none') || 'No frequently asked questions for this service yet.'}</p>;
    }

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                        <AccordionTrigger className={`hover:no-underline text-white text-base text-start`}>
                           {language === 'ar' ? faq.questionAr : faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pt-2 text-start prose prose-invert max-w-none">
                           <p>{language === 'ar' ? faq.answerAr : faq.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}