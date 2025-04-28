import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
        </Link>
    
    <nav>
        <NavLink exact="true" to="/" activeclassname="active" data-hover="HOME">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/about" activeclassname="active" className="about-link" data-hover="ABOUT">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
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