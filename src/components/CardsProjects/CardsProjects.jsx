import { NavLink } from 'react-router-dom';

export default function CardsProjects(props) {
    return (
        <NavLink to={`/project/${props.index}`}>
            <li className="project">

                <img src={props.img} alt={props.title} className="project__img" />
                <h3 className="project__title">{props.title}</h3>

            </li>
        </NavLink>
    )
}
