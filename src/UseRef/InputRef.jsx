import { useRef } from "react";

function Input() {
    const inputRef = useRef(null);


    const handleClick = () => {
        inputRef.current.focus();

    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};
export default Input;