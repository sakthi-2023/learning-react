import { useState } from "react";
function Display(){
    const[i,setI] = useState(0)
    function incre() {
        setI(i+1)
        console.log("hello");
        
    }
    return(
        <div>
            <h1>{i}</h1>
            <button onClick={incre}>incre +</button>
        </div>
    )
}
export default Display;