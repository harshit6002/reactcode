import Carousel from 'react-bootstrap/Carousel';
import softechphoto from './softechphoto.jpg';
import languages from './languages.jpg'
import codingphoto from './codingphoto.jpg'
import nodejsbanner from './nodejsbanner.jpg'
import clanguagebanner from './clanguagebanner.jpeg'
import coding0 from './coding0.jpg';
import javascriptlogo from './javascriptlogo.jpg'
import html from './html.jpg'
import java from './java.jpg'
import clanguagebanner1 from './clanguagebanner1.jpeg';
import './Softechcard.css';

function Softechcard() {
  return (
    <div class="container">
    <Carousel>
      <Carousel.Item>
      <img src={coding0} style={{width:"1100px", height:"509px"}} class="a" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={java} style={{width:"1100px", height:"509px"}} class="a"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={nodejsbanner} style={{width:"1100px", height:"509px"}} class="a"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={clanguagebanner1} style={{width:"1100px", height:"509px"}} class="a"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={html} style={{width:"1100px", height:"509px"}} class="a"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={javascriptlogo} style={{width:"1100px", height:"509px"}} class="a" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Softechcard;