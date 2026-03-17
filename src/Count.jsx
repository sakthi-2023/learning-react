import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0)
    function incre() {
        setCount(count + 1)
        console.log(count);

    }
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("working");
        }, 1000);
        return (() => {
            clearInterval(interval)
        })
    })
    return (
        < div >
            <h1>{count}</h1>
            <button onClick={incre}>+</button>
        </div >
    )

}
export default Count;