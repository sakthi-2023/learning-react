import { useEffect, useState } from "react";

function Comp() {
    let greetings1 = "hello";


    const [greetings2, setGreetings2] = useState("hola");
    const [count, setCount] = useState(1);

    function updateGreetings() {
        setCount(5);
    }

    return (
        <div>
            <h1>{greetings1}</h1>
            {Array.from({ length: count }, (_, i) => (
                <h1 key={i} >{greetings2}</h1>
            ))}
            <button type="button" onClick={updateGreetings}>Click me</button>
        </div>
    )


}
export default Comp;