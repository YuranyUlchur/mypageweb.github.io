import React from 'react';
import styles from './navbar.module.css';
import { BiPlanet } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <a className={styles.navbarBrand} href="#page-top">
                    <BiPlanet/>
                    MiPortafolio</a>
                <div className={styles.containernav}>
                    <ul>
                        <li>
                            <a className={styles.navLink} href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#about">Sobre mi</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };