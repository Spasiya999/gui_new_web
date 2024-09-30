"use client";
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectSection = ({ projectsData = [] }) => {
    const projects = projectsData.payload || [];
    const [loading, setLoading] = useState(false);

    const getRadios = () => {
        if (typeof window !== "undefined") {
            const radioInputs = document.querySelectorAll('.projectInput');
            const ids = [];
            radioInputs.forEach((radioInput) => {
                const id = radioInput.id;
                ids.push(id);
            });
        }

        let index = 0;
        function clickRadio() {
            setTimeout(() => {
                if (typeof window !== "undefined") {
                    const element = document.getElementById(ids[index]);
                    if (element) {
                        element.click();
                    }
                    index = (index + 1) % ids.length;
                }n
                clickRadio();
            }, 8000);

        }
        clickRadio();
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            getRadios();
        }, 1000);
    }, []);

    const formatIndex = (index) => {
        return index.toString().padStart(2, '0');
    };

    return (
        <div className="container mt-5" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <h2 className="text-center text-blue fw-bold mb-4 pb-2 font-36">Showcasing Our Premier Projects</h2>
            {loading ? (
                <div className="w-100 py-4 d-flex justify-content-center">
                    <div className="spinner-grow text-blue" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="projectContainer d-md-flex d-block">
                    {projects.map((project, index) => (
                        <React.Fragment key={project.id}>
                            <input
                                className="projectInput"
                                type="radio"
                                name="slide"
                                id={`c${project.id}`}
                                defaultChecked={index === 0}
                                onChange={getRadios}
                            />
                            <label htmlFor={`c${project.id}`} className="projectCard">
                                <div className="projectRow">
                                    <div className="ms-1">
                                        <div className="d-flex flex-lg-column align-items-center my-2 my-xl-0">
                                            <div className="projectIcon font-20 fw-bold">{formatIndex(index + 1)}</div>
                                            <div className="font-16 fw-500 vertical-text text-uppercase-m">
                                                {project.category.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projectDescription align-items-center align-items-xl-start ms-0 ms-lg-4">
                                        <p className="font-30 fw-bold mt-4 mt-lg-0 text-center text-lg-start pe-lg-3 pe-0">
                                            {project.project_name}
                                        </p>
                                        <p className="mt-0 mt-lg-1 font-16 text-center text-xl-start pe-lg-3 pe-0">
                                            {project.description}
                                        </p>
                                        <Link href={`/solutions/${project.category.slug}`} className='btn border border-white rounded-pill text-white font-16 fw-bold mt-4 mt-lg-4 w-50 hvr-shrink'>
                                            Discover More
                                        </Link>
                                    </div>
                                    <div className="projectImages d-block d-md-flex mt-2 mt-xl-0 ms-auto">
                                        <Image
                                            src={project.image}
                                            className="text-center mx-auto rounded-25 cus-project-img"
                                            alt={project.project_name}
                                            width={390}
                                            height={390}
                                        />
                                    </div>
                                </div>
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectSection;
