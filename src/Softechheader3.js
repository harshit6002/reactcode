import './Softechheader3.css';
import softechbanner from './softechbanner.jpg';
import Carousel from 'react-bootstrap/Carousel';
import reactjsbanner1 from './reactjsbanner1.jpg';
import clanguagebanner from './clanguagebanner.jpeg';
import codingphoto from './codingphoto.jpg';
import nodejsbanner from './nodejsbanner.jpg';
import Softechsidebar from './Softechsidebar'

function Softechheader3() {
return(
<div>
<body>
<div class="container">
    <img src={softechbanner} width={"1000px"} height={"450px"}  class="m-3" alt=""/>
    <hr class="hr hr-blurry"/>
     <i> <h2> Some of the <span><u>popular Courses</u></span>.</h2> </i>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={codingphoto} width={"1280px"} height={"500px"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reactjsbanner1} width={"1280px"} height={"500px"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nodejsbanner} width={"1280px"} height={"500px"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={clanguagebanner} width={"1280px"} height={"500px"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <hr class="hr hr-blurry"/>
    <div class="m-5">
    <Softechsidebar/>
    </div>
    </body>
     </div>
     )
    }

export default Softechheader3;