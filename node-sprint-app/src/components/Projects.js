import React from "react";
import { Link } from "react-router-dom";

const Projects =({data})=>{
    const { name, id } = data;
    return(
        <div>
            <Link to = {`/project/${id}`} className="projectsHolder">
            <div className ="Projects">
                <h2>{name}</h2>
            </div>
            </Link>
        </div>
    )
}

export default Projects; 