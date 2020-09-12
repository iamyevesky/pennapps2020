import React from 'react';
import '../styles/layout.css';
import holding_hands from '../assets/holding_hands.png';

function Home() {
  return (
    <div className="body" style={{paddingBottom: '32px'}}>
      <div className="column" style={{ backgroundColor: '#008C99', padding: '0px', position: 'relative'}}>
          <img src={holding_hands} className="hero_image"></img>
          <h1 className="title">TITLE</h1>
      </div>
      <div className="column">
        <p>
          Are you a college student who has recently experienced a form of sexual 
          assault or harassment? Through [title], you can submit an anonymous report 
          documenting the event, which will be sent to your school’s administration to be reviewed. 
          You will be able to track the progress of your report, and after your school has reviewed 
          it, the administration will set up a face to face appointment for further discussion to 
          come up a conclusion regarding the issue.
        </p>
        <p>
          Our mission is to create a safe space where victims can feel comfortable sharing their 
          experiences to help stop occurrences of sexual assault and violence from persisting on 
          campus. We value confidentiality, and hope that you will explain your situation with us 
          as it will inspire others to come forward as well.  

        </p>
      </div>
      <div className="row">
        <a href="#Report"><button className="report-button">REPORT</button></a>
      </div>
    </div>
  );
}

export default Home;
