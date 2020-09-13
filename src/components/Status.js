import React from 'react';
import '../styles/layout.css';

export default class Track extends React.Component {
  
  setRandomStatus() {
    var status =  document.getElementById("status");
    var description =  document.getElementById("status-description");
    var check1 =  document.getElementById("1");
    var check2 =  document.getElementById("2");
    var check3 =  document.getElementById("3");
    var check4 =  document.getElementById("4");
    var check5 =  document.getElementById("5");
    var hide =  document.getElementById("hide-status");
    var update =  document.getElementById("update-button");
    var number = Math.floor(Math.random()*Math.floor(4));
    
    hide.style.display ="block";
    update.style.display ="none";
    switch(number)
    {
      case 0:
        {
          status.textContent = "Submitted";
          description.textContent = "Your report has been submitted and will soon be reviewed by a school administrator. An email will be sent to you as soon as the next step is made.";
          check1.style.display = "block";
          break;
        }
      case 1:
        {
          status.textContent = "Under Review";
          description.textContent = "Your report is currently under review by a school administrator. An email will be sent to you as soon as the next step is made.";
          check1.style.display = "block";
          check2.style.display = "block";
          break;
        }
      case 2:
        {
          status.textContent = "Reviewed";
          description.textContent = "Your report has been review by a school administrator. Please check your email to set up an appointment to futher discuss your report.";
          check1.style.display = "block";
          check2.style.display = "block";
          check3.style.display = "block";
          break;
        }
      case 3:
        {
          status.textContent = "Reaching Conclusion";
          description.textContent = "Thank you for meeting with your school’s administrator regarding your report. Since the discussion, we have been working on reaching a final descision on your report. An email will be sent to you as soon as the next step is made.";
          check1.style.display = "block";
          check2.style.display = "block";
          check3.style.display = "block";
          check4.style.display = "block";
          break;
        }
      case 4:
        {
          status.textContent = "Final Decision";
          description.textContent = "A final decision on your report has been made. Please check your email to see the conclusion and the details of the descision.";
          check1.style.display = "block";
          check2.style.display = "block";
          check3.style.display = "block";
          check4.style.display = "block";
          check5.style.display = "block";
          break;
        }
    }

  }

  render(){
  return (
    <div className="body" style={{paddingBottom: '64px'}}>
      <div className="column">
        <h2 className='title2'>
            Report Status:
        </h2>
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
            <div class="grid-item" id="status1">SUBMITTED</div>
            <div className="grid-item" id="blank1"></div>
            <div class="grid-item" id="status2">UNDER REVIEW</div>
            <div className="grid-item" id="blank2"></div>
            <div class="grid-item" id="status3">REVIEWED</div>
            <div className="grid-item" id="blank3"></div>
            <div class="grid-item" id="status4">REACHING CONCLUSION</div>
            <div className="grid-item" id="blank4"></div>
            <div class="grid-item" id="status5">FINAL DECISION</div>
        </div>
        <div className="column">
          <div className="round-column">
            <button className="report-button" id="update-button" onClick={()=>{this.setRandomStatus()}}>Update My Report</button>
            <div id="hide-status">
              <div className="row">
                    <h4>Status:</h4>
                    <h4 id="status">Submitted</h4>
              </div>
              <p id="status-description">Your report has been submitted and will soon be reviewed by a school administrator. An email will be sent to you as soon as the next step is made.</p>
            </div>
          </div>
        </div>
    </div>
  );
}
}
