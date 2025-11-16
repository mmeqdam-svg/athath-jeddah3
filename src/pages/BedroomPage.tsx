import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bed, CheckCircle, Phone, MessageCircle, Clock, TrendingUp, Award, Shield, DollarSign } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface BedroomPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact' | 'bedroom' | 'kitchen' | 'livingroom' | 'blog') => void;
}

const BedroomPage: React.FC<BedroomPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء غرف النوم المستعملة في جدة بأعلى الأسعار - أثاث جدة</title>
        <meta name="description" content="نشتري غرف النوم المستعملة في جدة بأفضل الأسعار. خبرة 15 عام في تقييم وشراء غرف النوم الخشبية والمودرن. تقييم فوري ونقل مجاني. اتصل الآن 0559781023" />
        <meta name="keywords" content="شراء غرف نوم مستعملة جدة، بيع غرفة نوم، غرف نوم خشب، غرف نوم مودرن، أثاث غرف النوم المستعمل، محلات شراء غرف النوم جدة" />
        <meta property="og:title" content="شراء غرف النوم المستعملة في جدة بأعلى الأسعار" />
        <meta property="og:description" content="نشتري غرف النوم المستعملة في جدة بأفضل الأسعار. خبرة 15 عام في تقييم وشراء غرف النوم." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-bedroom-furniture-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء غرف النوم المستعملة",
          "provider": {
            "@type": "LocalBusiness",
            "name": "أثاث جدة - لشراء الأثاث المستعمل في جدة",
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
          "description": "نشتري غرف النوم المستعملة في جدة بأعلى الأسعار مع خدمة تقييم مجانية ونقل فوري"
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
              "name": "شراء غرف النوم المستعملة",
              "item": "https://www.athath-jeddah-sa.com/buy-used-bedroom-furniture-jeddah"
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
                <Bed className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">خدمة متخصصة لغرف النوم</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                شراء غرف النوم المستعملة في جدة بأعلى الأسعار
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong className="text-emerald-600">أثاث جدة</strong> هي وجهتك المثالية لبيع غرف النوم المستعملة في جدة. مع خبرة تمتد لأكثر من <strong className="text-emerald-600">15 عاماً</strong> في تقييم وشراء الأثاث المستعمل، نضمن لك الحصول على أفضل سعر لغرفة نومك.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نشتري جميع أنواع غرف النوم المستعملة بما في ذلك غرف النوم الخشبية الفاخرة، غرف النوم المودرن، الغرف الكلاسيكية، وغرف نوم الأطفال. سواء كانت غرفة نومك كاملة أو أجزاء منها، نحن نقدم لك تقييماً عادلاً وفورياً خلال دقائق من تواصلك معنا.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">نشتري غرف النوم الكاملة والأجزاء المنفصلة</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">تقييم مجاني وفوري خلال دقائق</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">خدمة نقل مجانية في جميع أحياء جدة</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">دفع فوري نقداً عند الاستلام</span>
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
                  <span>تواصل واتساب للتقييم الفوري</span>
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
                  src="/usedfurniture 1.webp"
                  alt="شراء غرف نوم مستعملة في جدة - دولاب خشبي وسرير نوم بأعلى الأسعار"
                  title="نشتري غرف النوم المستعملة في جدة"
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
              أنواع غرف النوم المستعملة التي نشتريها في جدة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نشتري جميع أنواع وأحجام غرف النوم بغض النظر عن حالتها أو تصميمها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">غرف النوم الخشبية الفاخرة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم من خشب الزان الطبيعي</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم من خشب البلوط</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم الماليزية والإيطالية</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم ذات النقوش والحفر اليدوي</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">غرف النوم المودرن والعصرية</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم المودرن بتصاميم حديثة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم ذات الأدراج المدمجة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم بخزائن الملابس الواسعة</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>غرف النوم بإضاءة LED مدمجة</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">قطع غرف النوم المنفصلة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>أسرّة النوم بجميع المقاسات</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>خزائن الملابس والدواليب</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>طاولات الزينة والكومودينو</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>المراتب والفُرش</span>
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
              كيف يتم تقييم غرف النوم المستعملة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية احترافية في تقييم غرف النوم لضمان الحصول على أفضل سعر
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">نوع الخشب والجودة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نقوم بفحص نوع الخشب المستخدم في تصنيع غرفة النوم. الأخشاب الطبيعية مثل الزان والبلوط تحصل على تقييم أعلى. نفحص أيضاً جودة التصنيع والتشطيبات والدهانات المستخدمة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الحالة العامة للغرفة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نفحص الحالة العامة للغرفة من حيث الخدوش والكسور والتلف. غرف النوم التي تم الحفاظ عليها بشكل جيد تحصل على تقييم أفضل. حتى الغرف التي تحتاج إلى صيانة بسيطة نشتريها بأسعار عادلة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">اكتمال القطع والحجم</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نقيّم غرفة النوم بناءً على عدد القطع المتوفرة. الغرف الكاملة (سرير، دولاب، كومودينو، طاولة زينة) تحصل على سعر أعلى. كما نأخذ بعين الاعتبار حجم الغرفة ومساحة الدولاب.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">العلامة التجارية والتصميم</h3>
                    <p className="text-gray-700 leading-relaxed">
                      غرف النوم من علامات تجارية معروفة أو ذات تصميمات فريدة وأنيقة تحصل على تقييم أعلى. نقدر قيمة التصاميم الكلاسيكية والعصرية على حد سواء.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">لماذا تختار أثاث جدة لبيع غرفة نومك؟</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Award className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">خبرة 15 عام</p>
                      <p className="text-emerald-100 text-sm">نمتلك خبرة واسعة في تقييم وشراء غرف النوم المستعملة</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <DollarSign className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">أعلى الأسعار في السوق</p>
                      <p className="text-emerald-100 text-sm">نضمن لك الحصول على أفضل سعر لغرفة نومك</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">تقييم وشراء فوري</p>
                      <p className="text-emerald-100 text-sm">نقيّم غرفتك ونشتريها في نفس اليوم</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">مصداقية وأمان</p>
                      <p className="text-emerald-100 text-sm">نحن شركة موثوقة في جدة منذ سنوات</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">احصل على تقييم مجاني الآن</h4>
                <p className="text-gray-700 mb-4">
                  أرسل لنا صور غرفة نومك عبر واتساب وسنرد عليك خلال دقائق بعرض سعر مفصل
                </p>
                <a
                  href="https://wa.me/966559781023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  أرسل صور غرفة نومك الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خطوات بيع غرفة نوم مستعملة في جدة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عملية سهلة وسريعة تضمن لك راحة البال والحصول على أفضل سعر
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تواصل معنا</h3>
              <p className="text-gray-700 leading-relaxed">
                تواصل معنا عبر واتساب أو اتصل على 0559781023 وأخبرنا عن غرفة نومك
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">أرسل الصور</h3>
              <p className="text-gray-700 leading-relaxed">
                أرسل لنا صور واضحة لغرفة نومك من زوايا مختلفة لنتمكن من التقييم الدقيق
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">احصل على العرض</h3>
              <p className="text-gray-700 leading-relaxed">
                نرسل لك عرض السعر خلال دقائق. إذا وافقت، نحدد موعد الزيارة
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">النقل والدفع</h3>
              <p className="text-gray-700 leading-relaxed">
                نحضر لنقل الغرفة مجاناً ونسلمك المبلغ نقداً فوراً
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أسئلة شائعة حول شراء غرف النوم المستعملة في جدة
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تشترون غرف النوم التي بها عيوب أو خدوش؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم، نشتري غرف النوم بمختلف حالاتها. حتى لو كانت غرفتك تحتاج إلى صيانة بسيطة أو بها خدوش، نحن نقيمها بشكل عادل ونقدم لك سعراً مناسباً. خبرتنا في ترميم الأثاث تسمح لنا بشراء قطع متنوعة.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كم يستغرق التقييم والشراء؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                التقييم الأولي يتم خلال دقائق عبر الصور. بعد موافقتك على السعر، يمكننا الحضور في نفس اليوم أو في الموعد الذي يناسبك لإتمام عملية الشراء والنقل. العملية بأكملها لا تستغرق أكثر من ساعة.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تشترون أجزاء من غرفة النوم أم الغرفة كاملة فقط؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نشتري كلاهما. سواء كنت ترغب ببيع الغرفة كاملة أو قطعة واحدة مثل السرير أو الدولاب فقط، نحن نقدم تقييماً عادلاً لكل قطعة. لا توجد قيود على عدد القطع.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل النقل مجاني حقاً؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم، خدمة النقل مجانية تماماً في جميع أحياء جدة. نحن نتحمل تكلفة النقل بالكامل بما في ذلك الفك والتركيب والتحميل. لن تدفع أي شيء إضافي.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                في أي مناطق جدة تقدمون الخدمة؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نغطي جميع أحياء ومناطق جدة بما في ذلك: الروضة، الزهراء، النسيم، الصفا، المروة، البوادي، أبحر، العزيزية، السلامة، الحمراء، الشاطئ، وجميع الأحياء الأخرى. أينما كنت في جدة، نحن في خدمتك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {setCurrentPage && (
        <InternalLinks currentPage="bedroom" setCurrentPage={setCurrentPage} />
      )}

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبيع غرفة نومك المستعملة؟
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            احصل على تقييم مجاني وفوري الآن. نضمن لك أفضل سعر في السوق مع خدمة نقل مجانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>أرسل صور غرفة نومك الآن</span>
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

export default BedroomPage;
