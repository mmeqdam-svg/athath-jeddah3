import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Refrigerator, CheckCircle, Phone, MessageCircle, Wind, Microwave, Zap, Award, TrendingUp, Clock } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface KitchenPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact' | 'bedroom' | 'kitchen' | 'livingroom' | 'blog') => void;
}

const KitchenPage: React.FC<KitchenPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة - أثاث</title>
        <meta name="description" content="نشتري أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة: ثلاجات، مكيفات، غسالات، أفران، مايكرويف. تقييم فوري ونقل مجاني. خبرة 15 عام. اتصل 0559781023" />
        <meta name="keywords" content="شراء مكيفات مستعملة جدة، شراء ثلاجات مستعملة، شراء غسالات، أجهزة كهربائية مستعملة، شراء أثاث مطبخ، أفران مستعملة جدة" />
        <meta property="og:title" content="شراء أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة" />
        <meta property="og:description" content="نشتري المكيفات والثلاجات وأجهزة المطبخ المستعملة في جدة بأعلى الأسعار" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-kitchen-appliances-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء الأجهزة الكهربائية المستعملة",
          "provider": {
            "@type": "LocalBusiness",
            "name": "أثاث جدة- لشراء الأثاث المستعمل في جدة",
            "telephone": "+966559781023",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "جدة",
              "addressRegion": "منطقة مكة المكرمة",
              "addressCountry": "SA"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "جدة"
          },
          "description": "نشتري جميع أنواع الأجهزة الكهربائية المستعملة والمكيفات في جدة بأعلى الأسعار"
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
              "name": "شراء أثاث المطبخ والأجهزة الكهربائية",
              "item": "https://www.athath-jeddah-sa.com/buy-used-kitchen-appliances-jeddah"
            }
          ]
        })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-reverse space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <Refrigerator className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">متخصصون في الأجهزة الكهربائية</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                شراء أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong className="text-emerald-600">أثاث</strong> هي الخيار الأول في جدة لشراء الأجهزة الكهربائية المستعملة وأثاث المطبخ. نمتلك خبرة <strong className="text-emerald-600">15 عاماً</strong> في تقييم وشراء المكيفات والثلاجات والغسالات وجميع أجهزة المطبخ الكهربائية بأعلى الأسعار في السوق.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نشتري جميع أنواع الأجهزة الكهربائية المستعملة بما في ذلك المكيفات الشباك والسبليت، الثلاجات المنزلية والتجارية، الغسالات الفوق أوتوماتيك والعادية، الأفران الكهربائية والغاز، غسالات الصحون، المايكرويف، الشاشات، وجميع أجهزة المطبخ الصغيرة والكبيرة. كما نشتري دواليب وأثاث المطبخ الخشبي والألمنيوم.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">نشتري المكيفات المستعملة بجميع أنواعها</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">نشتري الثلاجات والفريزرات بكافة الأحجام</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">تقييم فوري للأجهزة خلال دقائق</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">خدمة فك وتركيب ونقل مجانية</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/966559781023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>واتساب للتقييم الفوري</span>
                </a>
                <a
                  href="tel:+966559781023"
                  className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>اتصل الآن</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/اثاث مستعمل في جدة اثاث المطبخ والاجهزة الكهربائية.webp"
                  alt="شراء أجهزة مطبخ مستعملة في جدة - ثلاجة وفرن ومايكرويف بأعلى الأسعار"
                  title="نشتري أجهزة المطبخ الكهربائية المستعملة في جدة"
                  loading="eager"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">سنة خبرة في جدة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أنواع الأجهزة الكهربائية التي نشتريها في جدة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نشتري جميع أنواع الأجهزة الكهربائية المنزلية والتجارية بأعلى الأسعار
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wind className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">المكيفات المستعملة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكيفات سبليت بجميع الأحجام</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكيفات شباك (صغيرة وكبيرة)</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكيفات مركزية وكاسيت</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكيفات محمولة وصحراوية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>جميع الماركات (LG، Samsung، Gree، إلخ)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Refrigerator className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الثلاجات والفريزرات</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>ثلاجات منزلية بجميع الأحجام</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>ثلاجات باب واحد وبابين</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>ثلاجات Side by Side</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>فريزرات عمودية وصندوقية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مبردات المياه (كولدير)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الغسالات والنشافات</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غسالات فوق أوتوماتيك</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غسالات نصف أوتوماتيك</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غسالات ذات تحميل أمامي</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>نشافات ملابس كهربائية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غسالات صحون بجميع الأنواع</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Microwave className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الأفران وأجهزة الطبخ</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>أفران كهربائية مدمجة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>أفران غاز بعيون متعددة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مايكرويف بجميع الأحجام</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>شفاطات المطبخ</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>شوايات كهربائية</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الأجهزة الصغيرة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>خلاطات وعصارات</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>ماكينات قهوة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>محمصات خبز وصانعات وافل</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكانس كهربائية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>مكاوي وأجهزة كي</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Refrigerator className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">أثاث المطبخ</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>دواليب مطبخ خشبية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>دواليب ألمنيوم</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>رخام المطبخ والحوض</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>طاولات طعام وكراسي</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>خزائن تخزين المؤن</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              شراء المكيفات المستعملة في جدة بأعلى الأسعار
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المكيفات من أكثر الأجهزة طلباً في السوق - نقدم أفضل الأسعار
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">مكيفات السبليت</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نشتري مكيفات السبليت بجميع قدراتها من 12,000 وحدة حرارية حتى 36,000 وحدة. نقيّم المكيف بناءً على الماركة، حالة الضاغط، وكفاءة التبريد. المكيفات الموفرة للطاقة (Inverter) تحصل على تقييم أعلى.
                </p>
                <div className="flex items-center space-x-reverse space-x-2 text-blue-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">نقدم خدمة فك وتركيب مجانية</span>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">مكيفات الشباك</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  المكيفات الشباك لا تزال شائعة في العديد من المنازل والمحلات التجارية. نشتري مكيفات الشباك بمختلف الأحجام والقدرات سواء كانت ساخن/بارد أو بارد فقط. نقيّم المكيف بناءً على حالته العامة وقدرته على التبريد.
                </p>
                <div className="flex items-center space-x-reverse space-x-2 text-blue-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">نشتري المكيفات حتى لو كانت تحتاج صيانة بسيطة</span>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">الماركات التي نشتريها</h4>
                <div className="grid grid-cols-2 gap-3 text-gray-700">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>LG</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Samsung</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Gree</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Carrier</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Midea</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>TCL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
                <Wind className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">عوامل تقييم المكيفات</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-reverse space-x-3">
                    <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">العمر والحالة</p>
                      <p className="text-blue-100 text-sm">المكيفات الأحدث والمحافظ عليها تحصل على سعر أعلى</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Award className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">الماركة والجودة</p>
                      <p className="text-blue-100 text-sm">الماركات العالمية المعروفة تحصل على تقييم أفضل</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Zap className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">كفاءة الطاقة</p>
                      <p className="text-blue-100 text-sm">المكيفات الموفرة (Inverter) أغلى في السعر</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">سرعة الخدمة</p>
                      <p className="text-blue-100 text-sm">نشتري ونزيل المكيف في نفس اليوم</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">نشتري المكيفات حتى لو كانت</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>تحتاج إلى تنظيف</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>تحتاج إلى إعادة تعبئة فريون</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>بها أعطال بسيطة يمكن إصلاحها</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>قديمة لكن تعمل بشكل جيد</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خطوات بيع أجهزتك الكهربائية في جدة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عملية سهلة وسريعة من البداية للنهاية
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تواصل معنا</h3>
              <p className="text-gray-700 leading-relaxed">
                اتصل أو راسلنا على واتساب وأخبرنا عن الجهاز أو المكيف الذي تريد بيعه
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">أرسل الصور والتفاصيل</h3>
              <p className="text-gray-700 leading-relaxed">
                أرسل صور الجهاز من زوايا مختلفة مع ذكر الماركة والموديل
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">التقييم والسعر</h3>
              <p className="text-gray-700 leading-relaxed">
                نرسل لك عرض السعر خلال دقائق بناءً على حالة الجهاز
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الاستلام والدفع</h3>
              <p className="text-gray-700 leading-relaxed">
                نحضر لاستلام الجهاز مع خدمة الفك والنقل ونسلمك المبلغ فوراً
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أسئلة شائعة حول شراء الأجهزة الكهربائية في جدة
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تشترون الأجهزة المعطلة أو التي لا تعمل؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم، نشتري الأجهزة حتى لو كانت معطلة أو بحاجة إلى صيانة. نقوم بتقييم الجهاز بناءً على إمكانية إصلاحه وقيمة قطع الغيار. بعض الأجهزة المعطلة قد تكون ذات قيمة بسبب قطعها أو إمكانية إصلاحها بتكلفة منخفضة.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كيف تقيّمون المكيفات والأجهزة الكهربائية؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نقيّم الأجهزة بناءً على عدة عوامل: الماركة والموديل، العمر الافتراضي، الحالة العامة، كفاءة الطاقة، وجود أعطال، وطلب السوق على هذا النوع من الأجهزة. لدينا خبرة 15 عام في تقييم الأجهزة الكهربائية في جدة مما يضمن لك الحصول على سعر عادل.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تقدمون خدمة فك المكيفات؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم بالتأكيد. نوفر فريق فنيين محترفين لفك المكيفات سواء السبليت أو الشباك بطريقة آمنة ومهنية. هذه الخدمة مجانية تماماً ضمن عملية الشراء. نتعامل مع المكيفات المثبتة في الأدوار العالية والأماكن الصعبة.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كم من الوقت يستغرق استلام الأجهزة؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                بعد الاتفاق على السعر، يمكننا الحضور في نفس اليوم أو في اليوم التالي حسب الموعد المناسب لك. عملية فك المكيفات والأجهزة الكبيرة ونقلها عادة ما تستغرق من 30 دقيقة إلى ساعة حسب نوع وعدد الأجهزة.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ماذا لو كان لدي عدة أجهزة للبيع؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ممتاز! عندما تبيع عدة أجهزة معاً، يمكننا تقديم عرض سعر أفضل. سواء كنت تنتقل إلى منزل جديد أو تجدد أجهزتك بالكامل، نحن نشتري كل شيء دفعة واحدة مما يوفر عليك الوقت والجهد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {setCurrentPage && (
        <InternalLinks currentPage="kitchen" setCurrentPage={setCurrentPage} />
      )}

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبيع أجهزتك الكهربائية والمكيفات؟
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            احصل على تقييم مجاني وفوري الآن. نضمن أعلى الأسعار مع خدمة فك ونقل مجانية في جدة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>أرسل صور أجهزتك الآن</span>
            </a>
            <a
              href="tel:+966559781023"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل الآن: 0559781023</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenPage;
