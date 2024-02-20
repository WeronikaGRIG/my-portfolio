
import gitHubIcon from '../../../img/icons/gitHub-black.svg';

export default function ButtonGitHub({ link }) {
    return (
        <a href={link} target="blank" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a>
    )
}
