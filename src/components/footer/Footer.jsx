
import "./footer.css";
import {  FiGithub, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Hrittik</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://twitter.com/hrittik_" className="home__social-icon" target="_blank" rel="noreferrer">
                    <RiTwitterXLine />
                </a>
                <a href="https://github.com/Hrittik-Chatterjee" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/hrittik-chatterjee/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;