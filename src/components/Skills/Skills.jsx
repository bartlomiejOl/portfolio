import { useContent } from '../useContent/useContent';
import './Skills.css';
import shapes from './imgs/shapes.png';

const Skills = () => {
  const content = useContent();
  const skills = [
    {
      title: `${content.languages}`,
      languages: [
        'JavaScript',
        'HTML',
        'CSS',
        'TypeScript',
        'Node.js',
        'Python',
      ],
    },
    {
      title: `${content.databases}`,
      languages: ['SQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: `${content.tools}`,
      languages: ['VSCode', 'Windows', 'Git', 'Sass'],
    },
    {
      title: `${content.frameworks}`,
      languages: ['React', 'Express.js'],
    },
  ];
  return (
    <>
      <div className="Skills" name={content.skills}>
        <div data-aos="fade-left" className=" mb-10">
          <div className="Skills__text">
            <div className="">
              <span className="Skills__hash">#</span>
              {content.skills}
            </div>
            <div className="Skills__line"></div>
          </div>
        </div>
        <div className="Skills__bottom">
          <div data-aos="fade-right" className="Skills__left">
            <img className="Skills__image" src={shapes} alt="" />
          </div>
          <div data-aos="fade-left" className="Skills__container">
            {skills.map(({ title, languages }) => {
              return (
                <div key={languages} className="Skills__card">
                  <div className="Skills__header">
                    <h2 className="Skills__title">{title}</h2>
                  </div>
                  <div className="Skills__box">
                    {languages.map((e) => {
                      return (
                        <span key={e} className="Skills__language">
                          {e}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
