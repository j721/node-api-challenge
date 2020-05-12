// import React, { useEffect, useState } from 'react';
// import { Route } from "react-router-dom";
// import axios from "axios";

// import Projects from "./components/Projects";
// import Project from "./components/Project";

// import './App.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     axios.get('http://localhost:6000/api/project/')
//     .then((res)=>{
//       console.log(res, 'data returned')
//       setData(res.data.data)
//     })
//   },[])

//   return (
//     <div className="App">
//       <h1>Projects</h1>
//       <Route exact path ="/">
//         <div className="project holder">
//         {data.map((project)=>(
//           <Projects key = {project.id} data ={project}/>
//         ))}
//         </div>
//       </Route>

//         <Route exact path ="/project/:id">
//           <Project data ={data}/>
//         </Route>

//     </div>
//   );
// }

// export default App;




import React, {useState, useEffect} from 'react';
import axios from "axios";


function App() {

const deleteProject = (e, projectId) => {
  e.preventDefault()
  axios
  .delete(`http://localhost:8000/api/project/${projectId}`)
  .then(res => getProjects())
  //deletes and then update list
  .catch(err => console.log(err))
}

const [projects, setProjects] = useState([]);


  const getProjects = () => {
   axios.get("http://localhost:8000/api/project")
   .then(res => setProjects(res.data))
   .catch(err => console.log(err))
  }

useEffect(() => {
  getProjects()
}, [])

const emptyForm = {
  name: "",
  description: "",
}

const [formState, setFormState] = useState(emptyForm);
  
const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .post("http://localhost:8000/api/project", formState)
  .then(res =>  
    {setProjects(res)
    getProjects()})
  .catch(err => console.log(err))
  setFormState(emptyForm);
};

const handleChange = (e) => {
  e.persist();
  setFormState((previous) => ({
    ...previous,
    [e.target.name]: e.target.value,
  }));
};


  return (
    <div className="App">
      <div className="card-holder">
      {projects && projects.map(project => <> 
      <p>{project.name}</p> <p>{project.description}</p> 
      <button onClick={e => deleteProject(e, project.id) }>Delete Project</button> 
      </>)}
      </div>
    <form>
    <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name of Project"
          />
        </label>
        <label htmlFor="description">
          <input
            id="description"
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
            placeholder="Add Something"
          />
        </label>
      <button onClick={handleSubmit}>Add Project</button>
    </form>
    </div>
  );
}

export default App;