import React from 'react'
import softechphoto from './softechphoto.jpg';
function Softechfooter() {
  return (
    <div>
      <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col">
      <img src={softechphoto} style={{width:"200px", height:"200px"}}/>
      </div>
      <div class="col"></div>
      <div class="col">
      <h5 style={{color:"white"}}>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
      </ul>
    </div>
    <div class="col">
      <h5 style={{color:"white"}}>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
      </ul>
    </div>
    <div class="col">
        <form style={{color:"white"}}>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-info" type="button">Subscribe</button>
          </div>
        </form>
    </div>
        </footer>
        </div>
    </div>
  )
}

export default Softechfooter;
