import React from 'react';
import { image } from '../data/data';

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Write anything you want here about yourself.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;

