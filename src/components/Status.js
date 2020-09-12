import React from 'react';
import '../styles/layout.css';

function Status() {
  return (
    <div className="body">
      <div className="column">
        <h2 className='title2'>
            Report Number:
        </h2>
        <h3 style={{color: '#CD7320', fontSize: '32px'}}>############</h3>
      </div>
        <div className="grid-container">
            <div className="grid-item"><div className="circle"><h4 className="check" id="1">&#10003;</h4></div></div>
            <div className="grid-item"><div className="arrow">&#8594;</div></div>
            <div className="grid-item"><div className="circle" id="small-circle"><h4 className="check" id="2">&#10003;</h4></div></div>
            <div className="grid-item"><div className="arrow">&#8594;</div></div>
            <div className="grid-item"><div className="circle"><h4 className="check" id="3">&#10003;</h4></div></div>
            <div className="grid-item"><div className="arrow">&#8594;</div></div>
            <div className="grid-item"><div className="circle" id="small-circle"><h4 className="check" id="4">&#10003;</h4></div></div>
            <div className="grid-item"><div className="arrow">&#8594;</div></div>
            <div className="grid-item"><div className="circle"><h4 className="check" id="5">&#10003;</h4></div></div>
            <div class="grid-item">SUBMITTED</div>
            <div className="grid-item"></div>
            <div class="grid-item">UNDER REVIEW</div>
            <div className="grid-item"></div>
            <div class="grid-item">REVIEWED</div>
            <div className="grid-item"></div>
            <div class="grid-item">REACHING CONCLUSION</div>
            <div className="grid-item"></div>
            <div class="grid-item">FINAL DECISION</div>
        </div>
        <div className="column">
          <div className="round-column">
              <div className="row">
                    <h4>Status: </h4>
                    <h4 id="status">Submitted</h4>
              </div>
              <p id="status-description">Your report has been submitted and will soon be reviewed by a school administrator. An email will be sent to you as soon as the next step is made.</p>
          </div>
        </div>
    </div>
  );
}

export default Status;
