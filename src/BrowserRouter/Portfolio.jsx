import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIntro from "./HomeIntro";

function Portfolio() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeIntro />}/>

            </Routes>
        </BrowserRouter>
    )

}