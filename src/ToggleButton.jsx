import { useState } from "react";

function Onoff() {
    const [bulb, setBulb] = useState(true)
    function light() {
        setBulb(bulb ? false : true)
    }
    return (
        <div>
            <h1>Light</h1>
            <img src={bulb ? "https://www.w3schools.com/js/pic_bulboff.gif" : "https://www.w3schools.com/js/pic_bulbon.gif"} alt="Loading..." />
             <button onClick={light}>{bulb ? "on" : "off"}</button>
        </div>
    )
}
export default Onoff;