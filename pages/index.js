import React from 'react';
import Head from 'next/head';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { Navbar } from '../components/Navbar/Navbar';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import { PortfolioSection } from '../components/PortafolioSection/PortfolioSection';
import { Footer } from '../components/Footer/Footer';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';


const App = () => {
    return (
        <>
            <Head>
                <title>PortafolioYurany</title>
                <link rel='icon' type='image/x-icon' href='https://img.freepik.com/vector-gratis/disenos-vector-degradado-logotipo-colorido-letra_343694-1188.jpg?w=740&t=st=1699374444~exp=1699375044~hmac=a494d7f75a45c32024d00b102ee7f86636ac45750cfadcc564417ca5cf106320' />
            </Head>
            <style jsx global>{`
        body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('https://w0.peakpx.com/wallpaper/622/373/HD-wallpaper-black-space-black-star-stars.jpg');

          `}</style>

            <Navbar />
            <HeaderSection />
            <PortfolioSection />
            <AboutSection />
            <SkillsSection />
            <ContactForm />
            <Footer />

        </>
    );
};


export default App;