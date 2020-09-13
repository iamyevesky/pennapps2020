import React from 'react';
import '../styles/layout.css';


export default class Track extends React.Component {
  render() {
  return (
    <div className="body" style={{backgroundColor: '#69CFD6', paddingBottom: '64px'}}>
      <div className="column">
        <h2 className='title2' style={{paddingBottom: '32px'}}>
            Enter your tracking number:
        </h2>
        <form className="report" style={{backgroundColor: '#FEF8F0', marginBottom: '32px'}}>
            <input type="text" id="number" style={{backgroundColor: '#FEF8F0', border: 'none'}}></input>
        </form>
        <a href="#Status"><button className="report-button">Track My Report</button></a>
      </div>
    </div>
  );
}
}
