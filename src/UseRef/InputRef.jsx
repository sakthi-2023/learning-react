import { useEffect, useRef, useState } from "react";

function Input() {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(0);

    useEffect(() => {
        inputRef.current = inputRef.current + 1;
        console.log("It Working");
        
    });

    return (
        <div>
            <input value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} />
            <h2>Render Count: {inputRef.current}</h2>
        </div>
    );
}
export default Input;