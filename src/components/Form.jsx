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
            <label 
            className='radio flex gap-4 items-center' 
            key={currentQuestion.id+':'+index}
            >
                <input 
                    className='' 
                    type="radio" 
                    name="test" 
                    value={"answer"+index} 
                    onChange={(e) => handleAnswerChange(e, index)}
                />
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
    className="flex flex-col items-center  
           transition-colors duration-500 ease-in-out
           sm:mx-[120px] mx-4 
           rounded-[32px] rounded-ee-3xl border-green-main border-l-[20px] border-b-[14px]
          dark:bg-white bg-dark-main 
          dark:text-black text-white"
          >

        <form className="w-full">
            <div 
            className="flex md:flex-row flex-col-reverse justify-between 
            sm:py-14 py-8 md:gap-24 gap-4 md:px-20 px-4"
            >
                <h2 className="md:text-3xl text-xl">{currentQuestion.question}</h2>
                <div className="md:text-5xl text-3xl">{currentQuestionNum+1 + '/' + questions.length}</div>
            </div>
            
            <div 
            className="grid md:grid-cols-2 grid-cols-1 gap-x-[150px] 
            md:px-20 px-4 gap-y-[60px] text-xl pb-10"
            >
                {listAnswers}
            </div>

            <button 
                disabled = {answer===null}
                onClick={handleNextButton}
                className="sm:text-3xl text-xl
                w-full h-40 rounded-b-[12px]
              dark:bg-white bg-dark-main
              hover:dark:bg-[#EFEFEF] hover:bg-[#1C1C1C]
                transition-colors duration-500 ease-in-out"
                > 
                {currentQuestionNum!==9 ? "Следующий вопрос": "Подвести итоги"}  
                <IoIosArrowForward className='inline size-10'/>
            </button> 
        </form>
    </div>
}

Form.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
}

export default Form;