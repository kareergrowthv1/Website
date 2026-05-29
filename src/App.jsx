import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ProductDiscovery from './pages/ProductDiscovery';
import Integrations from './pages/Integrations';
import About from './pages/About';
import Stories from './pages/Stories';
import Footer from './components/layout/Footer';
import DemoModal from './components/ui/DemoModal';
import GetStartedModal from './components/ui/GetStartedModal';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDiscovery />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/integration" element={<Integrations />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>

        <Footer />

        {/* Global interactive overlays */}
        <DemoModal />
        <GetStartedModal />
      </div>
    </Router>
  );
}

export default App;
