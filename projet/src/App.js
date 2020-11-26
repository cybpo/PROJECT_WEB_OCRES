
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Component } from "react";
import Widget from './Widgets/Widget';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Widgets/Baton';
import Quote from'./Widgets/Quote';
import './Widgets/Widget.css';
import Button from './Widgets/Button';
import './Widgets/button.css';
import SideBar from './Widgets/SideBar';

<link
  rel="stylesheet "
 href="path/to/font-awesome/css/font-awesome.min.css"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  return (

<div>


<main>
<Container>

  <Row clasName="show-grid">
    <SideBar/>
     
</Row>


<Row clasName="show-grid">
    <Col md={6}>
    <div className="card-deck">
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Motivation</h4>
        <p className="category">Motivation</p>
        <Quote/>
        <Button>New Quote</Button>
        </Card.Body>
        </Card>
        </div>
        </Col>
     
        <div class="mt-3" />

        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Music</h4>
        <p className="category">Music</p>
        </Card.Body>
        </Card>
        </div>
        </Col>
       
        <div class="mt-3" />

        <Col md={6}>
    <div className="card-deck">
    <Card style={{ width: '10px'} }>
      <Card.Body>
     
        <h4 className="title">Astuces</h4>
        <p className="category">Astuces</p>
      
        </Card.Body>
        </Card>
        </div>
        </Col>
        <div class="mt-3" />

    <Col md={6}>
    <div className="card-deck">
 
    
      <Card style={{ width: '10px'} }>
      <Card.Body>
        <h4 className="title">Gaphique</h4>
        <p className="category">Graphique</p>
        <Baton/>
        </Card.Body>
        </Card>
        
  </div>
        </Col>


<div class="mt-3" />

        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Feeling</h4>
        <p className="category">Feeling</p>
        </Card.Body>
        </Card>
        </div>
        </Col>
        

        <div class="mt-3" />

        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Goal</h4>
        <p className="category">Goal</p>
        </Card.Body>
        </Card>
        </div>
        
        </Col>
        
      </Row>
      </Container>

      </main>


   </div>
  );
}

export default App;
