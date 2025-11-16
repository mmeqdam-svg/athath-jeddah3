import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>سياسة الخصوصية - أثاث جدة</title>
        <meta name="description" content="سياسة الخصوصية لموقع أثاث جدة - نحرص على حماية بيانات عملائنا" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/privacy" />
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-reverse space-x-3 mb-6">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">سياسة الخصوصية</h1>
          </div>
          <p className="text-lg text-gray-600">آخر تحديث: نوفمبر 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة</h2>
            <p>
              في أثاث، نحن نقدّر خصوصيتك ونلتزم بحماية بيانات العملاء الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند التعامل معنا.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. المعلومات التي نجمعها</h2>
            <p>نقوم بجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>معلومات الاتصال (الاسم، رقم الهاتف، البريد الإلكتروني)</li>
              <li>عنوان المنزل والموقع الجغرافي</li>
              <li>تفاصيل الأثاث والأجهزة المراد بيعها</li>
              <li>سجل التفاعلات معنا (رسائل واتساب، اتصالات)</li>
              <li>بيانات الجهاز (عنوان IP، نوع المتصفح)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. كيفية استخدام البيانات</h2>
            <p>نستخدم معلوماتك الشخصية للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>تقديم خدماتنا وتقييم الأثاث والأجهزة</li>
              <li>التواصل معك بخصوص العروض والأسعار</li>
              <li>تحسين جودة خدماتنا</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. حماية البيانات</h2>
            <p>
              نتخذ تدابير أمنية مناسبة لحماية بيانات عملائنا من الوصول غير المصرح والتغيير والإفصاح. جميع المعلومات الحساسة يتم التعامل معها بسرية تامة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. مشاركة البيانات</h2>
            <p>
              لا نشارك بيانات عملائنا الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>عند الحاجة لتقديم الخدمة (مثل الفريق الفني)</li>
              <li>الامتثال للقوانين والأنظمة</li>
              <li>حماية حقوقنا أو حقوق الآخرين</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. حقوقك</h2>
            <p>لديك الحقوق التالية:</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>الوصول إلى بيانات عنك</li>
              <li>تصحيح البيانات الخاطئة</li>
              <li>طلب حذف البيانات</li>
              <li>الاعتراض على معالجة بيانات معينة</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. اتصل بنا</h2>
            <p>
              إذا كان لديك أسئلة حول سياسة الخصوصية أو خصوصيتك، يرجى التواصل معنا على:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>الهاتف:</strong> 0559781023</p>
              <p><strong>واتساب:</strong> 0559781023</p>
              <p><strong>الموقع:</strong> جدة، المملكة العربية السعودية</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-600">
              تخضع هذه السياسة للقوانين المعمول بها في المملكة العربية السعودية. نحتفظ بالحق في تحديث هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
