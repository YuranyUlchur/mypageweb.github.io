import React from 'react';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { Navbar } from '../components/Navbar/Navbar';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import { PortfolioSection } from '../components/PortafolioSection/PortfolioSection';
import { Footer } from '../components/Footer/Footer';


const App = () => {
    return (
        <>
            <style jsx global>{`
        body {

          margin: 0;
          padding: 0;
          background-color:rgb(15, 22, 36);
          
          `}</style>
            <Navbar />
            <HeaderSection />
            <PortfolioSection />
            <AboutSection />
            <Footer />

        </>
    );
};

export default App;