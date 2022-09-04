import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import "../styles/Education.css";

function Education() {
  return (
    <div>
      <VerticalTimeline lineColor={ "black" }>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00c696', color: 'black', }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          date="2017 - 2020"
          iconStyle={{ background: '#00c696', color: 'blue'}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor in automatique</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor</h4>
          <p>
            Automation and control engineering at the University of Science and Technology Houari Boumediene
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00c696', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          date="Jul 2020 - Dec 2020"
          iconStyle={{ background: '#00c696', color: 'blue' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Machine learning</h3>
          <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence Training</h4>
          <p>
          Learn how to preprocess and visualize data through libraries 
          Matplotlib and Seaborn and mastering the basics of artificial intelligence as well 
          the supervised and unsupervised algorithms of Machine Learning.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00c696', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          date="Nov 2020 - Jan 2021"
          iconStyle={{ background: '#00c696', color: 'blue' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Deep learning</h3>
          <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence Training</h4>
          <p>
          Build, train and implement connected neural networks
          (Artificial neural networks, Deep neural networks, convolutional neural
          networks).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00c696', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          date="Aug 2021 - Dec. 2021"
          iconStyle={{ background: '#00c696', color: 'blue' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">DevOps</h3>
          <h4 className="vertical-timeline-element-subtitle">DevOps Training</h4>
          <p>
            Accelerate the process of development, deployment and time to market application
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00c696', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          date="2020 - 2022"
          iconStyle={{ background: '#00c696', color: 'blue' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Master in automatic and system</h3>
          <h4 className="vertical-timeline-element-subtitle">Master</h4>
          <p>
            Automation and control engineering at the University of Science and Technology Houari Boumediene
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education