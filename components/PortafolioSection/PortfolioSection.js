import React, { useState, useEffect, useRef } from 'react';
import styles from './portafolio.module.css';

const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const cardRef = useRef(null);


    const projects = [
        {
            id: 1,
            title: "Simple shell",
            imageSrc: "./public/img/simpleshell.jpg",
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
            imageSrc: "/img/holbietalenhub.jpeg",
            description: "Proyecto hecho para la empresa Coderise, donde se realizo un sistema de reclutamiento entre empresas y estudiantes llamado Holbie Talent Hub.",
            Habilidades: ["HTML", "SCSS", "TypeScript", "React.js", "Next.js", "JavaScript"],
            link: "https://github.com/YuranyUlchur/holbie-talent-hub-client",
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
            <h2 className={styles.pageSectionHeading}>Portfolio</h2>
            <div className={styles.containerimgfluid}>
                {projects.map((project) => (
                    <div key={project.id}>

                        <img
                            className={styles.imgfluid}
                            src={project.imageSrc}
                            alt={project.title}
                            onClick={() => handleImageClick(project.id)}
                        />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className={styles.projectCard} ref={cardRef}>
                    <h3>{projects.find((project) => project.id === selectedProject).title}</h3>
                    <p>{projects.find((project) => project.id === selectedProject).description}</p>

                    {/* Agregar las aptitudes después de la descripción */}
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
                                Ver enlace del proyecto
                            </a>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export { PortfolioSection };