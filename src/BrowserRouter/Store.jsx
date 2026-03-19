import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";

export const DataStore = createContext();
function Store() {
    const [data, setData] = useState({ FirstName: "", Email: "", Password: "" });

    return (
        <DataStore.Provider value={{ data, setData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/detailsPage" element={<DetailsPage/>} />
                </Routes>
            </BrowserRouter>
        </DataStore.Provider>
    );
}
export default Store;