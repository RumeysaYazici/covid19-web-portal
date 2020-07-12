import React from 'react';

import './App.css';
import duyurular from './duyurular';
import hakkında from './hakkında';
import iletisim from './iletisim';
import guncel from './guncel';
import haber1 from './haber1';
import haber2 from './haber2';
import haber3 from './haber3';
import calismalar from './calismalar';
import sablon from './sablon';


import {Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
  <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div className="container">
    <Link to= "/sablon"> <a className="navbar-brand" >
        COVID-19 <br></br>
        Türkiye Web Portalı
        <hr></hr>
        </a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active px-lg-4">
          <Link to= "/sablon"> <a className="nav-link  text-expanded">Anasayfa
              <span className="sr-only">(current)</span>
            </a></Link>
            <hr></hr>
          </li>
          <li className="nav-item px-lg-4">
          <Link to= "/hakkında"> <a className="nav-link  text-expanded">COVID-19 Hakkında</a></Link><hr></hr>
          </li>
          
          <li className="nav-item px-lg-4">
          <Link to= "/duyurular"><a className="nav-link  text-expanded" >Duyurular</a></Link>
          <hr></hr>
          </li>
          
            <li className="nav-item px-lg-4">
            <Link to= "/calismalar"><a className="nav-link  text-expanded" >Klinik Çalışmalar</a></Link> <hr></hr>
            </li>
            <li className="nav-item px-lg-4">
            <Link to= "/iletisim"><a className="nav-link  text-expanded" >Iletişim</a> </Link>
             <hr></hr>
            </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <br></br>

  
   <Route exact path="/" component={App} />
   <Route exact path="/duyurular" component={duyurular} />
   <Route exact path="/hakkında" component={hakkında} />
   <Route exact path="/iletisim" component={iletisim} />
   <Route exact path="/guncel" component={guncel} />
   <Route exact path="/haber1" component={haber1} />
   <Route exact path="/haber2" component={haber2} />
   <Route exact path="/haber3" component={haber3} />
   <Route exact path="/calismalar" component={calismalar} />
   <Route exact path="/sablon" component={sablon} />
   
 <br></br>
  

    </div>
  );
}

export default App;
