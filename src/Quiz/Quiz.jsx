import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeQuiz from "./HomeQuiz";
import Question from "./Question";
import Result from "./Result";
import QuizProvider from "./QuizContext";

function Quiz() {
    return (
        <QuizProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeQuiz />} />
                    <Route path="/question/:id" element={<Question />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </QuizProvider>
    );
}
export default Quiz;