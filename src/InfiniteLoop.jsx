import { useEffect, useState } from "react";

function Infinite() {

    const [loop, setLoop] = useState(0)

    useEffect(() => {
        setLoop(loop + 1)
    },[])

    console.log(loop);

    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )


}
export default Infinite;