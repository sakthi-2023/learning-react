import { useEffect } from "react";
import { useRef, useState } from "react";

function StorePre() {

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    const handleChange = (e) => {

        previousInputValue.current = inputValue;
        setInputValue(e.target.value);
    };


    useEffect(() => {
        
        console.log("Previous:", previousInputValue.current);
        console.log("Current:", inputValue);
    }, [inputValue]);

    return (
        <div>

            <input type="text" value={inputValue}
                onChange={handleChange} />

            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>

        </div>
    );
}
export default StorePre;