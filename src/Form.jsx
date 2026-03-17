import { useState } from "react"; 

function Form() {
    const [form, setForm] = useState({
        FirstName: 'Sakthi',
        lastName: 'S',
        email: 'mailtosakthi@gmail. com',
    })
    return (
        <div>
            

            <label>
                First Name:
                <input value={form.FirstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            FirstName: e.target.value
                        });
                    }} />
            </label>
            <br />
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <br />
            <label>
                Email:
                <input value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }} />
            </label>
            <p>

                {form.FirstName}{' '}
                {form.lastName}{' '}
                ({form.email})

            </p>

        </div >
    );
}
export default Form;