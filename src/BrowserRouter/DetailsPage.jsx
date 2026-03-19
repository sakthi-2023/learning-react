import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataStore } from "./Store";


function DetailsPage() {
    const navigate = useNavigate();
    const { data, setData } = useContext(DataStore);

    function handleholder() {
        setData({
            FirstName: "",
            Email: "",
            Password: "",
        });

        navigate("/");

    }
    return (
        <div className="details-container">
            <div className="details-box">
                <h1>Details</h1>

                <p><strong>Name:</strong> {data.FirstName}</p>
                <p><strong>Email:</strong> {data.Email}</p>
                <p><strong>Password:</strong> {data.Password}</p>

                <button onClick={handleholder}>Back</button>
            </div>
        </div>
    )


}
export default DetailsPage;