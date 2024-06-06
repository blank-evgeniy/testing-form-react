import PropTypes from 'prop-types';
import { useState } from "react";
import questions from "../data/questions.json";

const Form = ({onUpdateStatus, onAnswer}) => {
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [answer, setAnswer] = useState(null);

    const listAnswers = [];
    const currentQuestion = questions[currentQuestionNum];


    currentQuestion.answers.forEach((answer, index) => {
        listAnswers.push(
            <label key={currentQuestion.id+':'+index}>
                <input type="radio" name="test" value={"answer"+index} onChange={(e) => handleAnswerChange(e, index)}/>
                {answer}
            </label>
        )
    })

    function handleNextButton(e) {
        e.preventDefault();

        const result = {
            question: currentQuestion.question,
            answer: currentQuestion.answers[answer],
            rightAnswer: currentQuestion.answers[currentQuestion.correct-1]
        }

        onAnswer(result, answer===currentQuestion.correct-1);

        if (currentQuestionNum<questions.length-1){
            setCurrentQuestionNum(currentQuestionNum+1);
            setAnswer(null);
        } else {
            onUpdateStatus("success");
        }
        
    }

    function handleAnswerChange(e, answer) {
        setAnswer(answer);
    }

    return <div className="flex flex-col items-center text-white">

        <form className="flex flex-col items-center gap-4 max-w-screen-xl p-2">
            <h2 className="text-xl text-green-400">{currentQuestion.question}</h2>
            
            <div className="flex flex-col gap-4 text-white">
                {listAnswers}
            </div>

            <button 
                disabled = {answer===null}
                onClick={handleNextButton}
                className="bg-slate-100 w-48 rounded-md border-green-400 border-2 text-black
                hover:bg-green-700 hover:text-gray-50
                transition-colors duration-500 ease-in-out"
                >Следующий вопрос
            </button> 
        </form>
    
    </div>
}

Form.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
}

export default Form;