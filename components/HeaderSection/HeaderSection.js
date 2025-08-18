import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from '../Navbar/Navbar';

const HeaderSection = () => {
    return (
        <header className={styles.masthead} role="banner" aria-label="Portada principal">
            <Navbar />

            <div className={styles.bgStars} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.illustration} aria-hidden="true">
                    <img src="/img/banner.png" alt="" aria-hidden="true" />
                </div>

                <div className={styles.content}>
                    <p className={styles.micro}>👋 Hola, soy <strong>Yurany</strong></p>
                    <h1 className={styles.title}>
                        Bienvenid@ a mi <span className={styles.highlight}>Portafolio</span>
                    </h1>

                    <p className={styles.subtitle}>Desarrolladora de software — Diseño interfaces & experiencias</p>

                    <div className={styles.ctaRow}>
                        <a
                            href="/img/CV.pdf"
                            className={styles.btn}
                            download="CV_Yurany_Ulchur.pdf"
                            aria-label="Descargar CV de Yurany Ulchur"
                            rel="noopener noreferrer"
                        >
                            Descargar CV
                            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { HeaderSection };
