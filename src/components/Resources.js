import React from 'react';
import '../styles/layout.css';

function Resources() {
  return (
    <div className="body">
      <div className="column">
        <h2 className="title2" style={{color: '#CD7320', textDecoration: 'none'}}>Resources</h2>
      </div>
      <div className="round-column" style={{margin: '0px 32px'}}>
            <a className="link" style={{textDecoration: 'underline', color: 'black', margin: '16px'}}>What is sexual assault?</a>
            <a className="link" style={{textDecoration: 'underline', color: 'black', margin: '16px'}}>What to do after you have experienced sexual assault</a>
            <a className="link" style={{textDecoration: 'underline', color: 'black', margin: '16px'}}>How to file a police report</a>
            <a className="link" style={{textDecoration: 'underline', color: 'black', margin: '16px'}}>Counseling and sexual assault hot lines</a>
            <a className="link" style={{textDecoration: 'underline', color: 'black', margin: '16px'}}>Title IX</a>
      </div>
    </div>
  );
}

export default Resources;
