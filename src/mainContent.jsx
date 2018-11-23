import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './scss/mainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <div>
      <PageHeader>
      <small >Browse Rates...</small>
    </PageHeader>
 <div className='mainContent'>
      <div className='content'>

      </div>
 </div>
 </div>
    );
  }
}

export default MainContent;