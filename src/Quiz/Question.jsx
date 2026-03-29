import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizData } from "./Data";
import { QuizContext } from "./QuizContext";

function Question() {

    const { answers, setAnswers } = useContext(QuizContext);
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();
    const index = Number(id);

    useEffect(() => {
        setSelected(answers[index] || "")
    }, [index]);

    const handleNext = () => {
        const updated = [...answers]
        updated[index] = selected;
        setAnswers(updated);

        if (index < QuizData.length - 1) {
            navigate(`/question/${index + 1}`);
        } else {
            navigate("/result");
        }
    };
    const handlePrevious = () => {
        navigate(`/question/${index - 1}`);
    };

    return (
        <div>
            <h2>Question {index + 1}/{QuizData.length}</h2>
            <h3>{QuizData[index].question}</h3>

            {QuizData[index].options.map((opt, i) => (
                <button
                    key={i}
                    onClick={() => setSelected(opt)}>{opt}
                </button>
            ))}

            <button onClick={handlePrevious} disabled={index === 0}>
                Previous
            </button>

            <button
                onClick={handleNext}
                disabled={!selected} >
                {index === QuizData.length - 1 ? "Finish" : "Next"}
            </button>
        </div>
    );

}
export default Question;