import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Clock, Users, MapPin } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface AboutPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>من نحن - شراء الأثاث المستعمل في جدة</title>
        <meta name="description" content="تعرف على شركة شراء الأثاث المستعمل في جدة. نحن متخصصون في شراء جميع أنواع الأثاث المستعمل بأعلى الأسعار مع خدمة نقل مجانية في جدة." />
        <meta name="keywords" content="من نحن، شراء أثاث مستعمل جدة، شركة شراء أثاث، خدمات شراء الأثاث المستعمل" />
        <meta property="og:title" content="من نحن - شراء الأثاث المستعمل في جدة" />
        <meta property="og:description" content="تعرف على شركة شراء الأثاث المستعمل في جدة. نحن متخصصون في شراء جميع أنواع الأثاث المستعمل بأعلى الأسعار." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/about" />

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
              "name": "من نحن",
              "item": "https://www.athath-jeddah-sa.com/about"
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">من نحن</h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                نحن <strong className="text-emerald-600">أثاث جدة</strong> - جهة متخصصة في شراء الأثاث المستعمل والأجهزة الكهربائية في جدة. نعمل منذ <strong className="text-emerald-600">أكثر من 15 عاماً</strong> في هذا المجال ونقدم خدمات احترافية عالية الجودة.
              </p>
              <p className="text-xl mb-6">
                نعمل على توفير حلول سهلة وسريعة لكل من يرغب بالتخلص من أثاثه بطريقة منظمة وآمنة، وبأسعار عادلة جداً. نمتلك خبرة عميقة في تقييم جميع أنواع الأثاث والأجهزة الكهربائية وتقديم عروض مناسبة ترضي الطرفين.
              </p>
              <p className="text-xl">
                هدفنا هو توفير تجربة بيع مريحة وسريعة لعملائنا في جدة، مع احترام وقتهم وتوفير خدمات نقل موثوقة وفريق فني متخصص.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نلتزم بتقديم خدمة متميزة تعكس قيمنا في الصدق والشفافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">الثقة والمصداقية</h3>
              <p className="text-gray-600 text-sm">نبني علاقات طويلة الأمد مع عملائنا</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">السرعة في الخدمة</h3>
              <p className="text-gray-600 text-sm">نوفر تقييماً فورياً وخدمة نقل سريعة</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">خدمة العملاء</h3>
              <p className="text-gray-600 text-sm">فريق محترف مدرب على التعامل الراقي</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">خدمة محلية</h3>
              <p className="text-gray-600 text-sm">نركز على تقديم أفضل خدمة في جدة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      {setCurrentPage && (
        <InternalLinks currentPage="about" setCurrentPage={setCurrentPage} />
      )}

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            تواصل معنا اليوم
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            للحصول على استشارة مجانية وتقييم سريع لأثاثك
          </p>
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>📱</span>
            <span>تواصل معنا على واتساب</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;