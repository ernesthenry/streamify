import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Streamify Dashboard</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

