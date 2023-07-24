import { useContent } from '../useContent/useContent';
import './Footer.css';
import linkedinIcon from './imgs/Linkdin.png';
import githubIcon from './imgs/Github.png';
import logo from './imgs/Logo.png';

const Footer = () => {
  const content = useContent();

  function handleGitHub() {
    window.open('https://github.com/bartlomiejOl?tab=repositories', '_blank');
  }

  function handleLinkedIn() {
    window.open('https://www.linkedin.com/in/bartek-olek-38811923a/', '_blank');
  }

  return (
    <>
      <div className="Footer__line"></div>
      <div data-aos="fade-up" className="Footer">
        <div className="Footer__top">
          <div className="Footer__left">
            <div className="Footer__email">
              <div className="Footer__logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="Footer__links-right">
            {/* <h2 className="Footer__links-title">{content.links}</h2> */}
            <div className="Footer__media">
              <img src={linkedinIcon} alt="linkdin" onClick={handleLinkedIn} />
              <img src={githubIcon} alt="github" onClick={handleGitHub} />
            </div>
          </div>
        </div>
        <div className="Footer__copyright">© Copyright Bartłomiej Olek</div>
      </div>
    </>
  );
};

export default Footer;
