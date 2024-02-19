import React from 'react'

import first from '../../img/projects/01.jpg';
import second from '../../img/projects/02.jpg';
import third from '../../img/projects/03.jpg';
import fourth from '../../img/projects/04.jpg';
import fifth from '../../img/projects/05.jpg';
import sixth from '../../img/projects/06.jpg';

export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={first} alt="Project img" className="project__img" />
                            <h3 className="project__title">Gaming streaming portal</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={second} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={third} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src={fourth} alt="Project img" className="project__img" />
                        <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img src={fifth} alt="Project img" className="project__img" />
                        <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img src={sixth} alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming community</h3>
                    </li>

                </ul>
            </div>
        </main>
    )
}
