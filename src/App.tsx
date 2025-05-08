import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'CI/CD Docker Dashboard | Sagar Kakkala';
    
    // Optional: Add docker favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png";
    }
  }, []);

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Dashboard />
    </div>
  );
}

export default App;