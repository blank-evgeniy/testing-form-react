import PropTypes from 'prop-types';

const Results = ({results, score}) => {
    const listResults = [];

    results.forEach( (result, index) => {
        if (result.rightAnswer !== result.answer ) {
            listResults.push(
            <div 
            className="sm:text-xl text-lg pb-10" 
            key={index}
            >
                <div 
                className="flex items-start pl-4 px-2 rounded-ee-[20px] bg-red-main"
                >
                    <span className='sm:text-4xl text-2xl min-w-12'>{index+1}</span>
                    <span>{result.question}</span>
                </div>
                <p 
                className="text-[#cacaca] sm:pl-20 px-2 pt-2"
                >
                    {`Ваш ответ: ${result.answer}`}
                </p>
                <p 
                className="dark:text-white text-black sm:pl-20 px-2"
                >
                    {`Правильный ответ: ${result.rightAnswer}`}
                </p>
            </div>
        )} else {
            listResults.push(
                <div 
                className="sm:text-xl text-lg pb-10" 
                key={index}
                >
                    <div 
                    className="flex items-start bg-green-main pl-4 px-2 rounded-ee-[20px]"
                    >
                        <span className='sm:text-4xl text-2xl min-w-12'>{index+1}</span>
                        <span>{result.question}</span>
                    </div>
                    <p 
                    className="dark:text-white text-black sm:pl-20 px-2 pt-2"
                    >
                        {`Ответ: ${result.answer}`}
                    </p>
                </div>
            )
        }
        
    });

    return <>
        <p 
        className='flex justify-between 
        sm:text-5xl text-3xl 
        sm:px-[100px] px-4 py-10
        rounded-ss-[40px] border-b-[16px] 
        dark:border-[#EFEFEF] border-black 
        dark:text-black text-white 
        dark:bg-white bg-dark-main'>
            <span>Результат</span> 
            {` ${score}/${listResults.length} `}
        </p>
        <div className='sm:pl-[150px] text-black'>
            {listResults}
        </div>
    </>
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired
}

export default Results;