import './index.scss'
import LogoSH from '../../assets/images/Logo-SH.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faHackerrank,
  faKaggle
} from '@fortawesome/free-brands-svg-icons'
import {
  // faEnvelope,
  faHome,
  faUser,
  faTools,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'


import { SiLeetcode, SiTableau } from 'react-icons/si'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <a className="logo" href="#home">
        <img src={LogoSH} alt="logo" />
      </a>

      <nav>
        <a href="#home" aria-label="Home" data-hover="Home">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#about" aria-label="About" data-hover="About">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#skills" aria-label="Skills" data-hover="Skills">
          <FontAwesomeIcon icon={faTools} />
        </a>
        <a href="#projects" aria-label="Projects" data-hover="Projects">
          <FontAwesomeIcon icon={faProjectDiagram} />
        </a>
        {/* <a href="#contact" aria-label="Contact" data-hover="Contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
      </nav>

      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/sathwikhegde/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/SathwikHegde" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/profile/satwikhegde14" target="_blank" rel="noreferrer" aria-label="HackerRank">
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/sathwikhegde15" target="_blank" rel="noreferrer" aria-label="Kaggle">
            <FontAwesomeIcon icon={faKaggle} />
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/sathwikhegde/" target="_blank" rel="noreferrer" aria-label="LeetCode">
            <SiLeetcode size={20} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://public.tableau.com/app/profile/sathwik.hegde7927/vizzes" target="_blank" rel="noreferrer" aria-label="Tableau">
            <SiTableau size={20} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
