import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FeatureTabs from './components/FeatureTabs';
import AssessmentSection from './components/AssessmentSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Layout>
      <Hero />
      
      <div className="bg-[#f9fafb] bg-diagonal-pattern w-full pb-20 md:pb-32 relative">
        {/* Decorative Grid Lines - Hidden on mobile */}
        <div className="hidden lg:block vertical-grid-line left-[calc(50%-600px)]" />
        <div className="hidden lg:block vertical-grid-line right-[calc(50%-600px)]" />
        
        <div className="flex flex-col items-center">
          {/* Trusted By Box */}
          <div className="w-full max-w-[1200px] relative z-20">
            <TrustedBy />
          </div>

          {/* Main Content Box */}
          <div className="w-full max-w-[1200px] border-x-0 md:border-x border-b border-slate-200 relative z-20 bg-transparent">
            <div className="space-y-20 md:space-y-32 text-black py-20 md:py-32">
              <div className="px-4 md:px-6 space-y-20 md:space-y-32">
                <FeatureTabs />
                <AssessmentSection />
              </div>
              <div className="border-t border-slate-100">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
