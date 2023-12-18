import React from 'react';
import './App.css';
// Components
import Navbar from "./components/Navbar";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
import SingelStudent from "./components/SingelStudent";
import NotFoundERR from "./components/NotFoundERR";
import Home from "./components/Home";
// React-router-dom v6
import { Routes,Route } from "react-router-dom";
// Bootstrap
import { Container } from "react-bootstrap";

function App() {

  return (
    <>
      <Navbar/>
      {/* Router */}
      <Container className="py-3 w-100" style={{height:"91.5vh"}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>
          <Route path="/*" element={<NotFoundERR/>}/>
          <Route path="/edit-student">
            <Route path=":by">
              <Route path=":id" element={<EditStudent/>}/>
            </Route>
          </Route>
          <Route path="/read-student">
            <Route path=":id" element={<SingelStudent/>}/>
          </Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
