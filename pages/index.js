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
            font-family: "Space Grotesk", sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('https://img.freepik.com/vector-premium/fondo-estrellas-ilustracion-vectorial-realista_230920-1395.jpg?w=900');
            background-size: cover;
            background-repeat: no-repeat;
            image-rendering: auto; 
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