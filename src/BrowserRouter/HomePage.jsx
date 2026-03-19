import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataStore } from "./Store";
import "./HomePage.css";

function HomePage() {

    const navigate = useNavigate();
    const { data, setData } = useContext(DataStore)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.FirstName || !data.Email || !data.Password) {
            alert("Please fill all fields");
            return;
        }

        alert(`Email: ${data.Email}\nPassword: ${data.Password}`);


        navigate("/detailspage");

    };


    return (
        <div className="container">
            <div className="form-box">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="FirstName" placeholder="Enter your Name"
                        value={data.FirstName}
                        onChange={handleChange} /><br></br>
                    <input type="Email" name="Email" placeholder="Enter your emil"
                        value={data.Email}
                        onChange={handleChange} /><br></br>
                    <input type="Password" name="Password" placeholder="Enter your passeord"
                        value={data.Password}
                        onChange={handleChange} /><br></br>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}
export default HomePage;