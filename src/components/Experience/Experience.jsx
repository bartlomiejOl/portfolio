import React from 'react';
import { useContent } from '../useContent/useContent';
import './Experience.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  const content = useContent();

  return (
    <div className="Experience" name={content.experience}>
      <div className="Experience__text">
        <div className="">
          <span className="Experience__hash">#</span>
          {content.experience}
        </div>
        <div className="Experience__line"></div>
      </div>
      <VerticalTimeline lineColor="#0ef">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={content.dateUniOne}
          iconStyle={{ background: '#7bcefc', color: '#fff' }}
          contentStyle={{ background: 'transparent', color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            {content.univerOne}
          </h3>
          <h4>{content.titleOne}</h4>
          <p>{content.subjectOne}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={content.dateUniTwo}
          iconStyle={{ background: '#7bcefc', color: '#fff' }}
          contentStyle={{ background: 'transparent', color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            {content.univerTwo}
          </h3>
          <h4>{content.titleTwo}</h4>
          <p>{content.subjectTwo}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={content.jobDateFirst}
          iconStyle={{ background: '#9678BE', color: '#fff' }}
          contentStyle={{ background: 'transparent', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            {content.jobFirstPosition}
          </h3>
          <h4>{content.jobFirstName}</h4>
          <ul className="listsWork">
            <li>{content.jobFirstTaskOne}</li>
            <li>{content.jobFirstTaskTwo}</li>
            <li>{content.jobFirstTaskThree}</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={content.jobDateSec}
          iconStyle={{ background: '#9678BE', color: '#fff' }}
          contentStyle={{ background: 'transparent', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            {content.jobSecPosition}
          </h3>
          <h4>{content.jobSecName}</h4>
          <ul className="listsWork">
            <li>{content.jobSecTaskOne}</li>
            <li>{content.jobSecTaskTwo}</li>
            <li>{content.jobSecTaskThree}</li>
            <li>{content.jobSecTaskFour}</li>
            <li>{content.jobSecTaskFive}</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={content.jobThrdDate}
          iconStyle={{ background: '#9678BE', color: '#fff' }}
          contentStyle={{ background: 'transparent', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            {content.jobThrdPosition}
          </h3>
          <h4>{content.jobThrdName}</h4>
          <ul className="listsWork">
            <li>{content.jobThrdTaskOne}</li>
            <li>{content.jobThrdTaskTwo}</li>
            <li>{content.jobThrdTaskThree}</li>
            <li>{content.jobThrdTaskFour}</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
