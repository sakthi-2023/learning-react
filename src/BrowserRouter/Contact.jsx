import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
    };
    return (
        <div style={{ padding: "40px" }}>
            <h2>Contact</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <br />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;