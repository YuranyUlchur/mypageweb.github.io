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
                <link rel='icon' type='image/x-icon' href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfObljSOB_DvDHNTgYx8N4TmnZrV2XuOfsKMZyRSCZljRNyTTQsyJWOPA9rQ2hs-lD4iA&usqp=CAU' />
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