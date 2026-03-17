import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";



export const LogContext = createContext();
function Linking() {
    const [username, setUsername] = useState("");

    return (
        <div>
            <LogContext.Provider value={{ username, setUsername }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>

            </LogContext.Provider>
        </div>
    )

}
export default Linking;