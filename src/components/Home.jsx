import React from 'react';
// React-router-dom v6
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center h-100">
        <section className="content-box text-center w-50">
            <h2>Student List</h2>
            <h5>Full Stack Website</h5>
            <h3>{"{ CRUD System }"}</h3>
            <p className="text-muted">React.js+Vite.js ,Bootstrap ,NodeJS ,Express ,MongoDB</p>
            <Link to="/student-list" className="btn btn-success">Student List</Link>
        </section>
    </div>
  )
}

export default Home