import React from 'react';
import Header from './Header';
import SuccessMessage from './SuccessMessage';
import StatusCard from './StatusCard';
import { Clock, Server, Activity, Share2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <SuccessMessage />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatusCard 
            title="Deployment Time" 
            value="2m 34s" 
            icon={<Clock className="text-blue-500" />} 
            description="Last deployed today at 14:32" 
          />
          <StatusCard 
            title="Container Status" 
            value="Healthy" 
            icon={<Server className="text-green-500" />} 
            description="3 containers running" 
            status="success"
          />
          <StatusCard 
            title="CPU Usage" 
            value="12%" 
            icon={<Activity className="text-purple-500" />} 
            description="Well within limits" 
            status="success"
          />
          <StatusCard 
            title="Network" 
            value="58 Mbps" 
            icon={<Share2 className="text-indigo-500" />} 
            description="Outbound traffic" 
          />
        </div>
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Sagar Kakkala • Powered by Docker and React</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;