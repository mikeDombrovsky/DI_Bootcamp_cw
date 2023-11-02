import { useParams, useLocation } from "react-router-dom";

const Projects = () => {
    let {name, id} = useParams();
    console.log(name, id);
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Projects page {name} {id}</h1>
            <h1>Location {location.pathname}</h1>
        </div>
    );
};

export default Projects;