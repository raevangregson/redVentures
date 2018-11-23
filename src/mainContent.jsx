import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Table from './components/table.jsx'
import './scss/mainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <div>
      <PageHeader>
      <small >Browse Rates...</small>
    </PageHeader>
     <Table/>  
 </div>
    );
  }
}

export default MainContent;