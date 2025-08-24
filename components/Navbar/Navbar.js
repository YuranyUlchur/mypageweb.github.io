import React, { useCallback } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css';

const Navbar = () => {
    const handleScrollTop = useCallback(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <BootstrapNavbar bg="transparent" variant="dark" expand="lg" className={styles.navbar}>
            <BootstrapNavbar.Brand href="#page-top" className={` px-5 ${styles.navbarBrand}`}>
                <div className={styles.imageBlock}>
                    <img
                        src="img/logo.png"
                        alt="Ilustración Yurany"
                        className={styles.logo}
                    />
                </div>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${styles.containernav} px-5`}>
                <Nav>
                    <Nav.Link href="#portafolio" className={styles.navLink}>Portafolio</Nav.Link>
                    <Nav.Link href="#about" className={styles.navLink}>Sobre mi</Nav.Link>
                    <Nav.Link href="#skills" className={styles.navLink}>Habilidades</Nav.Link>
                    <Nav.Link href="#contact" className={styles.navLink}>Contacto</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
            <button
                type="button"
                className={styles.scrollTopButton}
                onClick={handleScrollTop}
                aria-label="Volver arriba"
            >
                ↑
            </button>
        </BootstrapNavbar>
    );
};

export { Navbar };
