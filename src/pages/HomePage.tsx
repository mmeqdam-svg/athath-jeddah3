import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Truck, Clock, Phone, Home } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface HomePageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact') => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Home,
      title: ' نشتري جميع أنواع الأثاث المستعمل في جدة',
      description: 'من الأجهزة والتكييف إلى غرف النوم والمكاتب'
    },
    {
      icon: CheckCircle,
      title: 'نوفّر تقييم عادل وسريع',
      description: 'تقييم فوري خلال دقائق عبر الصور أو زيارة مباشرة لموقعك في جدة'
    },
    {
      icon: Truck,
      title: 'خدمة نقل مجانية',
      description: 'نتولى نقل الأثاث بالكامل داخل جدة مجاناً'
    },
    {
      icon: Phone,
      title: 'تواصل مباشر عبر واتساب',
      description: 'تواصل سريع ومباشر لضمان راحتك'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>شراء الأثاث المستعمل في جدة بأعلى الأسعار - خدمة نقل مجانية</title>
        <meta name="description" content="نشتري جميع أنواع الأثاث المستعمل في جدة: غرف النوم، الكنب، المكاتب، الأجهزة الكهربائية والمكيفات بأسعار عادلة. تقييم فوري وخدمة نقل مجانية. اتصل الآن 0559781023" />
        <meta name="keywords" content="شراء أثاث مستعمل جدة، بيع أثاث، أثاث مستعمل، جدة، المملكة العربية السعودية" />
        <meta property="og:title" content="شراء الأثاث المستعمل في جدة بأعلى الأسعار - خدمة نقل مجانية" />
        <meta property="og:description" content="نشتري جميع أنواع الأثاث المستعمل في جدة: غرف النوم، الكنب، المكاتب، الأجهزة الكهربائية والمكيفات بأسعار عادلة. تقييم فوري وخدمة نقل مجانية." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/" />

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
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                نشتري الأثاث المستعمل في جدة بأعلى الأسعار
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  نحن نوفّر خدمة <strong className="text-emerald-600">شراء الأثاث المستعمل في جدة</strong> بكل سهولة وسرعة. سواء كنت تنتقل، تجدد منزلك، أو ترغب فقط بالتخلص من الأثاث الزائد – نحن هنا لخدمتك!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نشتري جميع أنواع <strong className="text-emerald-600">الأثاث المستعمل</strong>: غرف النوم، الكنب، المكاتب، الطاولات، الخزائن، والأجهزة الكهربائية مثل المكيفات، الثلاجات، الغسالات، والأفران. نغطي جميع أحياء جدة ونوفر تقييماً فورياً وعادلاً خلال دقائق من تواصلك معنا.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  إذا كنت تبحث عن <strong className="text-emerald-600">محلات شراء الأثاث المستعمل في جدة</strong> بأعلى الأسعار وخدمة موثوقة، فنحن خيارك الأمثل. اتصل الآن على الرقم <strong className="text-emerald-600 dir-ltr">0559781023</strong> أو تواصل معنا عبر واتساب للحصول على عرض سعر فوري.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">نشتري جميع أنواع الأثاث والأجهزة الكهربائية</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">تقييم عادل وسريع خلال دقائق</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">خدمة نقل مجانية في جميع أحياء جدة</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">دفع فوري عند الاستلام</span>
                </li>
              </ul>

              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>📱</span>
                <span>اضغط هنا للتواصل معنا على واتساب</span>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/اثاث مستعمل في جدة غرفة نوم وغسالة وثلاجة وغسالة صحون وطاولة وكراسي ودولاب وستائر.webp"
                  alt="شراء اثاث مستعمل في جدة - غرفة نوم كاملة مع أجهزة كهربائية | ثلاجة وغسالة وغسالة صحون ودولاب وطاولة وكراسي وستائر بأعلى الأسعار في جدة"
                  title="نشتري الأثاث المستعمل في جدة - غرف نوم وأجهزة كهربائية"
                  loading="eager"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium">تقييم فوري</p>
                <p className="text-xs opacity-90">في جدة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              لماذا نحن الخيار الأفضل لشراء الأثاث المستعمل في جدة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر خدمة شاملة ومتميزة لشراء الأثاث المستعمل والأجهزة الكهربائية في جدة مع الحرص على راحتكم ورضاكم التام
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* نص إضافي لتحسين SEO */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              خدمات شراء الأثاث المستعمل الشاملة في جدة
            </h3>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="mb-4">
                نحن <strong className="text-emerald-600">محلات شراء الأثاث المستعمل في جدة</strong> الرائدة في المملكة العربية السعودية. نقدم خدماتنا لجميع أحياء جدة بما في ذلك الروضة، الزهراء، النسيم، الصفا، المروة، البوادي، أبحر، والعزيزية. نتميز بخبرتنا الواسعة في تقييم وشراء جميع أنواع الأثاث المنزلي والمكتبي والأجهزة الكهربائية.
              </p>
              <p className="mb-4">
                خدماتنا تشمل <strong className="text-emerald-600">شراء الأثاث المستعمل</strong> من غرف النوم الكاملة، أطقم الكنب والجلوس، طاولات الطعام والقهوة، الخزائن والدواليب، المكاتب والكراسي المكتبية، بالإضافة إلى الأجهزة الكهربائية مثل المكيفات، الثلاجات، الغسالات، أفران الغاز والكهرباء، وأجهزة التلفزيون.
              </p>
              <p>
                نضمن لعملائنا الحصول على <strong className="text-emerald-600">أعلى الأسعار في السوق</strong> مع خدمة تقييم مجانية وفورية. فريقنا المتخصص يقوم بزيارة موقعكم في الوقت المناسب لكم، ونوفر خدمة النقل والتحميل مجاناً في جميع أنحاء جدة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أنواع الأثاث والأجهزة التي نشتريها في جدة
            </h2>
            <p className="text-xl text-gray-600">
              نشتري جميع أنواع الأثاث المستعمل المنزلي والمكتبي والأجهزة الكهربائية والمكيفات في جدة بأفضل الأسعار
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/usedfurniture 1.webp"
                  alt="شراء غرف نوم مستعملة في جدة - دولاب خشبي وسرير نوم مع كومودينو ومرآة بأعلى الأسعار"
                  title="نشتري غرف النوم المستعملة في جدة بأفضل الأسعار"
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">غرف النوم المستعملة</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/اثاث مستعمل في جدة اثاث الصالة والكنب.webp"
                  alt="شراء كنب مستعمل في جدة - أثاث صالة وكنب رمادي مع طاولة قهوة وسجاد بأعلى الأسعار في جدة"
                  title="نشتري الكنب وأثاث الصالة المستعمل في جدة"
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">أثاث الصالة والكنب</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/اثاث مستعمل في جدة اثاث المطبخ والاجهزة الكهربائية.webp"
                  alt="شراء أثاث مطبخ مستعمل في جدة - دواليب مطبخ وثلاجة وفرن وغسالة صحون ومايكرويف بأعلى الأسعار"
                  title="نشتري أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة"
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">أثاث المطبخ والأجهزة</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      {setCurrentPage && (
        <InternalLinks currentPage="home" setCurrentPage={setCurrentPage} />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبيع أثاثك المستعمل في جدة؟
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            تواصل معنا الآن للحصول على تقييم مجاني وسريع لأثاثك وأجهزتك الكهربائية
          </p>
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>📱</span>
            <span>اضغط هنا للتواصل معنا على واتساب</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
