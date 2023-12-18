import React,{ useState,useEffect } from 'react';
// Bootstrap
import { Form,Button } from "react-bootstrap";
// React-router-dom v6
import { useParams,useNavigate } from "react-router-dom";
// Axios
import axios from "axios";

function EditStudent() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [classroom,setClassroom] = useState("");
  const [M,setMleve] = useState("");
  const [age,setAge] = useState(0);
  const [description,setDescription] = useState("");

  const { by,id } = useParams();
  const navigate = useNavigate();

  const oldData = ()=>{
    axios.get(`http://localhost:5000/api/student:${id}`)
    .then((res)=>{
      const olddata = res.data;
      setName(olddata.name);
      setEmail(olddata.email);
      setClassroom(olddata.classroom);
      setMleve(olddata.M);
      setAge(olddata.age);
      setDescription(olddata.description);
    }).catch(err=>console.log(err))
  }
  const saveEditStudent = (e)=>{
    e.preventDefault();
    const form_value = {
      name,
      age,
      email,
      classroom,
      M,
      description
    }

    console.log(form_value);
    axios.put(`http://localhost:5000/api/student-edit:${id}`,form_value)
    .then((res)=>{
      console.log(res.data)
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      if(by == "student-list"){
        navigate(`/${by}`)
      }else {
        navigate(`/${by}/${id}`)
      }
    })
  }

  useEffect(()=>{
    oldData()
  },[])

  return (
    <Form onSubmit={saveEditStudent} className="w-50 mx-auto py-3 shadow-lg px-3">
      <h3>Edit Student</h3>
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
        <Form.Text> * Name of Student</Form.Text>
    </Form.Group>
    <Form.Group className="my-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" min="0" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}></Form.Control>
    </Form.Group>
    <Form.Group className="my-2">
        <Form.Label>ClassRoom</Form.Label>
        <Form.Control type="text" placeholder="Enter classroom" value={classroom} onChange={(e)=>setClassroom(e.target.value)}></Form.Control>
    </Form.Group>
    <Form.Group className="my-2">
        <Form.Label>M Level</Form.Label>
        <Form.Select value={M} onChange={(e)=>setMleve(e.target.value)}>
          <option>M.5/1</option>
          <option>M.5/2</option>
          <option>M.5/3</option>
          <option>M.5/4</option>
          <option>M.5/5</option>
          <option>M.5/6</option>
          <option>M.5/7</option>
          <option>M.5/8</option>
        </Form.Select>
    </Form.Group>
    <Form.Group className="my-2">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
    </Form.Group>
    <p className="text-muted fw-light">ID : {id}</p>
    <div className="d-flex justify-content-end">
     <Button disabled={!name || !email || !age || !classroom} type="submit" variant="success" className="px-4 mt-3">Edit</Button>
    </div>
</Form>
  )
}

export default EditStudent