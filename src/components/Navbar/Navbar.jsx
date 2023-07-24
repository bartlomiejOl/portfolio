import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { LanguageContext } from '../../App';
import { useContent } from '../useContent/useContent';
import pl from './imgs/pl.png';
import en from './imgs/gb.svg';
import logo from './imgs/Logo.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { language, setLanguage } = useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNoScroll, setIsNoScroll] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [setLanguage]);

  useEffect(() => {
    setIsNoScroll(toggle);
  }, [toggle]);

  const content = useContent();

  return (
    <>
      <div data-aos="fade-left" className="Navbar" data-aos-duration="1000">
        <div className="Navbar__container">
          <div className="Navbar__logo-text">
            <div className="img">
              <img src={logo} alt="" />
            </div>
            Portfolio
          </div>
          <div className="Navbar__top">
            <div
              className={`Navbar__menu duration-300 ${
                toggle ? 'visible' : 'hidden'
              }`}
            >
              {content.home && (
                <Link to={content.home} smooth duration={500} offset={-80}>
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.home}
                  </li>
                </Link>
              )}
              {content.about && (
                <Link to={content.about} smooth duration={500} offset={-80}>
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.about}
                  </li>
                </Link>
              )}
              {content.projects && (
                <Link to={content.projects} smooth duration={500} offset={-80}>
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.projects}
                  </li>
                </Link>
              )}
              {content.skills && (
                <Link to={content.skills} smooth duration={500} offset={-80}>
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.skills}
                  </li>
                </Link>
              )}
              {content.experience && (
                <Link
                  to={content.experience}
                  smooth
                  duration={500}
                  offset={-80}
                >
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.experience}
                  </li>
                </Link>
              )}
              {content.contact && (
                <Link to={content.contact} smooth duration={500} offset={-80}>
                  <li
                    className="Navbar__link-li"
                    onClick={() => setToggle(false)}
                  >
                    <span className="Navbar__link-hash">#</span>
                    {content.contact}
                  </li>
                </Link>
              )}
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-btn" onClick={handleDropdownClick}>
              <img
                src={language === 'Polish' ? pl : en}
                className="flagIcon"
                alt="flag"
              ></img>
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              {language === 'Polish' ? (
                <div className="optionDrop">
                  <li onClick={() => handleLanguageChange('English')}>
                    <img src={en} className="flagIcon" alt="pl"></img>
                  </li>
                </div>
              ) : (
                <div className="optionDrop">
                  <li onClick={() => handleLanguageChange('Polish')}>
                    <img src={pl} className="flagIcon" alt="eng"></img>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div
            onClick={() => setToggle((prevState) => !prevState)}
            className="Navbar__toggle"
          >
            <div className="open">
              <div className="Navbar__toggle-div"></div>
              <div className="Navbar__toggle-div"></div>
              <div className="Navbar__toggle-div"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
