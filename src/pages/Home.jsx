import React from 'react';
import Hero from '../components/home/Hero';
import VideoSection from '../components/home/VideoSection';
import FeatureSection from '../components/home/Features';
import BusinessStories from '../components/home/BusinessStories';
import LatestNews from '../components/home/LatestNews';
import PostCTA from '../components/home/PostCTA';

const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <VideoSection />
      
      {/* Recruiter Section */}
      <FeatureSection persona="Recruitment" id="recruitment" showIntro={true} />
      
      {/* Institute Section */}
      <FeatureSection persona="Institute" id="institute" />

      <BusinessStories />
      
      <LatestNews />
      <PostCTA />
    </main>
  );
};

export default Home;
