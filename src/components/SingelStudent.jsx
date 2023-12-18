import React,{ useState,useEffect } from 'react';
// React-router-dom v6
import { useParams,useNavigate,Link } from "react-router-dom";
// Bootstrap
import { Button } from "react-bootstrap";
// Icons
import { AiOutlineUserDelete,AiOutlineEdit } from "react-icons/ai";
// Axios
import axios from "axios";

function SingelStudent() {

 const { id } = useParams();
 const navigate = useNavigate();

 const [singelstudent,setSingelStudent] = useState({});

 const fetchSingleStudent = ()=>{
    axios.get(`http://localhost:5000/api/student:${id}`)
    .then((res)=>{
      console.log(res.data);
      setSingelStudent(res.data)
    }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    fetchSingleStudent();
  },[])
  
  const {name,age,email,description,classroom,M,_id} = singelstudent;
  
  const deleteStudent = ()=>{
    axios.delete(`http://localhost:5000/api/student-delete:${_id}`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      navigate("/student-list")
    })
  }

  return (
    <div className="my-4">
        <section className="w-100 mx-auto bg-light shadow-sm rounded-3 px-3 py-2">
          <h2>{name ? name:"-"}</h2>
          <p className="text-muted">ID : {_id}</p>
          <h4>Age:{age ? name:" -"}</h4>
          <h4>{M ? M:"M. -"} : {classroom ? classroom:"-"}</h4>
          <h5>Email : {email ? email:"-"}</h5>
          <h5 className="mt-3">Description</h5>
          <p className="w-75 text-muted">{description ? description : "---"}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={()=>navigate(`/edit-student/read-student/${_id}`)} className="mx-1"><AiOutlineEdit/></Button>
            <Button onClick={deleteStudent} variant="danger"><AiOutlineUserDelete/></Button>
          </div>
        </section>
    </div>
  )
}

export default SingelStudent