import React from 'react'
import Softechheadermain from './Softechheadermain'
import Softechcard from './Softechcard';
import Softechsidebar from './Softechsidebar';
import './Softechhome.css'
import Softechfooter from './Softechfooter';

function Softechhome() {
  return (
    <div>
        <body class="backimg">
        <Softechheadermain/>
        <Softechcard/>
        <br/>
        <h1 style={{textAlign:"center"}}>Softech Infoways</h1>
        <div class="row-featurette">
          <div class="ms-5">
          <Softechsidebar/>
          </div>   
          </div>
          <Softechfooter/>
        </body>
    </div>
  )
}

export default Softechhome;
