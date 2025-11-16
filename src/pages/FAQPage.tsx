import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact') => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ setCurrentPage }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      question: 'هل تشتري جميع أنواع الأثاث؟',
      answer: 'نعم، نشتري الأثاث المنزلي بجميع أنواعه سواء كان خشبي، مكتبي، غرف نوم، كنب، طاولات، أو غيرها.'
    },
    {
      question: 'كيف يتم التقييم؟',
      answer: 'نطلب صورًا عبر واتساب، ونعطيك تقييمًا فوريًا خلال دقائق. في بعض الحالات، قد نزور الموقع للتقييم المباشر.'
    },
    {
      question: 'هل توفرون خدمة نقل؟',
      answer: 'نعم، لدينا شركاء لنقل الأثاث بعد الاتفاق على السعر. الخدمة مجانية داخل جدة.'
    },
    {
      question: 'هل أحتاج إلى تغليف الأثاث؟',
      answer: 'لا، نحن نتولى كل إجراءات النقل والتجهيز.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>الأسئلة الشائعة - شراء الأثاث المستعمل في جدة</title>
        <meta name="description" content="إجابات على الأسئلة الأكثر شيوعاً حول خدمات شراء الأثاث المستعمل في جدة. تعرف على كيفية عمل خدماتنا وأسعارنا وطرق التواصل." />
        <meta name="keywords" content="أسئلة شائعة، شراء أثاث مستعمل جدة، كيف نشتري الأثاث، أسعار شراء الأثاث المستعمل" />
        <meta property="og:title" content="الأسئلة الشائعة - شراء الأثاث المستعمل في جدة" />
        <meta property="og:description" content="إجابات على الأسئلة الأكثر شيوعاً حول خدمات شراء الأثاث المستعمل في جدة." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/faq" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "هل تشتري جميع أنواع الأثاث؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "نعم، نشتري الأثاث المنزلي بجميع أنواعه سواء كان خشبي، مكتبي، غرف نوم، كنب، طاولات، أو غيرها."
              }
            },
            {
              "@type": "Question",
              "name": "كيف يتم التقييم؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "نطلب صورًا عبر واتساب، ونعطيك تقييمًا فوريًا خلال دقائق. في بعض الحالات، قد نزور الموقع للتقييم المباشر."
              }
            },
            {
              "@type": "Question",
              "name": "هل توفرون خدمة نقل؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "نعم، لدينا شركاء لنقل الأثاث بعد الاتفاق على السعر. الخدمة مجانية داخل جدة."
              }
            },
            {
              "@type": "Question",
              "name": "هل أحتاج إلى تغليف الأثاث؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "لا، نحن نتولى كل إجراءات النقل والتجهيز."
              }
            }
          ]
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "الرئيسية",
              "item": "https://www.athath-jeddah-sa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "الأسئلة الشائعة",
              "item": "https://www.athath-jeddah-sa.com/faq"
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h1>
            <p className="text-xl text-gray-600">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
            </p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-right focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="mr-4">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                لديك سؤال آخر؟
              </h2>
              <p className="text-gray-600 mb-6">
                تواصل معنا مباشرة عبر واتساب وسنجيب على جميع استفساراتك
              </p>
              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>📱</span>
                <span>تواصل معنا على واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      {setCurrentPage && (
        <InternalLinks currentPage="faq" setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default FAQPage;