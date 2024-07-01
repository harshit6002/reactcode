import React from 'react'
import Softechheader3 from './Softechheader3'
import softechphoto from './softechphoto.jpg';
import codingvid from './codingvid.gif';
import './Studentcornersoftech.css';
import Softechnavbar from './Softechnavbar';
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCode, faCodeBranch, faComputerMouse} from "@fortawesome/free-solid-svg-icons";
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer';

function Studentcornersoftech(){
  return(
    <div >
      {/* <Softechnavbar/> */}
       <img src={codingvid} height={"529px"} class="center" />
       
       <hr class="hr hr-blurry"/>
       <h3 style={{textAlign:"center"}}>Choose the best course according to your child.</h3>
       <div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox purple">
                <h3 class="title">Frontend Developer</h3>
                <div class="service-content">
                    <p class="description">A front-end developer creates websites and applications using web languages such as HTML, CSS, JavaScript , React and Github that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer.</p>
                </div>
                <div class="service-icon">
                    <span><FontAwesomeIcon icon={faCode}/></span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox grey">
                <h3 class="title">Backend &nbsp; Developer</h3>
                <div class="service-content">
                    <p class="description">Backend developers are the experts who maintain the mechanisms that process data and perform actions on websites. Unlike frontend developers who control everything you can see on a website backend developers are involved in server-side functions.</p>
                </div>
                <div class="service-icon">
                    <span><FontAwesomeIcon icon={faCodeBranch}/></span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox cyan">
                <h3 class="title">FullStack Developer</h3>
                <div class="service-content">
                    <p class="description">Full-stack developers design and create websites and applications for various platforms. A full-stack developer's job description might include the following: Develop and maintain web services and interfaces. Contribute to front-end and back-end development.</p>
                </div>
                <div class="service-icon">
                    <span><FontAwesomeIcon icon={faComputerMouse}/></span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox blue">
                <h3 class="title">Basic Computer Courses</h3>
                <div class="service-content">
                    <p class="description">Basic computer courses are focused on the basics of computers including computer types, Computer Applications, hardware systems, and more. They also cover the basics of various areas such as computer technology, VFX and Animation, Microsoft Office, Tally, etc.</p>
                </div>
                <div class="service-icon">
                    <span><FontAwesomeIcon icon={faComputer}/></span>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container my-4">
<div className="col-md-7">

<div className="col-md-5 ">
                    <img className="img-fluid" src="http://source.unsplash.com/400x400/?computer,code" alt='aaa' />
                </div>
</div>
</div>
<div style={{background:' rgb(232, 230, 230)'}} className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Full Stack Development. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">
                        We are teaching back-end and front-end development and full stack development in best and easy way.
                    </p>
                </div>
     </div>
     <div className="col-md-5 order-md-1">
                    <img className="img-fluid" src="http://source.unsplash.com/400x400/?computer,code" />
                </div>
    </div>
  )
}

export default Studentcornersoftech;