import React from 'react';
import { Pocket as Docker } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-lg shadow-md mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Docker size={48} className="text-white animate-pulse" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Welcome to CI/CD World with Sagar Kakkala
          </h1>
          <p className="text-blue-100 mt-1 text-sm md:text-base">
            Containerization • Continuous Integration • Continuous Deployment
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <Docker size={32} className="text-white" />
      </div>
    </header>
  );
};

export default Header;