import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/966559781023"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-reverse space-x-2 transition-all duration-300 hover:scale-105 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden group-hover:inline-block whitespace-nowrap bg-green-500 px-3 py-1 rounded-lg mr-2 text-sm">
          تواصل معنا
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
