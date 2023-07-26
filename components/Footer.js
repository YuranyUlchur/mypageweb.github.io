import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './styles/pages.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer} id='contact'>
                <div className={styles.rowfooter}>
                    <div>
                        <h4 className={styles.titlelocation}>Locación</h4>
                        <p className={styles.plocation}>Cali - Colombia</p>
                    </div>
                    <div>
                        <h4 className={styles.titlecontact}>Contacto</h4>
                        <div className={styles.iconscontact}>
                            <a className={styles.btnSocial} href="https://twitter.com/YuranyUlchur"><FaTwitter /></a>
                            <a className={styles.btnSocial} href="https://www.linkedin.com/in/yuranyulchur/"><FaLinkedinIn /></a>
                            <a className={styles.btnSocial} href="https://github.com/YuranyUlchur"><FaGithub /></a>
                        </div>

                    </div>
                </div>
            </footer>
            <div className={styles.footerBottom}>
                <div>
                    <small>&copy; 2023 Yurany Ulchur</small>
                </div>
            </div>
        </>
    );
};
export { Footer };