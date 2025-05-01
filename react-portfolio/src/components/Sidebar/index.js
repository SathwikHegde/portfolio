import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSH from '../../assets/images/Logo-SH.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser, faTools, faProjectDiagram} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoSH} alt="logo"/>
        </Link>
    
    <nav>
        <NavLink exact="true" to="/" activeclassname="active" data-hover="HOME">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/about" activeclassname="active" className="about-link" data-hover="ABOUT">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/skills" activeclassname="active" className="skills-link" data-hover="SKILLS">
        <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/projects" activeclassname="active" className="projects-link" data-hover="PROJECTS">
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/contact" activeclassname="active" className="contact-link" data-hover="CONTACT">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>

    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sathwikhegde/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/SathwikHegde'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
            </a>
        </li>

    </ul>



    </div>
    )

export default Sidebar