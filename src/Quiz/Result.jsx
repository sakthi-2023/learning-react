import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import { useNavigate } from "react-router-dom";
import { QuizData } from "./Data";

function Result() {
    const { answers, setAnswers } = useContext(QuizContext);
    const navigate = useNavigate();

    let score = 0;
    answers.forEach((ans, i) => {
        if (ans === QuizData[i].answer) score++;
    });
    const restart = () => {
        setAnswers([]);
        navigate("/");
    };

    return (
        <div>
            <h2>Your Score: {score}</h2>
            <p>Total Questions: {QuizData.length}</p>
            <button onClick={restart}>Restart Quiz</button>
        </div>
    );

}
export default Result;