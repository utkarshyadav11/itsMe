import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import resume from "../../src/assets/resume.pdf";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i am Utkarsh</h2>
        <h3 className="tagline">Breaking keyboards, pushing pixels since 2022! </h3>
        <p className="paragraph">I'm a seasoned frontend web developer, adept at crafting exceptional digital experiences. Armed with a keyboard as my paintbrush and lines of code as my canvas, I breathe life into virtual dreams. Let's unite forces and transform your digital vision into reality!</p>
        <div className="hero-btns">
        <a href={resume} download="mycv.pdf" target='_blank' class="btn">GET MY CV
          
          </a>
          <a href="#" class="btn">
          <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </a>
        </div>
      </div>
      {/* <div className="hero-image" >
      <Scene />
      </div> */}
    </div>
    <div className="social-icons">
        <a href="https://github.com/utkarshyadav11" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/utkarsh-yadav-439bb7176/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.twitter.com/iUtkarshyadav11" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
  </div>
);

export default Hero;
