import { RiTwitterXLine } from "react-icons/ri";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/chatterjee.hrittik/" className="home__social-icon" target="_blank"  rel="noreferrer"> 
                <i className="uil uil-instagram"></i>
             </a>
            <a href="https://twitter.com/hrittik_" className="home__social-icon" target="_blank"  rel="noreferrer">
            < RiTwitterXLine  />
              </a>
            <a href="https://github.com/Hrittik-Chatterjee" className="home__social-icon" target="_blank"  rel="noreferrer">  
            <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;