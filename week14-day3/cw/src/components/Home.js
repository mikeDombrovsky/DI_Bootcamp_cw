import { useLocation } from "react-router-dom";

const Home = () => {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Home page</h1>
            <h1>Location {location.pathname}</h1>
        </div>
    );
};

export default Home;