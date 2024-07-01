import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCode, faComputer, faComputerMouse, faFile, faStar,} from "@fortawesome/free-solid-svg-icons";
import './Softechsidebar.css';
function Softechsidebar() {
  return (
    <div>
      <div >
        <div class="row  my-5">
        <div class="col-2">
        <Sidebar>
  <Menu>
 <MenuItem><FontAwesomeIcon icon={faStar} style={{color:"grey"}}/> &nbsp; Popular programs</MenuItem>
    <MenuItem>  <FontAwesomeIcon icon={faComputer} style={{color:"grey"}}/> &nbsp; Digital Marketing</MenuItem>
    <MenuItem> <FontAwesomeIcon icon={faComputerMouse} style={{color:"grey"}}/> &nbsp; Web-Desigining</MenuItem>
    <MenuItem>  <FontAwesomeIcon icon={faCode} style={{color:"grey"}}/> &nbsp; Mern Stack </MenuItem>
    <MenuItem> <FontAwesomeIcon icon={faFile} style={{color:"grey"}}/> &nbsp; Other Courses</MenuItem>
  </Menu>
</Sidebar>
      </div>
      <div class="col"></div>
      <div class="col-9 px-5">
      <marquee bgcolor="transparent" scrollamount="2" direction="up" loop="true"> 
<font color="white"><strong> <br/><br/><br/><br/><br/><br/> Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.                                        </strong></font></marquee>

      </div>
      </div>
          </div>

    </div>
  )
}

export default Softechsidebar;