import React from 'react'
import { NavLink } from "react-router-dom";
import ButtonDarkMode from '../UiButtons/BtnDarkMode/ButtonDarkMode';


export default function NavBar() {

    const acctiveLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';


    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>MY</strong> portfolio
                    </NavLink>

                    <ButtonDarkMode />

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => {
                                return isActive ? acctiveLink : normalLink;
                            }}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => {
                                return isActive ? acctiveLink : normalLink;
                            }}>
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => {
                                return isActive ? acctiveLink : normalLink;
                            }}>
                                Contacts
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    )
}
