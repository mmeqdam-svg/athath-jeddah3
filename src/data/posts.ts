export type Post = {
  id: string;
  title: string;
  slug: string; // استخدام slug باللغة الإنجليزية: e.g. "sofa-buy-jeddah"
  excerpt?: string;
  content?: string;
  category?: string; // مثلا 'furniture'
  published?: string;
};

const posts: Post[] = [
  {
    id: '1',
    title: 'بيع وشراء الكنب المستعمل في جدة',
    slug: 'sofa-buy-jeddah',
    excerpt: 'نشتري الكنب المستعمل بأفضل الأسعار مع خدمة النقل المجانية.',
    content: '<p>تفاصيل المقال هنا...</p>',
    category: 'furniture',
    published: '2025-10-01'
  },
  {
    id: '2',
    title: 'كيفية تجهيز غرفة النوم للبيع',
    slug: 'prepare-bedroom-for-sale',
    excerpt: 'نصائح سريعة لتحضير غرف النوم قبل البيع.',
    content: '<p>تفاصيل المقال هنا...</p>',
    category: 'advice',
    published: '2025-09-15'
  }
];

export default posts;