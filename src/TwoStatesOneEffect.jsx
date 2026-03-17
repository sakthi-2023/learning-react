import { useEffect, useState } from "react";

function React() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState(0)

    useEffect(() => { console.log("working") }, [name])

    setInterval(() => { setCount(count + 1) }, 1000)

    function change() {
        setName(name + 1)
    }

    return (
        < div >
            <h1>Count-1      {name}</h1>
            <h1>Count-2      {count}</h1>
            <button onClick={change}>increas Count 1</button>
        </div >
    )
}
export default React;