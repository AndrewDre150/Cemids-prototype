import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './App.css'; // Your custom CSS file
import Contact from './Components/Contact'
import CtaArea from './Components/CtaArea'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Map from './Components/Map'
import Navbar from './Components/Navbar'
import News from './Components/News'
import PricingSection from './Components/PricingSection'
import ServiceSection from './Components/ServiceSection'
import Sidebar from './Components/Sidebar'
import Story from './Components/Story'
import ScrollToTopButton from './Components/ScrollTop';
import Faqs from './Components/Faqs'
import FeaturesHomeTwo from './Components/FeaturesHomeTwo';
// import HomeOneHeader from './Components/HomeOneHeader';
import ServicesHomeOne from './Components/HomeQuiz';
import HeroHomeOne from './Components/HeroHomeOne';

import ChatbotBubble from './Components/ChatbotBubble';

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomeOneHeader/> */}
      <Sidebar/>
      {/* <HeroHomeOne/> */}
      <Hero />
      <Story/>
      {/* <FeaturesHomeTwo/> */}
      <ServiceSection />
      <ServicesHomeOne/>
      <CtaArea />
      <PricingSection />
      <Map />
      <News />
     
      <Faqs />
      <Contact />
      {/* <Chatbot/> */}
      <ChatbotBubble/>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
export default LandingPage;
