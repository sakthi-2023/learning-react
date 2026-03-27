import { useRef } from "react";

function Task2() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = inputRef.current.value;
        console.log(value);

        inputRef.current.value = "";
        inputRef.current.focus();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Enter name" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Task2;