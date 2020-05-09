import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";

import Projects from "./components/Projects";
import Project from "./components/Project";

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:6000/api/project/')
    .then((res)=>{
      console.log(res, 'data returned')
      setData(res.data.data)
    })
  },[])

  return (
    <div className="App">
      <h1>Projects</h1>
      <Route exact path ="/">
        <div className="project holder">
        {data.map((project)=>(
          <Projects key = {project.id} data ={project}/>
        ))}
        </div>
      </Route>

        <Route exact path ="/project/:id">
          <Project data ={data}/>
        </Route>

    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
// import axios from "axios";
// import Projects from "./components/Projects";
// import Project from "./components/Project";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/projects")
//       .then((res) => {
//         console.log(res);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="main">
//       <h1> Projects </h1>
//       <Route exact path="/">
//         <div className="project-container">
//           {data.map((project) => (
//             <Projects key={project.id} data={project} />
//           ))}
//         </div>
//       </Route>

//       <Route exact path="/project/:id">
//         <Project data={data} />
//       </Route>
//     </div>
//   );
// }

// export default App;


