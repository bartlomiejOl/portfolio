import { useContent } from '../useContent/useContent';
import './ProjectCard.css';
const ProjectCard = ({ img, langs, title, disc, demo, source }) => {
  const content = useContent();

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="300" className="ProjectCard">
        <div className="ProjectCard__content">
          <img className="ProjectCard__image" src={img} alt="" />
        </div>
        <div className="ProjectCard__skills">
          {langs.map((e, index) => {
            return (
              <span className="ProjectCard__skills-text" key={index}>
                {e}
              </span>
            );
          })}
        </div>
        <div className="ProjectCard__skills-content">
          <h2 className="ProjectCard__skills-content-name">{title}</h2>
          <p className="ProjectCard__skills-content-description">{disc}</p>
          <div className="ProjectCard__buttons-div">
            <button
              className="ProjectCard__demo"
              onClick={() => window.open(demo, '_blank')}
            >
              {content.demo} {'<'}~{'>'}
            </button>
            <button
              className="ProjectCard__demo"
              onClick={() => window.open(source, '_blank')}
            >
              {content.source} {'<'}~{'>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
