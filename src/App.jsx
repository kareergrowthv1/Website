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

// New Services Pages
import CandidatesPlatform from './pages/services/CandidatesPlatform';
import RecruitersPlatform from './pages/services/RecruitersPlatform';
import CollegesInstitutes from './pages/services/CollegesInstitutes';

// New Research Pages
import SkillGapReports from './pages/research/SkillGapReports';
import PlacementTrends from './pages/research/PlacementTrends';
import IntegrityStandards from './pages/research/IntegrityStandards';
import VettingCaseStudies from './pages/research/VettingCaseStudies';

// New Resources Pages
import AIResumes from './pages/resources/AIResumes';
import MockInterviewSimulator from './pages/resources/MockInterviewSimulator';
import AssessmentPrep from './pages/resources/AssessmentPrep';
import HelpCenter from './pages/resources/HelpCenter';

// New About Sub-pages
import OurStory from './pages/about/OurStory';
import CorePrinciples from './pages/about/CorePrinciples';
import LeadershipTeam from './pages/about/LeadershipTeam';
import PlacementSuccess from './pages/about/PlacementSuccess';

// New Media Pages
import News from './pages/media/News';
import PressReleases from './pages/media/PressReleases';

// New Legal Pages
import LegalTerms from './pages/legal/LegalTerms';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

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

          {/* Services routes */}
          <Route path="/services/candidates" element={<CandidatesPlatform />} />
          <Route path="/services/recruiters" element={<RecruitersPlatform />} />
          <Route path="/services/institutes" element={<CollegesInstitutes />} />

          {/* Research routes */}
          <Route path="/research/skill-gap" element={<SkillGapReports />} />
          <Route path="/research/placement-trends" element={<PlacementTrends />} />
          <Route path="/research/integrity-standards" element={<IntegrityStandards />} />
          <Route path="/research/vetting-studies" element={<VettingCaseStudies />} />

          {/* Resources routes */}
          <Route path="/resources/ai-resumes" element={<AIResumes />} />
          <Route path="/resources/mock-interview" element={<MockInterviewSimulator />} />
          <Route path="/resources/assessment-prep" element={<AssessmentPrep />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />

          {/* About Sub-pages routes */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/core-principles" element={<CorePrinciples />} />
          <Route path="/about/leadership" element={<LeadershipTeam />} />
          <Route path="/about/placement-success" element={<PlacementSuccess />} />

          {/* Media routes */}
          <Route path="/media/news" element={<News />} />
          <Route path="/media/press-releases" element={<PressReleases />} />

          {/* Legal routes */}
          <Route path="/legal/terms" element={<LegalTerms />} />
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
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

