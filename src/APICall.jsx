import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(data => console.log(data));
    }, []);
    return (
        <div>
            <h1>Count is {users}</h1>
            <button onClick={() => setUsers(users + 1)}>Increas</button>
        </div>
    )

}
export default Users;