import React from 'react';
import Hero from '../components/home/Hero';
import VideoSection from '../components/home/VideoSection';
import LandingFeatureCards from '../components/home/LandingFeatureCards';
import BusinessStories from '../components/home/BusinessStories';
import LatestNews from '../components/home/LatestNews';
import PostCTA from '../components/home/PostCTA';

const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <VideoSection />
      <LandingFeatureCards />
      <BusinessStories />
      <LatestNews />
      <PostCTA />
    </main>
  );
};

export default Home;
