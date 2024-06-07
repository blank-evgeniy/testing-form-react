import PropTypes from 'prop-types';
import { useState } from "react";
import questions from "../data/questions.json";
import { IoIosArrowForward } from "react-icons/io";

const Form = ({onUpdateStatus, onAnswer}) => {
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [answer, setAnswer] = useState(null);

    const listAnswers = [];
    const currentQuestion = questions[currentQuestionNum];


    currentQuestion.answers.forEach((answer, index) => {
        listAnswers.push(
            <label className='radio flex gap-4 items-center' key={currentQuestion.id+':'+index}>
                <input className='' type="radio" name="test" value={"answer"+index} onChange={(e) => handleAnswerChange(e, index)}/>
                {answer}
                <span></span>
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

    return <div 
    className="flex flex-col items-center bg-white
            mx-[120px] rounded-[32px] rounded-ee-3xl border-green-main border-l-[20px] border-b-[14px] text-black">

        <form className="w-full">
            <div className="flex py-14 justify-between gap-24 px-20">
                <h2 className="text-3xl">{currentQuestion.question}</h2>
                <div className="text-5xl">{currentQuestionNum + '/' + questions.length}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-[150px] px-20 gap-y-[60px] text-xl pb-10">
                {listAnswers}
            </div>

            <button 
                disabled = {answer===null}
                onClick={handleNextButton}
                className="text-3xl
                bg-white w-full h-40 rounded-b-[12px]
                hover:bg-[#EFEFEF] hover:text-gray-500
                transition-colors duration-500 ease-in-out"
                >Следующий вопрос <IoIosArrowForward className='inline size-10'/>
            </button> 
        </form>
    
    </div>
}

Form.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
}

export default Form;