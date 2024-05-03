import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
    <h1>
  I LOVE
  <br />
  COFFEE
  <br />
  CHAT 
  <br />
  AND CODING THE FUTURE
</h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>Web Development</p>
        <p>React</p>
        <p>Next</p>
        <p>Startups</p>
        <p>New Tech</p>
        <p>New Opportunities</p>
        <p>Space</p>
        <p>Gadgets</p>
      </div>

      <hr />

      <h3>
      Driving a Project?
        <span><a href="mailto:utkarshyadav6745@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/utkarshyadav11" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/utkarsh-yadav-439bb7176/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        <span><a href="https://www.twitter.com/iUtkarshyadav11" target="_blank" rel="noreferrer">X</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
