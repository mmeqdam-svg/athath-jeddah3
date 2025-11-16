import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شروط الخدمة - أثاث جدة</title>
        <meta name="description" content="شروط الخدمة والاستخدام لموقع أثاث جدة" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/terms" />
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-reverse space-x-3 mb-6">
            <FileText className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">شروط الخدمة</h1>
          </div>
          <p className="text-lg text-gray-600">آخر تحديث: نوفمبر 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة</h2>
            <p>
              تحدد شروط الخدمة هذه الشروط والأحكام التي تحكم استخدام خدمات أثاث لشراء الأثاث المستعمل والأجهزة الكهربائية. باستخدامك لخدماتنا، فإنك توافق على هذه الشروط.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. تعريف الخدمات</h2>
            <p>
              خدماتنا تشمل: تقييم الأثاث والأجهزة الكهربائية، شراء الأثاث والأجهزة المستعملة، خدمة النقل والفك والتركيب. جميع الخدمات متوفرة في جدة والمناطق المحيطة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. شروط الشراء</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>التقييم الأولي يتم بناءً على الصور والمعلومات المقدمة</li>
              <li>الفحص النهائي يتم في موقع العميل قبل الشراء النهائي</li>
              <li>السعر النهائي قد يختلف عن السعر المبدئي حسب حالة الأثاث الفعلية</li>
              <li>الدفع يتم نقداً عند استلام الأثاث</li>
              <li>نحتفظ بالحق في رفض الشراء إذا اختلفت الحالة عن الصور</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. خدمة النقل</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>خدمة النقل مجانية لجميع البيع في جدة</li>
              <li>الفك والتركيب يتم بواسطة فريق متخصص</li>
              <li>العميل مسؤول عن إزالة الأشياء الشخصية من الأثاث</li>
              <li>ننقل الأثاث في الحالة التي هو عليها</li>
              <li>نحتفظ بالحق في عدم نقل الأثاث الثقيل جداً أو المحظور</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. مسؤولية العميل</h2>
            <p>العميل يتحمل المسؤولية عن:</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>تقديم معلومات دقيقة وصحيحة عن الأثاث</li>
              <li>ضمان الوصول الآمن للعاملين</li>
              <li>إزالة الأشياء الثمينة من الأثاث قبل النقل</li>
              <li>توفير موقف سيارة أو مكان آمن لعاملينا</li>
              <li>الإفصاح عن أي أضرار أو مشاكل في الأثاث</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. سياسة الإلغاء والاسترجاع</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>يمكن إلغاء الموعد قبل 24 ساعة من الزيارة</li>
              <li>بعد استلام الأثاث من العميل، لا يمكن استرجاعه</li>
              <li>في حالة عدم تطابق السعر المتفق عليه مع حالة الأثاث، يحق للعميل رفض البيع</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. الالتزامات القانونية</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>الأثاث يجب أن يكون ملك العميل أو لديه الحق في بيعه</li>
              <li>الأثاث لا يجب أن يكون مسروقاً أو مرهوناً</li>
              <li>العميل يضمن عدم انتهاكه لأي حقوق ملكية فكرية</li>
              <li>نحن لا نقبل بيع أثاث مشبوه أو الأصل غير معروف</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. تحديد المسؤولية</h2>
            <p>
              أثاث غير مسؤول عن أي أضرار غير مباشرة أو تبعية ناجمة عن استخدام خدماتنا. مسؤوليتنا محدودة بمبلغ الشراء الذي تم الاتفاق عليه.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. القانون الحاكم</h2>
            <p>
              تخضع هذه الشروط للقوانين والأنظمة المعمول بها في المملكة العربية السعودية. أي نزاع يتم حله وفقاً للقوانين السعودية.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. التغييرات على الشروط</h2>
            <p>
              نحتفظ بالحق في تحديث هذه الشروط في أي وقت. التغييرات الجوهرية سيتم إخطار العملاء بها مقدماً.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. الاتصال والشكاوى</h2>
            <p>
              إذا كان لديك أي شكاوى أو استفسارات، يرجى التواصل معنا:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>الهاتف:</strong> 0559781023</p>
              <p><strong>واتساب:</strong> 0559781023</p>
              <p><strong>البريد الإلكتروني:</strong> info@athath-jeddah.com</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-600">
              بموافقتك على استخدام خدماتنا، أنت توافق على جميع شروط الخدمة هذه. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
