import { useContext } from "react";
import { LogContext } from "./Linking";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const Navigate = useNavigate();
    const { username, setUsername } = useContext(LogContext);
    function handleholder() {
        setUsername("");

        Navigate("/");

    }

    return (
        <div>
            <p>This is {username}Dashboard</p>
            <button onClick={handleholder}>Back</button>
        </div>
    )
}

export default Dashboard;