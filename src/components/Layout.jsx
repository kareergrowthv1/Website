import React from 'react';
import Navbar from './Navbar';
import ScrollIndicator from './ScrollIndicator';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar />
      <ScrollIndicator />
      


      <main className="w-full relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 text-center bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xl font-extrabold tracking-tighter flex items-center justify-center gap-1 mb-6">
            <span className="text-black">Kareer</span>
            <span className="text-secondary italic">Growth</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">
             © 2026 KareerGrowth. All rights reserved. 
             <br/>
             <span className="text-xs mt-2 block opacity-50">Precise UI Clone of Goodfit.so</span>
          </p>
        </div>
      </footer>
      
      {/* Floating Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 bg-secondary rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-blue-500/20">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
             <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default Layout;
