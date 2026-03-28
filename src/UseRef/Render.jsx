import { useEffect, useRef } from "react";

function Render() {
    const RenderRef = useRef(0);

    RenderRef.current += 1;

    const handleClick = () => {
        console.log("Render count:", RenderRef.current);
    }

    useEffect(() => {
        console.log("Mounted count:", RenderRef.current);
    }, []);

    return (
        <div>
            <p>Check console for render count</p>
            <button onClick={handleClick}>Show the Render Count</button>

        </div>
    )
}
export default Render;