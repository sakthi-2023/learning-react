import { useEffect, useState } from "react";
import Count from "./Count";
import Form from "./Form";

function Clean() {
    const [var1, setVar1] = useState(true)
    function change() {
        var1 ? setVar1(false) : setVar1(true);
    }
    return (
        <div>
            <button onClick={change}>change compo</button>
            {var1 ? <Count /> : <Form />}
        </div>
    )
}
export default Clean;