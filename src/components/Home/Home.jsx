import { useContent } from '../useContent/useContent';
import './Home.css';
import cvEng from '../../../src/cv_ang.pdf';
import cvPl from '../../../src/cv_pl.pdf';
import face from './imgs/face.png';

const Home = () => {
  const content = useContent();

  const handleDownloadEng = () => {
    const link = document.createElement('a');
    link.download = 'Bartłomiej_Olek_CV_eng.pdf';
    link.href = cvEng;
    link.click();
  };

  const handleDownloadPl = () => {
    const link = document.createElement('a');
    link.download = 'Bartłomiej_Olek_CV_pl.pdf';
    link.href = cvPl;
    link.click();
  };

  const language = localStorage.getItem('lang');

  return (
    <div className="Home" name={content.home}>
      <div data-aos="fade-right" className="Home__container">
        <h1 className="Home__header">
          {content.first_part_header_home}{' '}
          <span className="Home__header-color-text">
            {content.second_part_header_home}
          </span>
        </h1>
        <p className="Home__description">{content.homeDesc}</p>
        <button
          className="Home__download"
          onClick={
            language === 'English' ? handleDownloadEng : handleDownloadPl
          }
        >
          {content.download}
        </button>
      </div>
      <div data-aos="fade-left" data-aos-delay="400" className="Home__image">
        <div className="">
          <img src={face} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
