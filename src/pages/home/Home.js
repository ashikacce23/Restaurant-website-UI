import React from 'react';
import ChiefsSection from '../../component/chief/ChiefsSection';
import Hero from '../../component/hero-section/Hero';
import QuoteSection from '../../component/quote/QuoteSection';
import ImproveSkill from '../../component/skills/ImproveSkill';
import "./Home.scss"
function Home() {
  return (
      <>
      <div className="home_container">
          <Hero />
          <ImproveSkill />
          <QuoteSection />
          <ChiefsSection />
      </div>
 
      </>
  )
}

export default Home;
