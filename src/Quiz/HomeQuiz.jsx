import { useNavigate } from "react-router-dom";

function HomeQuiz() {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Welcome to Quiz App</h1>
            <button onClick={() => navigate("/question/0")}>
                Start Quiz
            </button>
        </div>
    );
    
}
export default HomeQuiz;