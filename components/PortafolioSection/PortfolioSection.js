import React, { useState, useEffect, useRef } from 'react';
import styles from './portafolio.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const cardRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Simple shell",
            imageSrc: "img/simpleshell.jpg",
            description: "Implementación de un intérprete de linux que tiene un comportamiento similar al comando sh en linux, maneja conceptos del kernel de linux, llamadas al sistema y otros.",
            Habilidades: ["C", "Bash"],
            link: "https://github.com/YuranyUlchur/holbertonschool-simple_shell",
        },
        {
            id: 2,
            title: "Calculadora con React",
            imageSrc: "img/calculadora.jpeg",
            description: "Calculadora creada para conocer el lenguaje de React y colocar en practica mis habilidades",
            Habilidades: ["React.js", "Next.js"],
            link: "https://github.com/YuranyUlchur/calculatornext",
        },
        {
            id: 3,
            title: "Holbie talen hub",
            imageSrc: "img/holbietalenhub.jpeg",
            description: "Proyecto hecho para la empresa Coderise, donde se realizo un sistema de reclutamiento entre empresas y estudiantes llamado Holbie Talent Hub.",
            Habilidades: ["HTML", "SCSS", "TypeScript", "React.js", "Next.js", "JavaScript"],
            link: "https://github.com/YuranyUlchur/holbie-talent-hub-client",
        },
        {
            id: 4,
            title: "Film Catalog",
            imageSrc: "img/movies.jpg",
            description: "Proyecto hecho para desarrollar habilidades y colocar en practica conocimientos",
            Habilidades: ["HTML", "CSS", "React-Bootstrap", "React.js", "JavaScript"],
            link: "https://github.com/YuranyUlchur/Project-film-catalog",
        },
    ];

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setSelectedProject(null);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleImageClick = (projectId) => {
        setSelectedProject(projectId);
    };

    return (
        <section id="portfolio">
            <h2 className={styles.pageSectionHeading}>Portafolio</h2>
            <div className={styles.containerimgfluid}>
                <Carousel prevLabel="" nextLabel="" prevIcon={<span className={styles.customPrevArrow}>&#8249;</span>} nextIcon={<span className={styles.customNextArrow}>&#8250;</span>}>
                    {projects.map((project) => (
                        <Carousel.Item key={project.id} onClick={() => handleImageClick(project.id)}>
                            <img
                                className={styles.imgfluid}
                                src={project.imageSrc}
                                alt={project.title}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {selectedProject && (
                <div className={styles.projectCard} ref={cardRef}>
                    <h3>{projects.find((project) => project.id === selectedProject).title}</h3>

                    <p>{projects.find((project) => project.id === selectedProject).description}</p>
                    
                    <div>
                        <h4>Habilidades:</h4>
                        <ul>
                            {projects
                                .find((project) => project.id === selectedProject)
                                .Habilidades.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                        </ul>
                    </div>
                    {projects.find((project) => project.id === selectedProject).link && (
                        <div>
                            <a
                                href={projects.find((project) => project.id === selectedProject).link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.buttonlink}>Ver enlace del proyecto</button>
                            </a>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export { PortfolioSection };
