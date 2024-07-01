import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
function MyLoginTable()
{
    const[student,studentList]=useState([]);
    const[id,setId]=useState();
    const[email,setEmail]=useState();
    const[fn,setFn]=useState();
    const[ln,setLn]=useState();
    const[pic,setPic]=useState();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    useEffect(()=>
    {
        fetch("http://localhost:8080/getcoursedata").then(response=>response.json())
        .then((result)=>{
            console.log("Result is:",result);
            studentList(result.body);
        })
    },[])
    function forName(e)
    {
        e.preventDefault()
        const record={
            method:'POST',
            body:JSON.stringify({
                "name":email,
                "id":fn,
                "course":ln,
                "city":pic
            }),
            headers:{
                'Content-type': 'application/json'
            }
        }
        fetch('http://localhost:8080/postcoursedataBody',record).then((response)=>response.json())
        .then((result)=>{console.log("Data is stored."+result)})
        handleClose();
    }
    function myData(e)
    {
        e.preventDefault();
        const record={
            method:"DELETE",
            
        }
        fetch("http://localhost:8080/deletecoursedata?name="+id,record)
        .then((response)=>response.json())
        .then((data)=>{console.log("data is updated.")})
        window.location.reload();handleClose();
    }
    return(
        <div>
             <Table striped bordered hover variant="dark">
            <thead>
                <tr><th>NAME</th><th>ID</th><th>CITY</th><th>COURSE</th></tr>
            </thead>
            <tbody>
                {
                   student.length>0?student.map((item)=>
                    <tr><td>{item.name}</td><td>{item.id}</td><td>{item.city}</td><td>{item.course}</td></tr>
                ):"sss"
                }
            </tbody>
            </Table>
            <center><Button onClick={handleShow2} variant="success">DELETE</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button  onClick={handleShow} variant="warning">+Add New Person</Button></center>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form  align="center">
                    Name : <input type="text" placeholder="Enter your name" onChange={(e)=>setEmail(e.target.value)} /><br />
                    Mob : <input type="text" placeholder="Enter your ID" onChange={(e)=>setFn(e.target.value)} /><br />
                    Course : <input type="text" placeholder="Enter your Course" onChange={(e)=>setLn(e.target.value)} /><br />
                    City : <input type="text" placeholder="Enter your city" onChange={(e)=>setPic(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={forName} >Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the Name whose data you want to Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Name : <input type="text" placeholder="Enter your Name" onChange={(e)=>setId(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>Close</Button>
                    <Button variant="primary" onClick={myData} >DELETE</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default MyLoginTable;