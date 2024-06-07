import PropTypes from 'prop-types';
import { IoIosArrowForward } from "react-icons/io";

const Intro = ({onUpdateStatus}) => {
    return <div className='md:px-40 sm:px-20 px-4'>
        <h1 
            className='md:text-6xl text-4xl max-w-[720px] dark:text-white'>
            Проверь свои знания <br/> по библиотеке 
            <span className='text-green-accent'> react</span>
        </h1>
        <div 
        className='relative md:w-[600px] h-[220px] rounded-[40px] md:ml-20 mt-14 
        bg-[url("/src/img/intro.jpg")] bg-cover'>
            <div 
            className='absolute bottom-[-28px] bg-[white] rounded-[40px]
            md:max-w-[600px] md:h-[220px] z-[-1]'/>
            <button
            className='relative left-1/4 top-3/4 md:left-[500px] md:top-[130px] pl-6 pr-2 sm:py-10 py-4 
            rounded-[40px] sm:text-4xl text-2xl text-[black]  bg-green-main 
            hover:bg-green-dull transition-colors ease-in-out duration-300
            active:bg-green-200 px-10'
            onClick={() => {onUpdateStatus('testing')}}
            >
                <div className='flex text-black'>
                    <div>Пройти <br/> тест</div>
                    <IoIosArrowForward  className='sm:size-12 size10 mt-5 ml-5'/>
                </div> 
            </button>
        </div>
    </div>
}

Intro.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired
}

export default Intro;