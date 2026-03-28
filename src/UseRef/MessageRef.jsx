import { useEffect, useRef } from "react";

function Message({ messages = [] }) {
    const messageRef = useRef(null);

    const scrollToBottom = () => {
        messageRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index}>
                    {msg.text}
                </div>
            ))}
            <div ref={messageRef}></div>
        </div>
    );
}

export default Message;