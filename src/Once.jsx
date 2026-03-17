import { useEffect, useState } from "react";
function Once() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component Mounted");

    }, []);
    function incre() {
        setCount(count + 1)

    }
    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick={incre}>+</button>
        </div>
    )
}
export default Once;
