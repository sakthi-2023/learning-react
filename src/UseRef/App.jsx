import Message from "./MessageRef";

function App3() {
  const messages = [
    { text: "Hello" },
    { text: "How are you?" }
  ];

  return <Message messages={messages} />;
}

export default App3;