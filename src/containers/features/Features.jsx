import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'The future is here',
    text: 'AI is transforming industries by automating repetitive tasks, reducing costs, and increasing efficiency.',
  },
  {
    title: 'Bringing AI to your doorstep',
    text: 'AI is helping to solve complex problems that were previously impossible or too time-consuming for humans to solve.',
  },
  {
    title: 'Intelligent Virtual Assistant',
    text: 'AI is enabling personalized experiences for customers, such as personalized recommendations, chatbots, and virtual assistants.',
  },
  {
    title: 'Great Opportunities opening up',
    text: 'AI is creating new job opportunities, such as data scientists, machine learning engineers, and AI ethics specialists.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into the Future Today and Make it Happen.</h1>
      <p>Be Bold, Be Smart!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;