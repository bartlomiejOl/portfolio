import { useContent } from '../useContent/useContent';
import './About.css';
import aboutImg from './imgs/man.png';

const AboutSec = () => {
  const content = useContent();
  return (
    <>
      <div className="About" name={content.about}>
        <div className="About__image-wraper ">
          <div data-aos="fade-right" className="About__left-conatiner">
            <div className="About__title">
              <div className="About__text">
                <div className="">
                  <span className="About__hash">#</span>
                  {content.about}
                </div>
                <div className="About__line"></div>
              </div>
            </div>
            <p className="About__description">
              {content.aboutHeader}
              <br />
              <br />
              {content.aboutDesc_one}
              <br />
              <br />
              {content.aboutDesc_second}
            </p>
          </div>
          <div data-aos="fade-left" className="About__image-container">
            <img className="About__image" src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
