import React from 'react'

import CardsProjects from '../CardsProjects/CardsProjects';
import { projects } from '../CardsList/CardsList';

export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((project, id) => {
                        return (
                            <CardsProjects key={id} title={project.title} img={project.img} />
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
