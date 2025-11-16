import React from 'react';

type HeaderProps = {
  navigate: (path: string) => void;
  currentPath: string;
};

const Header: React.FC<HeaderProps> = ({ navigate, currentPath }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-xl font-bold">أثاث جدة</a>
        <nav className="space-x-4">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className={currentPath === '/' ? 'text-emerald-600 font-semibold' : ''}
          >الرئيسية</a>
          <a
            href="/blog"
            onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
            className={currentPath.startsWith('/blog') ? 'text-emerald-600 font-semibold' : ''}
          >المدونة</a>
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className={currentPath === '/contact' ? 'text-emerald-600 font-semibold' : ''}
          >تواصل معنا</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;