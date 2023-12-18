import React,{ useState } from 'react';
// Bootstrap
import { Form,Button } from "react-bootstrap";
// Axios
import axios from "axios";
// React-router-dom v6
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [classroom,setClassroom] = useState("");
  const [M,setMleve] = useState("");
  const [age,setAge] = useState(0);
  const [description,setDescription] = useState("");

  const navigate = useNavigate();

  const saveStudent = (e)=>{
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
    axios.post(`http://localhost:5000/api/create-student`,form_value)
    .then((res)=>{
      console.log(res.data)
    }).catch(err=>console.log(err))
    .finally(()=>{
      navigate("/student-list")
    })
  }
  return (
    <Form onSubmit={saveStudent} className="w-50 mx-auto py-3 shadow-lg px-3">
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}></Form.Control>
            <Form.Text> * Name of Student</Form.Text>
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" min="0" placeholder="age" onChange={(e)=>setAge(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label>ClassRoom</Form.Label>
            <Form.Control type="text" placeholder="Enter classroom" onChange={(e)=>setClassroom(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label>M Level</Form.Label>
            <Form.Select onChange={(e)=>setMleve(e.target.value)}>
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
            <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-end">
         <Button disabled={!name || !email || !age || !classroom} type="submit" variant="success" className="px-4 mt-3">Add</Button>
        </div>
    </Form>
  )
}

export default CreateStudent