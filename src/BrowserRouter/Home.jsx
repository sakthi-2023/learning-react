import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const goToAbout = () => { navigate("/about") };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToAbout}>Next</button>

        </div>
    );

}
export default Home;