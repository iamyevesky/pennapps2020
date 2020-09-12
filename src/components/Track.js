import React from 'react';
import '../styles/layout.css';

function Track() {
  return (
    <div className="body" style={{backgroundColor: '#69CFD6'}}>
      <div className="column">
        <h2 className='title2' style={{paddingBottom: '32px'}}>
            Enter your tracking number:
        </h2>
        <form className="report" style={{backgroundColor: '#FEF8F0', marginBottom: '32px'}}>
            <input type="text" style={{backgroundColor: '#FEF8F0', border: 'none'}}></input>
        </form>
        <a href="#Status"><button className="report-button">Track My Report</button></a>
      </div>
    </div>
  );
}

export default Track;
