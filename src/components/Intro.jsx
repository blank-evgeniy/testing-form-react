import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Intro = () => {
    return <div className='md:px-40 sm:px-20 px-4'>
        <h1 
            className='max-w-[720px] 
            md:text-6xl text-4xl dark:text-white'
        >
            Проверь свои знания <br/> по библиотеке 
            <span className='text-green-accent'> react</span>
        </h1>
        <div 
        className='relative md:w-[600px] h-[220px] rounded-[40px] 
        md:ml-20 mt-14 
        bg-[url("/intro.jpg")] bg-cover'
        >
            <div 
            className='absolute bottom-[-28px] z-[-1]
            md:max-w-[600px] md:h-[220px] rounded-[40px]
            bg-[white] bg-[]'
            />
            <Link to="/test-form">
                <button
                className='relative left-1/4 top-3/4 md:left-[500px] md:top-[130px] 
                pl-6 pr-2 sm:py-10 py-4 rounded-[40px] 
                sm:text-4xl text-2xl text-[black] bg-green-main 
                hover:bg-green-dull transition-colors ease-in-out duration-300
                active:bg-green-200 px-10'
                >
                    <div className='flex text-black'>
                        <div>Пройти <br/> тест</div>
                        <IoIosArrowForward  
                        className='sm:size-12 size10 mt-5 ml-5'
                        />
                    </div> 
                </button>
            </Link>
        </div>
    </div>
}

export default Intro;