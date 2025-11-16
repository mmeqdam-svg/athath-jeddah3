import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactButtons from './components/ContactButtons';
import posts from './data/posts';

function parsePath(pathname: string) {
  if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return pathname;
}

function App() {
  const [currentPath, setCurrentPath] = useState(parsePath(window.location.pathname));

  const navigate = useCallback((to: string) => {
    const normalized = parsePath(to);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  useEffect(() => {
    const onPop = () => setCurrentPath(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderPage = () => {
    if (currentPath === '/' ) return <HomePage setCurrentPage={() => {}} />;
    if (currentPath === '/blog') return <BlogPage navigate={navigate} />;
    if (currentPath === '/contact') return <ContactPage setCurrentPage={() => {}} />;
    if (currentPath === '/privacy') return <PrivacyPage />;
    if (currentPath === '/terms') return <TermsPage />;

    const blogPrefix = '/blog/';
    if (currentPath.startsWith(blogPrefix)) {
      const slug = currentPath.slice(blogPrefix.length);
      const exists = posts.some(p => p.slug === slug);
      if (exists) return <PostPage slug={slug} navigate={() => {}} />;
      return <div className="max-w-4xl mx-auto py-12"><h1>المقال غير موجود</h1></div>;
    }

    return <HomePage setCurrentPage={() => {}} />;
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header navigate={navigate} currentPath={currentPath} />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <footer className="bg-gray-900 text-gray-300 py-12"> 
      </footer>
      <ContactButtons />
    </div>
  );
}

export default App;