import PropTypes from 'prop-types';
import { IoIosArrowForward } from "react-icons/io";

const Intro = ({onUpdateStatus}) => {
    return <div className='pl-40  pt-14'>
        <h1 
            className='text-6xl max-w-[720px]'>
            Проверь свои знания <br/> по библиотеке 
            <span className='text-green-accent'>react</span>
        </h1>
        <div 
        className='relative w-[600px] h-[220px] rounded-[40px] ml-20 mt-14 
        bg-[url("/src/img/intro.jpg")] bg-cover'>
            <div 
            className='absolute bottom-[-28px] bg-[white] rounded-[40px]
            w-[600px] h-[220px] z-[-1]'/>
            <button
            className='relative left-[575px] top-[130px] pl-6 pr-2 py-10 
            rounded-[40px] text-4xl text-[black]  bg-green-main 
            hover:bg-green-dull transition-colors ease-in-out duration-300
            active:bg-green-200'
            onClick={() => {onUpdateStatus('testing')}}
            >
                <div className='flex'>
                    <div>Пройти <br/> тест</div>
                    <IoIosArrowForward  className='size-12 mt-5 ml-5'/>
                </div> 
            </button>
        </div>
    </div>
}

Intro.propTypes = {
    onUpdateStatus: PropTypes.func.isRequired
}

export default Intro;