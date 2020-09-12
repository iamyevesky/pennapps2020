import React from 'react';
import '../styles/layout.css';


    

export default class Report extends React.Component {
    createModal() {
        // Set the modal text
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close-modal")[0];
       
        // When the user clicks on the button, open the modal
        modal.style.display = "flex";
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        return (
        <div className="body">
            <div className="column">
                <form className="report">
                    <h3 style={{color: '#CD7320', fontSize: '28px', fontWeight: '200', textDecoration: 'underline'}}>Sexual Assault Report</h3>
                    <label for="university">What college/university do you attend?</label>
                    <input type="text" id="university"></input>
                    <label for="email">Please provide your school email address (must be .edu)</label>
                    <input type="text" id="email" ></input>
                    <label for="location">Location, date, and time of the event</label>
                    <input type="text" id="location"></input>
                    <label for="offender">
                        If known, please state the person responsible for the harassment. 
                        If not, provide a description of the offender.
                    </label>
                    <input className="textarea" type="textarea" id="offender"></input>
                    <label for="witnesses">
                        Were there any witnesses? 
                        If so, please provide name(s) or descriptions.
                    </label>
                    <input type="textarea" className="textarea" id="witnesses"></input>
                    <label for="attachment">
                        If you have any, please upload any documentation to help
                        support your case (medical records, photos/videos, etc).
                    </label>
                    <input type="file" id="attachment" style={{border: 'none'}}></input>

                    <div className="row" style={{justifyContent: 'space-between', padding: '0px', width: '100%'}}>
                        <a href="#" className="submit-button">Exit</a>
                        <button action="submit"  onClick={()=>{this.createModal()}}className="submit-button">Submit</button>
                    </div>
                    
                </form>
            </div>

            <div id="myModal" className="modal">

                <div className="modal-content1">
                    <div style={{borderBottom: '3px black double'}}>
                        <span className="close-modal">&times;</span>
                    </div>
                    <div className="column" style={{padding: '10px 16px'}}>
                        <h1 style={{color: 'white'}}>Thank you for your submission!</h1>
                    </div>
                    <div className="round-column" style={{padding: '5% 20%', backgroundColor: '#FEF8F0'}}>
                        <div id="modal-text" style={{textDecoration: 'underline'}}>Your report number:</div>
                        <h3 style={{color: '#CD7320'}}>############</h3>
                        <div id="modal-text">You will receive an email shortly regarding your report's progress.</div>
                    </div>
                    <div>
                        <a href="#Track"><button className="report-button" style={{width: 'auto'}}>Track My Report</button></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
