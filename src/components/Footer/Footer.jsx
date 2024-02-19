
import React from 'react'

import Vk from '../SocialsIcons/VkIcon/VkIcon';
import Instagram from '../SocialsIcons/Instagram/Instagram';
import Twitter from '../SocialsIcons/TwitterIcon/TwitterIcon';
import GitHub from '../SocialsIcons/GitHubIcon/GitHubIcon';
import LinkedIn from '../SocialsIcons/LinledInIcon/LinkedInIcon';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><Vk /></a></li>
                        <li className="social__item"><a href="#!"><Instagram /></a></li>
                        <li className="social__item"><a href="#!"><Twitter /></a></li>
                        <li className="social__item"><a href="#!"><GitHub /></a></li>
                        <li className="social__item"><a href="#!"><LinkedIn /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
