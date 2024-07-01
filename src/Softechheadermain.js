import codinglogo from './codinglogo.jpg';
function Softechheadermain(){
    return(
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <img src={codinglogo} style={{width:"50px", height:"50px"}}/>
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-warning">Home</a></li>
        <li><a href="#" class="nav-link px-2">About Us</a></li>
        <li><a href="#" class="nav-link px-2">Student Corner</a></li>
        <li><a href="#" class="nav-link px-2">Contact us</a></li>
      </ul>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-warning me-2">Login</button>
        <button type="button" class="btn btn-warning">Sign-up</button>
      </div>
    </header>
        </div>
    )
}

export default Softechheadermain;