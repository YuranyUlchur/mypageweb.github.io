import React, { useState } from 'react';
import './skillssection.module.css';
import styles from './skillssection.module.css';


const skillsData = {
    frontend: [
        { name: 'React', level: 'Avanzado', image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
        { name: 'WordPress', level: 'Avanzado', image: 'https://cdn-icons-png.flaticon.com/512/174/174881.png' },
        { name: 'Bootstrap', level: 'Avanzado', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
        { name: 'HTML', level: 'Avanzado', image: 'https://cdn-icons-png.flaticon.com/512/174/174854.png' },
        { name: 'CSS', level: 'Intermedio', image: 'https://cdn-icons-png.flaticon.com/512/888/888847.png' },
        { name: 'Javascript', level: 'Intermedio', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
        { name: 'Typescript', level: 'Intermedio', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
    ],
    backend: [
        { name: 'Node.js', level: 'Basico', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png' },
        { name: 'Python', level: 'Avanzado', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
        { name: 'MySql', level: 'Competente', image: 'https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png' },
        { name: 'SQL', level: 'Competente', image: 'https://cdn-icons-png.flaticon.com/512/337/337953.png' },
        { name: 'Git', level: 'Avanzado', image: 'https://www.espai.es/blog/wp-content/uploads/2018/09/git.jpg' },
        { name: 'Git Hub', level: 'Avanzado', image: 'https://icones.pro/wp-content/uploads/2021/06/symbole-github-gris.png' },
    ],
};

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('frontend');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section id="skills">
            <div className={styles.container}>
                <h2 className={styles.pageSectionHeadingSkills}>Mis Habilidades</h2>
                <div className={styles.categorySelector}>
                    <button
                        className={`${styles.categoryButton} ${selectedCategory === 'frontend' ? styles.active : ''}`}
                        onClick={() => handleCategoryChange('frontend')}
                    >
                        Frontend
                    </button>
                    <button
                        className={`${styles.categoryButton} ${selectedCategory === 'backend' ? styles.active : ''}`}
                        onClick={() => handleCategoryChange('backend')}
                    >
                        Backend
                    </button>
                </div>
                <div className={styles.row}>
                    {skillsData[selectedCategory].map((skill, index) => (
                        <div className={`${styles.colMd4}`} key={index}>
                            <div className={`${styles.card} mb-3`}>
                                <div className={`${styles.cardBody}`}>
                                    <div className={`${styles.skillInfo}`}>
                                        <h5 className={`${styles.cardTitle}`}>{skill.name}</h5>
                                        <p className={`${styles.cardText}`}>Nivel: {skill.level}</p>
                                    </div>
                                    <img src={skill.image} alt={skill.name} className={`${styles.skillImage}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { SkillsSection };