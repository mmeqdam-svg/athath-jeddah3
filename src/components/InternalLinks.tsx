import React from 'react';
import { Home, Users, HelpCircle, Phone, BookOpen, Bed, Refrigerator, Sofa } from 'lucide-react';

interface InternalLinksProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'about' | 'faq' | 'contact' | 'bedroom' | 'kitchen' | 'livingroom' | 'blog') => void;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ currentPage, setCurrentPage }) => {
  const links = [
    { id: 'home', label: 'الصفحة الرئيسية', icon: Home, description: 'شراء الأثاث المستعمل في جدة' },
    { id: 'bedroom', label: 'غرف النوم المستعملة', icon: Bed, description: 'شراء غرف نوم فاخرة' },
    { id: 'kitchen', label: 'أثاث المطبخ والأجهزة', icon: Refrigerator, description: 'نشتري المكيفات والثلاجات' },
    { id: 'livingroom', label: 'الكنب والأثاث المنزلي', icon: Sofa, description: 'شراء كنب بجميع الأنواع' },
    { id: 'blog', label: 'المدونة', icon: BookOpen, description: 'نصائح العناية بالأثاث' },
    { id: 'about', label: 'من نحن', icon: Users, description: 'تعرف على خدماتنا' },
    { id: 'faq', label: 'الأسئلة الشائعة', icon: HelpCircle, description: 'إجابات على أسئلتك' },
    { id: 'contact', label: 'تواصل معنا', icon: Phone, description: 'للتقييم والاستفسار' }
  ];

  const filteredLinks = links.filter(link => link.id !== currentPage).slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          صفحات مفيدة أخرى
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id as any)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-right group"
            >
              <div className="flex items-start space-x-reverse space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-500 transition-colors flex-shrink-0">
                  <link.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{link.label}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{link.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
