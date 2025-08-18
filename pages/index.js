import React from 'react';
import Head from 'next/head';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import { PortfolioSection } from '../components/PortafolioSection/PortfolioSection';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';


const App = () => {
    return (
        <>
            <Head>
                <title>Yurany</title>
                <link rel='icon' type='image/x-icon' href='https://img.freepik.com/vector-gratis/disenos-vector-degradado-logotipo-colorido-letra_343694-1188.jpg?w=740&t=st=1699374444~exp=1699375044~hmac=a494d7f75a45c32024d00b102ee7f86636ac45750cfadcc564417ca5cf106320' />
            </Head>
   

            <HeaderSection />
            <PortfolioSection />
            <AboutSection />
            <SkillsSection />
            <ContactForm />

        </>
    );
};


export default App;