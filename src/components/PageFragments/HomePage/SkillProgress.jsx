import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={50}
          text="ReactJS"
        />
        <ProgressBar
          percent={20}
          text="Gatsby"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={60}
          text="Typescript"
        />
         <ProgressBar
          percent={95}
          text="Angular"
        />
        <ProgressBar
          percent={40}
          text="NextJS"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
