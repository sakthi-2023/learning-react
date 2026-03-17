import { useEffect,useState } from "react";

function Every() {
       const [var1, setVar1] = useState("Hey React")
    useEffect(() => { console.log("Component Mounted");
     }, [])
    return (
        <div>
            <h1>{var1}</h1>
        </div>
    )
    
}
export default Every;