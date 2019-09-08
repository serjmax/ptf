import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Main.scss';
import '../../smart-grid.css'

import Grid from '../../Grid';

import {ReactComponent as Logo} from '../../Images/kiosk_logo_color.svg'
import {ReactComponent as LogoSign} from '../../Images/kiosk_sign.svg'
import FontList from '../../Components/FontList/FontList';
import CrossSelling from '../../Components/CrossSelling/CrossSelling';
import Footer from '../../Components/Footer/Footer';

export default class Main extends Component {
  render() {
    return (
      <div className="main-page">
        <Grid/>
        <div className="App main">
          <Logo style={{fill: '#F0EADC'}} className="logo two"/>
          <div 
            style={{ 
              gridColumn: "1 / 3",
              gridRow: "2 / 2"
            }}>
              <Link className="main-page__nav-link" to="/">FONTS</Link>
              <Link className="main-page__nav-link" to="/manifesto/">MANIFESTO</Link>
              <a href="https://kiosk.works/playtype/" className="main-page__nav-link">PLAYTYPE</a>
          </div>
          <LogoSign 
            style={{
              width: "156",
              height: '156',
              fill: '#F0EADC',
              gridColumn: "11 / 13",
              gridRow: "1 / 3"
            }}/>
          <div 
            className="lead twelve"
            style={{gridArea: '3 / 1 / 7 / 13'}}
            >
            <p>MODERN TYPOGRAPHY IS ABOUT THE ZEITGEIST AND NERVE OF TIME. SPEED IS THE ACUITY OF THE IMAGE.</p>
            <p style={{marginTop: '12px'}}>СОВРЕМЕННАЯ ТИПОГРАФИКА – ЭТО ПРО ДУХ И НЕРВ ВРЕМЕНИ. СКОРОСТЬ – ЭТО ОСТРОТА ОБРАЗА.</p>
            <p style={{marginTop: '12px'}}>EXPERIMENTAL CYRILLIC TYPEFACES<br/>
               ЭКСПЕРИМЕНТАЛЬНЫЕ КИРИЛЛИЧЕСКИЕ ШРИФТЫ</p>
          </div>
          <div style={{gridArea: '6 / 1 / 6 / 13', alignSelf: 'end', justifySelf: 'center'}} className="full-name twelve">THE REAL PLAY TYPEFOUNDRY</div>
          <div  className="font-list twelve">
            <FontList/>
          </div>
          
        </div>
        <CrossSelling/>
        <Footer/>
       
    </div>
    )
  }
}