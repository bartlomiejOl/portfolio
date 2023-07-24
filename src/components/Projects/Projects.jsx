import ProjectCard from '../ProjectCard/ProjectCard';
import { useContent } from '../useContent/useContent';
import first from './imgs/TesTMaker.png';
import second from './imgs/DiabetesTracker.png';
import third from './imgs/CurrencyConverter.png';
import './Projects.css';

const Projects = () => {
  const content = useContent();
  const projects = [
    {
      img: first,
      langs: [
        'react',
        'html',
        'css',
        'javascript',
        'node.js',
        'express',
        'mongodb',
      ],
      title: 'TesT Maker',
      disc: `${content.description_test_maker}`,
      demo: 'https://test-maker.netlify.app',
      source: 'https://github.com/bartlomiejOl/test-maker',
    },
    {
      img: second,
      langs: ['html', 'css', 'javascript', 'php', 'mysql'],
      title: 'Diabetes Tracker',
      disc: `${content.description_diabets}`,
      demo: 'http://cukrzyca4life.infinityfreeapp.com/',
      source: 'https://github.com/bartlomiejOl/test-maker',
    },
    {
      img: third,
      langs: ['react', 'html', 'css', 'javascript'],
      title: 'Currency Converter',
      disc: `${content.description_currency_app}`,
      demo: 'https://bartlomiejol.github.io/currency-app-react/',
      source: 'https://github.com/bartlomiejOl/currency-app-react',
    },
  ];

  return (
    <>
      <div className="Projects" name={content.projects}>
        <div className="Projects__top">
          <div data-aos="fade-down" className="Projects__text">
            <div className="">
              <span className="Projects__hash">#</span>
              {content.projects}
            </div>
            <div className="Projects__line"></div>
          </div>
        </div>
        <div className="Projects__box">
          {projects.map(({ img, langs, title, disc, demo, source }) => {
            return (
              <ProjectCard
                key={title}
                img={img}
                langs={langs}
                title={title}
                disc={disc}
                demo={demo}
                source={source}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
