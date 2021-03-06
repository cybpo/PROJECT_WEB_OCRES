import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Component } from "react";

import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import './SideBar.css';
import './ToDoItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faHome,faUser} from '@fortawesome/free-solid-svg-icons';



<link
  rel="stylesheet "
 href="path/to/font-awesome/css/font-awesome.min.css"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
  rel="manifest" href="%PUBLIC_URL%/manifest.json"
	 rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"
 href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
 integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
 crossorigin="anonymous"
/>


class SideBar extends React.Component{

    render()
{
    return(
        
  <SideNav className="Nav"
    onSelect={(selected) => {
      
    }}

    style={{ height: '3000px' }}
>

    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <FontAwesomeIcon  icon={faUser}/>
            </NavIcon>
            <NavText><a href="/Admin">
                Admin</a>
            </NavText>
        </NavItem>

        <NavItem eventKey="Icare">
            <NavIcon>
            
            <FontAwesomeIcon  icon={faHome}/>
            </NavIcon>
            <NavText><a href="/Accueil">
                ICare</a>
            </NavText>
        </NavItem>
         
    </SideNav.Nav>
</SideNav>
    );
}
}

export default SideBar;