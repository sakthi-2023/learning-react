import { useEffect,useState } from "react";
 
function Logic() {

    const [count,setCount] = useState(0);
    
    return(
        <div>
            <h1>{count}</h1>
            {count % 2 === 0 && <p>Even Number</p>}
            <button onClick={() => setCount(count + 1)}>increas</button>
        </div>
    );
    
}
export default Logic;