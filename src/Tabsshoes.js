import React from 'react'
import './Tabsshoes.css';

function Tabsshoes() {
  return (
    <div>
        <div class="md-7">
        <div class="row"> 
        <div class="col mx-1 bg-success"><button class="tablink" onclick="openPage('Home', this, 'red')">Home</button></div>
        <div class="col mx-1 bg-success"><button class="tablink" onclick="openPage('News', this, 'green')" id="defaultOpen">News</button></div>
        <div class="col mx-1 bg-success"><button class="tablink" onclick="openPage('Contact', this, 'blue')">Contact</button></div>
        <div class="col mx-1 bg-success"><button class="tablink" onclick="openPage('About', this, 'orange')">About</button></div>
        <div class="col mx-1 bg-success"><button class="tablink" onclick="openPage('About', this, 'orange')">Contact</button></div>
        </div>
</div>
<div id="Home" class="tabcontent">
  <h3>Home</h3>
  <p>Home is where the heart is..</p>
</div>
<div id="News" class="tabcontent">
  <h3>News</h3>
  <p>Some news this fine day!</p>
</div>
<div id="Contact" class="tabcontent">
  <h3>Contact</h3>
  <p>Get in touch, or swing by for a cup of coffee.</p>
</div>
<div id="About" class="tabcontent">
  <h3>About</h3>
  <p>Who we are and what we do.</p>
</div>

<div id="About" class="tabcontent">
  <h3>Contact</h3>
  <p>Who we are and what we do.</p>
</div>
</div>
  )
}

export default Tabsshoes;