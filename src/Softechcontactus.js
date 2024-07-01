import codingvideo from './codingvideo.mp4';
import Softechheadermain from './Softechheadermain'
import coverpagebackgroundpic from './coverpagebackgroundpic.jpg';
import coverpagebackgroundimg from './coverpagebackgroundimg.jpg'
import './Softechcontactus.css'
function Softechcontactus() {
  return (
    <div>
      <Softechheadermain/>
      <div class="textonimg">
        <img src={coverpagebackgroundimg} style={{width:"1280px", height:"585px"}} class="contactus"/>
        <div class="centered">Center text</div>
      </div>
    </div>
  )
}

export default Softechcontactus;
