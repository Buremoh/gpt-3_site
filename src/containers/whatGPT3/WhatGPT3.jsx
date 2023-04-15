import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT is an AI language model developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It is designed to generate human-like responses to natural language queries and can be used for a wide range of applications, such as chatbots, virtual assistants, language translation, and more." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text=" Computer programs designed to simulate human-like conversation with users." />
      <Feature title="Knowledgebase" text="A centralized repository of information that is designed to be easily accessible and searchable." />
      <Feature title="Education" text="Education is a crucial component in the development and training of language models such as ChatGPT created by OpenAI." />
    </div>
  </div>
);

export default WhatGPT3;