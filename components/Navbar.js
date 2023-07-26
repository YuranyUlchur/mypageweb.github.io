import React from 'react';
import styles from './styles/pages.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <a className={styles.navbarBrand} href="#page-top">MiPortafolio</a>
                <div className={styles.containernav}>
                    <ul>
                        <li>
                            <a className={styles.navLink} href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#about">About</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };