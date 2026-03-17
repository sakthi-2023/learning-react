import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogContext } from "./Linking";


function Login() {
    const Navigate = useNavigate();
    const { setUsername } = useContext(LogContext)
    // const [username, setUsername] = useState("");

    return (
        <div>
            <input type="text" placeholder="Enter the your Name"
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => { Navigate("/dashboard") }}>Login</button>
        </div>

    )

}
export default Login;