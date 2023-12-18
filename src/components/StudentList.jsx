import React,{ useState,useEffect } from 'react';
// Components
import TR_Tbody from "./TR_Tbody";
// Bootstrap
import { Table } from "react-bootstrap";
// Axios 
import axios from "axios";

function StudentList() {

  const [students,setStudents] = useState({});
  const [loading,setLoading] = useState(true);

  const fectStudents = ()=>{
    axios.post("http://localhost:5000/api/")
    .then((res)=>{
      console.log(res.data);
      setLoading(false);
      setStudents(res.data);
    })
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false));
  }

  useEffect(()=>{
    fectStudents();
  },[]);
 
  return (
    <Table striped hover className="shadow-sm">
        <thead className="text-white" style={{background:"#393939"}}>
            <tr>
               <th>Name</th> 
               <th>Email</th> 
               <th colSpan="4">Description</th> 
               <th>Action</th> 
            </tr>
        </thead>
        <tbody>
          {!loading ? students.map((item)=>(
            <TR_Tbody key={item._id} students={item}/>
          )):null}
        </tbody>
    </Table>
  )
}

export default StudentList;