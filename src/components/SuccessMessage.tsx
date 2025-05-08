import React, { useEffect, useState } from 'react';
import { CheckCircle, Pocket as Docker } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-8 mb-8 transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex items-center mb-6">
        <CheckCircle className="text-green-500 mr-4" size={48} />
        <Docker className="text-blue-500 ml-auto" size={36} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Congratulations!
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Build and Deployment of React Application using Docker is successful.
      </p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center text-gray-500 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>All services running</span>
          </div>
          <div className="ml-6 flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Containers healthy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;