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
          background-image: url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810112.jpg?w=740&t=st=1690325408~exp=1690326008~hmac=cb045b142838e08da560c662782048607ab65c8f6e8ab38ddf645992e7d14f8a');
          background-size: cover;
          background-repeat: no-repeat;
        }
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