import { createContext, useState } from "react";

export const QuizContext = createContext();

function QuizProvider({ children }) {

    const [answers, setAnswers] = useState([]);

    return (
        <QuizContext.Provider value={{ answers, setAnswers }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider;