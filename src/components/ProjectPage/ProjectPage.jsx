
import img from '../../img/projects/01-big.jpg';
import ButtonGitHub from '../UiButtons/ButtonGitHub/ButtonGitHub';


export default function ProjectPage() {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Video service</h1>

                    <img src={img} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js</p>
                    </div>

                    <ButtonGitHub link='https://github.com' />

                </div>
            </div>
        </main>
    )
}
