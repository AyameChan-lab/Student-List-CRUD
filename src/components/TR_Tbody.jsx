import React from 'react';
// Bootstrap
import { Button } from "react-bootstrap";
//  Icons
import { AiOutlineUserDelete,AiOutlineEdit } from "react-icons/ai";
// React-router-dom v6
import { useNavigate } from "react-router-dom";
// Axios
import axios from "axios";

function TR_Tbody({ students }) {
  const { name,email,description,_id} = students;
  const navigate = useNavigate();
  // Read Singel Student Function
  const readSingelStudent =()=>{
    navigate(`/read-student/${_id}`);
  }
  // Delete Student Function
  const deleteStudent = ()=>{
    axios.delete(`http://localhost:5000/api/student-delete:${_id}`)
    .then((res)=>{
      console.log(res.data);
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      setTimeout(()=>{
        navigate("/*")
       },200)
       setTimeout(()=>{
        navigate("/student-list")
       },300)
    })
  }

  return (
    <tr style={{cursor:'pointer'}}>
        <td onClick={readSingelStudent} >{name}</td>
        <td onClick={readSingelStudent} >{email}</td>
        <td onClick={readSingelStudent} colSpan="4">{!description ? "-":description}</td>
        <td>
            <Button onClick={()=>navigate(`/edit-student/student-list/${_id}`)} className="mx-1"><AiOutlineEdit/></Button>
            <Button variant="danger" onClick={deleteStudent}><AiOutlineUserDelete/></Button>
        </td>
    </tr>
  )
}

export default TR_Tbody