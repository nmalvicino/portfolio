import './App.css';
import React from 'react';
import ServicesSection from './components/ui/services/ServicesSection';
import HeroSection from './components/ui/hero/HeroSection';
import ProjectsPage from './components/ui/projects/ProjectsPage';
import AboutMeSection from './components/ui/about/AboutMe';
import ContactMe from './components/ui/contact/ContactMe';
import { Navbar } from './components/ui/navbar/resizable-navbar';
import Footer from './components/ui/footer/Footer';
import CustomDivider from './components/ui/divider/CustomDivider';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CustomDivider />
        <section className='bg-main'>
          <ServicesSection />
          <ProjectsPage />
        </section>
        <AboutMeSection />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
