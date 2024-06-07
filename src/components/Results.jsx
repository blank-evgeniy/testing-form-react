import PropTypes from 'prop-types';

const Results = ({results, score}) => {
    const listResults = [];

    results.forEach( (result, index) => {
        if (result.rightAnswer !== result.answer ) {
            listResults.push(
            <div className="text-xl pb-10" key={index}>
                    <div className="flex items-end bg-red-main pl-4 rounded-ee-[20px]"><span className='text-4xl  min-w-12'>{index+1}</span><span>{result.question}</span></div>
                    <p className="text-[#cacaca] pl-20 pt-2">{`Ваш ответ: ${result.answer}`}</p>
                    <p className="text-white pl-20">{`Правильный ответ: ${result.rightAnswer}`}</p>
            </div>
        )} else {
            listResults.push(
                <div className="text-xl pb-10" key={index}>
                    <div className="flex items-end bg-green-main pl-4 rounded-ee-[20px]"><span className='text-4xl min-w-12'>{index+1}</span><span>{result.question}</span></div>
                    <p className="text-white pl-20 pt-2">{`Ответ: ${result.answer}`}</p>
                </div>
            )
        }
        
    });

    return <>
        <p className='flex justify-between text-5xl px-[100px] py-10 text-black bg-white rounded-ss-[40px] border-b-[16px] border-[#EFEFEF]'>
            <span>Результат</span> {` ${score}/${listResults.length} `}
        </p>
        <div className='pl-[150px] text-black'>
            {listResults}
        </div>
    </>
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired
}

export default Results;