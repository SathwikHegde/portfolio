import './index.scss'
import LogoSH from '../../assets/images/Logo-SH.png'
import { faLinkedin, faGithub, faHackerrank, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faTools, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <a className='logo' href="#home">
      <img src={LogoSH} alt="logo" />
    </a>

    <nav>
      <a href="#home" data-hover="Home">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </a>
      <a href="#about" data-hover="About">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </a>
      <a href="#skills" data-hover="Skills">
        <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
      </a>
      <a href="#projects" data-hover="Projects">
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </a>
      <a href="#contact" data-hover="Contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </a>
    </nav>

    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sathwikhegde/'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/SathwikHegde'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.hackerrank.com/profile/satwikhegde14'>
          <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.kaggle.com/sathwikhegde15'>
          <FontAwesomeIcon icon={faKaggle} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
