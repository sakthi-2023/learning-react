import { useEffect, useState } from "react"


function changes() {
    const [var1, setVar1] = useState(0)

    useEffect(() => {
        console.log("Count changed");

    }, [var1])
    return (
        <div>
            
            <h1>count is {var1}</h1>
            <button onClick={() => setVar1(var1 + 1)}>increas</button>
        </div>
    )
}
export default changes; 