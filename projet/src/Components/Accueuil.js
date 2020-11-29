import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from "react";
import Widget from './Widget';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import './Widget.css';
import Button from './Button';
import './button.css';
import Astuce from './Astuce';
import './Astuce.css';
import ToDoList from './ToDoList';
import Digital from './Digital';


const Accueuil =() => {
    return (
      <main>
      <Container>
        <Row clasName="show-grid">
      
    <Col md={6}>
    <div className="card-deck">
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="motivation">Motivation</h4>
        <p className="category">Motivation</p>
        <Quote/>
        
        </Card.Body>
        </Card>
        
        </div> 
        </Col>
     
        <div class="mt-3" />

        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="music">Music</h4>
        <p className="category">Music</p>
        </Card.Body>
        </Card>
        </div>
        </Col>
       
        <div class="mt-3" />
        <Col md={6}>
    <div className="card-deck">
    <Card className="flip-card"style={{ width: '10px'} }>
      <Card.Body >
        <Astuce/>
        </Card.Body>
        </Card>
        </div>
        </Col>
        <div class="mt-3" />

    <Col md={6}>
    <div className="card-deck">
 
    
      <Card style={{ width: '10px'} }>
      <Card.Body>
        <h4 className="graphique">Graphique</h4>
        <p className="category">Graphique</p>
        <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Notez votre du jour humeur sur 8</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </select>
  <button type="submit" class="btn btn-primary my-1">Submit</button>
  </form>
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
        <h4 className="feeling">CLOCK</h4>
        <p className="category">Clock</p>
        <Digital/>
        </Card.Body>
        </Card>
        </div>
        </Col>
        

        <div class="mt-3" />

        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="goal">Goal</h4>
        <p className="category">Goal</p>
        <ToDoList/>
        </Card.Body>
        </Card>
        </div>
        
        </Col>


      </Row>
      <Audio/>
      </Container>
      </main>
    )
}

export default Accueuil;