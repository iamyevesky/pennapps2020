import React from 'react';
import '../styles/layout.css';

function Resources() {
  return (
    <div className="body" style={{paddingBottom: '64px'}}>
      <div className="column">
        <h2 className="title2" style={{color: '#CD7320', textDecoration: 'none'}}>Resources</h2>
      </div>
      <div className="round-column" style={{margin: '0px 32px'}}>
            <a href="https://www.rainn.org/articles/sexual-assault" className="link2">What is sexual assault?</a>
            <a href="https://www.rainn.org/after-sexual-assault" className="link2">What to do after you have experienced sexual assault</a>
            <a href="https://www.rainn.org/articles/reporting-law-enforcement" className="link2">How to file a police report</a>
            <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" className="link2">Counseling and sexual assault hot lines</a>
            <a href="https://www.rainn.org/articles/title-ix" className="link2">Title IX</a>
      </div>
    </div>
  );
}

export default Resources;
