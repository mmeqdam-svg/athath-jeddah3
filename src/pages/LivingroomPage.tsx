import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sofa, CheckCircle, Phone, MessageCircle, TrendingUp, Award, Clock, Zap } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';

interface LivingroomPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'faq' | 'contact' | 'bedroom' | 'kitchen' | 'livingroom' | 'blog') => void;
}

const LivingroomPage: React.FC<LivingroomPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء كنب وأثاث الصالة المستعمل في جدة بأعلى الأسعار - أثاث</title>
        <meta name="description" content="نشتري الكنب والأثاث المنزلي المستعمل في جدة: كنب فاخر، كراسي جلوس، طاولات قهوة، ستائر. تقييم فوري ونقل مجاني. خبرة 15 عام. اتصل 0559781023" />
        <meta name="keywords" content="شراء كنب مستعمل جدة، بيع كنب، أثاث صالة مستعمل، كنب جلد، كنب ستائر، مجموعات جلوس مستعملة جدة" />
        <meta property="og:title" content="شراء كنب وأثاث الصالة المستعمل في جدة بأعلى الأسعار" />
        <meta property="og:description" content="نشتري الكنب والأثاث المنزلي المستعمل في جدة بأفضل الأسعار مع خدمة نقل مجانية" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-livingroom-sofas-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء الكنب والأثاث المنزلي المستعمل",
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
          "description": "نشتري الكنب وأثاث الصالة والمنزل المستعمل في جدة بأعلى الأسعار"
        })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-reverse space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <Sofa className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">متخصصون في الكنب والأثاث المنزلي</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                شراء كنب وأثاث الصالة المستعمل في جدة بأعلى الأسعار
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong className="text-emerald-600">أثاث جدة</strong> هي الخيار الأمثل لبيع الكنب وأثاث الصالة في جدة. بخبرة <strong className="text-emerald-600">15 عاماً</strong> في تقييم وشراء الكنب الفاخر والأثاث المنزلي، نضمن لك الحصول على أفضل سعر للكنب المستعمل.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نشتري جميع أنواع الكنب المستعملة بما في ذلك الكنب الجلد الفاخر، الكنب القماش المريح، الكنب الكلاسيكي الأنيق، والكنب الحديث. كما نشتري الكراسي المفردة، الأريكات، طاولات القهوة، الرفوف والستائر.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">نشتري الكنب الجلد والقماش بجميع الحالات</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">تقييم متخصص وعادل للكنب الفاخر</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">خدمة نقل وفك مجانية في جدة</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">دفع فوري نقداً</span>
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
                  src="/اثاث مستعمل في جدة اثاث الصالة والكنب.webp"
                  alt="شراء كنب مستعمل في جدة - كنب جلد فاخر بأعلى الأسعار"
                  title="نشتري الكنب والأثاث المنزلي المستعمل في جدة"
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
              أنواع الكنب والأثاث المنزلي التي نشتريها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نشتري جميع أنواع وألوان وأحجام الكنب والأثاث المنزلي المستعمل
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الكنب الجلد الفاخر</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• كنب جلد طبيعي أصلي</li>
                <li>• كنب جلد مستورد من الخارج</li>
                <li>• كنب جلد مع رؤوس متحركة</li>
                <li>• كنب جلد قابل للفرد</li>
                <li>• كنب جلد مصري وخليجي</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الكنب القماش المريح</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• كنب قماش فاخر برّاق</li>
                <li>• كنب قماش مخملي</li>
                <li>• كنب قماش عادي متين</li>
                <li>• كنب مع وسائد طرية</li>
                <li>• كنب مع أغطية قابلة للغسل</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الكنب الكلاسيكي والحديث</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• كنب كلاسيكي بنقوش فخمة</li>
                <li>• كنب حديث بتصاميم عصرية</li>
                <li>• كنب زاوي متعدد الأشكال</li>
                <li>• كنب مودرن بألوان محايدة</li>
                <li>• كنب إيطالي وتركي</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الكراسي والأريكات</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• كراسي جلوس مفردة</li>
                <li>• أريكات مريحة فردية</li>
                <li>• كراسي بذراعين</li>
                <li>• مقاعد بدون ظهر</li>
                <li>• كراسي هزاز ودوارة</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الطاولات والرفوف</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• طاولات القهوة الخشبية</li>
                <li>• طاولات جانبية فاخرة</li>
                <li>• طاولات مع أدراج تخزين</li>
                <li>• رفوف جدارية</li>
                <li>• وحدات تخزين أثاث الصالة</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">الستائر والإكسسوارات</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• ستائر فاخرة ثقيلة</li>
                <li>• ستائر رولو وشيش</li>
                <li>• ستائر قماشية عالية الجودة</li>
                <li>• وسائد ديكور</li>
                <li>• أغطية أرضيات وسجاد</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              كيف نقيّم الكنب والأثاث المنزلي؟
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">جودة المادة</h3>
              <p className="text-gray-700 leading-relaxed">
                نفحص جودة الجلد أو القماش المستخدم. الكنب الجلد الطبيعي يحصل على تقييم أعلى من الجلد الصناعي. القماش الفاخر والمستورد يحصل على سعر أفضل.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">الحالة والنظافة</h3>
              <p className="text-gray-700 leading-relaxed">
                نقيّم حالة الكنب من حيث النظافة والخدوش والتمزقات. الكنب النظيف والمحافظ عليه يحصل على تقييم أفضل. حتى الكنب الذي يحتاج تنظيف نشتريه بسعر عادل.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">التصميم والحجم</h3>
              <p className="text-gray-700 leading-relaxed">
                الكنب الأنيق والحديث الذي يتناسب مع الأذواق المختلفة يحصل على سعر أعلى. كما نأخذ بعين الاعتبار حجم الكنب وعدد الأماكن والوسائد.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">العلامة التجارية</h3>
              <p className="text-gray-700 leading-relaxed">
                الكنب من علامات تجارية معروفة والمستورد من دول أوروبية يحصل على تقييم أفضل. الكنب الإيطالي والتركي والمصري الفاخر نقيّمه بسعر عالي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أسئلة شائعة حول شراء الكنب والأثاث المنزلي
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تشترون الكنب الممزق أو القذر؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم، نشتري الكنب بمختلف حالاته. حتى لو كان الكنب يحتاج تنظيف عميق أو إصلاح بسيط، نقيّمه بشكل عادل. خبرتنا في تنظيف وترميم الأثاث تسمح لنا بشراء قطع متنوعة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كيف تقومون بنقل الكنب الثقيل؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                فريقنا المتخصص يستخدم معدات حديثة لفك ونقل الكنب بأمان. نستخدم غطاء حماية لضمان عدم تعرض الكنب للأتربة أثناء النقل. النقل مجاني تماماً.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                هل تشترون كنب قديم جداً؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نعم، حتى الكنب القديم الذي قد يكون في منزلك من 20 سنة فأكثر نشتريه. نقيّمه بناءً على حالته والمواد المستخدمة. بعض الكنب القديم يكون بجودة عالية.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                كم يستغرق الشراء والنقل؟
              </h3>
              <p className="text-gray-700 leading-relaxed">
                بعد الاتفاق على السعر، يمكننا الحضور في نفس اليوم أو اليوم التالي. عملية فك النقل عادة لا تستغرق أكثر من ساعة حسب حجم وعدد قطع الأثاث.
              </p>
            </div>
          </div>
        </div>
      </section>

      {setCurrentPage && (
        <InternalLinks currentPage="livingroom" setCurrentPage={setCurrentPage} />
      )}

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبيع الكنب والأثاث المنزلي؟
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            احصل على تقييم مجاني الآن. نضمن أفضل سعر مع خدمة نقل مجانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>أرسل صور الكنب الآن</span>
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

export default LivingroomPage;
