import React from 'react';
import { Helmet } from 'react-helmet-async';
import posts from '../data/posts';

type BlogPageProps = {
  navigate: (path: string) => void;
};

const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>المدونة - أثاث جدة</title>
        <meta name="description" content="مقالات ونصائح عن الأثاث وبيع المستعمل في جدة" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/blog" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">المدونة</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="text-emerald-600 font-semibold"
            >اقرأ المزيد</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;