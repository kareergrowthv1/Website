import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ProductDiscovery from './pages/ProductDiscovery';
import Integrations from './pages/Integrations';
import IntegrationDetail from './pages/IntegrationDetail';
import About from './pages/About';
import Stories from './pages/Stories';
import Footer from './components/layout/Footer';
import DemoModal from './components/ui/DemoModal';
import GetStartedModal from './components/ui/GetStartedModal';
import VisitLanding from './pages/visit/VisitLanding';

import CandidatesPlatform from './pages/services/CandidatesPlatform';
import RecruitersPlatform from './pages/services/RecruitersPlatform';
import CollegesInstitutes from './pages/services/CollegesInstitutes';

import SkillGapReports from './pages/research/SkillGapReports';
import PlacementTrends from './pages/research/PlacementTrends';
import IntegrityStandards from './pages/research/IntegrityStandards';
import VettingCaseStudies from './pages/research/VettingCaseStudies';

import AIResumes from './pages/resources/AIResumes';
import MockInterviewSimulator from './pages/resources/MockInterviewSimulator';
import AssessmentPrep from './pages/resources/AssessmentPrep';
import HelpCenter from './pages/resources/HelpCenter';

import OurStory from './pages/about/OurStory';
import CorePrinciples from './pages/about/CorePrinciples';
import LeadershipTeam from './pages/about/LeadershipTeam';
import PlacementSuccess from './pages/about/PlacementSuccess';

import News from './pages/media/News';
import PressReleases from './pages/media/PressReleases';

import LegalTerms from './pages/legal/LegalTerms';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

import FeatureDetail from './pages/features/FeatureDetail';
import MockInterviewDetail from './pages/features/MockInterviewDetail';
import KareerGrowthHuntDetail from './pages/features/KareerGrowthHuntDetail';
import TrackerDetail from './pages/features/TrackerDetail';
import PracticeHubDetail from './pages/features/PracticeHubDetail';
import CareerPlatformDetail from './pages/features/CareerPlatformDetail';

function MainSite() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDiscovery />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/integration" element={<Integrations />} />
        <Route path="/integrations/:slug" element={<IntegrationDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />

        <Route path="/services/candidates" element={<CandidatesPlatform />} />
        <Route path="/services/recruiters" element={<RecruitersPlatform />} />
        <Route path="/services/institutes" element={<CollegesInstitutes />} />

        <Route path="/research/skill-gap" element={<SkillGapReports />} />
        <Route path="/research/placement-trends" element={<PlacementTrends />} />
        <Route path="/research/integrity-standards" element={<IntegrityStandards />} />
        <Route path="/research/vetting-studies" element={<VettingCaseStudies />} />

        <Route path="/resources/ai-resumes" element={<AIResumes />} />
        <Route path="/resources/mock-interview" element={<MockInterviewSimulator />} />
        <Route path="/resources/assessment-prep" element={<AssessmentPrep />} />
        <Route path="/resources/help-center" element={<HelpCenter />} />

        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/core-principles" element={<CorePrinciples />} />
        <Route path="/about/leadership" element={<LeadershipTeam />} />
        <Route path="/about/placement-success" element={<PlacementSuccess />} />

        <Route path="/media/news" element={<News />} />
        <Route path="/media/press-releases" element={<PressReleases />} />

        <Route path="/legal/terms" element={<LegalTerms />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />

        <Route path="/features/mock-interview" element={<MockInterviewDetail />} />
        <Route path="/features/kareergrowth-hunt" element={<KareerGrowthHuntDetail />} />
        <Route path="/features/tracker" element={<TrackerDetail />} />
        <Route path="/features/practice-hub" element={<PracticeHubDetail />} />
        <Route path="/features/career-platform" element={<CareerPlatformDetail />} />
        <Route path="/features/:slug" element={<FeatureDetail />} />
      </Routes>
      <Footer />
      <DemoModal />
      <GetStartedModal />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Standalone marketing / lead capture — no site header or footer */}
        <Route path="/visit/:code" element={<VisitLanding />} />
        <Route path="/*" element={<MainSite />} />
      </Routes>
    </Router>
  );
}

export default App;
