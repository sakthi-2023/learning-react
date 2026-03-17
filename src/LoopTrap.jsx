import { useEffect,useState } from "react";

function LoopTrap() {
    
    const[loop,setLoop] = useState(0)

    useEffect(() =>{
        setLoop(loop + 1)
    },[loop])

    console.log(loop);

    return(
        <div>
            <h1>Hey</h1>
        </div>
    )
    
}
export default LoopTrap;