import React from 'react';
import { Helmet } from 'react-helmet-async';
import posts from '../data/posts';

type PostPageProps = {
  slug: string;
  navigate?: (path: string) => void;
};

const PostPage: React.FC<PostPageProps> = ({ slug }) => {
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return <div className="max-w-4xl mx-auto py-12"><h1>المقال غير موجود</h1></div>;
  }

  const canonical = `https://www.athath-jeddah-sa.com/blog/${post.slug}`;
  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>{post.title} - أثاث جدة</title>
        <meta name="description" content={post.excerpt || ''} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </article>
    </div>
  );
};

export default PostPage;