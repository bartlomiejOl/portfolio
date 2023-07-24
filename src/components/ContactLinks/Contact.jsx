import { useContent } from '../useContent/useContent';
import './Contact.css';
import emailIcon from './imgs/Email.png';
const Contact = () => {
  const content = useContent();
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="Contact"
        name={content.contact}
      >
        <div className="">
          <div className="Contact__header">
            <div className="Contact_text">
              <div className="">
                <span className="Contact_hash">#</span>
                {content.contact}
              </div>
              <div className="Contact__line"></div>
            </div>
          </div>
        </div>
        <div className="Contact_container-bottom">
          <div className="Contact__box-position">
            <p className="Contact_container-text">{content.contact_desc}</p>
          </div>
          <div className="Contact_container-right">
            <div className="Contact__box">
              <h2 className="Contact__box-title">{content.message_me}</h2>
              <div className="">
                <div className="Contact__box-icon">
                  <img src={emailIcon} alt="" />
                  <span className="Contact__box-email">
                    bartek.olek123@wp.pl
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
