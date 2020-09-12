import React from 'react';
import '../styles/layout.css';

function Report() {
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
            <label for="type">Why do you believe you were harassaed/discriminated against?</label>
                <input className="checkbox" type="checkbox" id="type1"></input>
                <label for="type1">Age</label>
                <input className="checkbox" type="checkbox" id="type2"></input>
                <label for="type2">National Origin</label>
                <input className="checkbox" type="checkbox" id="type3"></input>
                <label for="type3">Sexual Orientation</label>
                <input className="checkbox" type="checkbox" id="type4"></input>
                <label for="type4">Disability</label>
                <input className="checkbox" type="checkbox" id="type5"></input>
                <label for="type5">Pregnancy</label>
                <input className="checkbox" type="checkbox" id="type6"></input>
                <label for="type6">Gender</label>
                <input className="checkbox" type="checkbox" id="type7"></input>
                <label for="type7">Race</label>
                <input className="checkbox" type="checkbox" id="type8"></input>
                <label for="type8">Medical Condition</label>
                <input className="checkbox" type="checkbox" id="type9"></input>
                <label for="type9">Religion</label>
                <input className="checkbox" type="checkbox" id="type10"></input>
                <label for="type10">Other</label>
                <label for="other">If other, explain.</label>
                <input type="textarea" id="other"></input>
            <label for="description">Describe the nature of the harassment</label>
            <input type="textarea" id="description"></input>
            <label for="offender">
                If known, please state the person responsible for the harassment. 
                If not, provide a description of the offender.
            </label>
            <input type="textarea" id="offender"></input>
            <div className="row" style={{justifyContent: 'space-between', padding: '0px', width: '100%'}}>
                <a href="#" ><button className="submit-button">Exit</button></a>
                <button action="submit" className="submit-button">Submit</button>
            </div>
            
        </form>
      </div>
    </div>
  );
}

export default Report;
