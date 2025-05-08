import React, { ReactNode } from 'react';

interface StatusCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  status?: 'success' | 'warning' | 'error';
}

const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  value, 
  description, 
  icon,
  status = 'normal'
}) => {
  const statusColors = {
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200',
    normal: 'bg-white border-gray-200'
  };

  return (
    <div className={`rounded-lg shadow-sm p-6 border ${statusColors[status]} 
      hover:shadow-md transition-shadow duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium text-gray-700">{title}</h3>
        {icon}
      </div>
      <div className="mt-2">
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default StatusCard;