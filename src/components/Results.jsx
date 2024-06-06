import PropTypes from 'prop-types';

const Results = ({results, score}) => {
    const listResults = [];

    console.log(results);
    results.forEach( (result, index) => {
        if (result.rightAnswer !== result.answer ) {
            listResults.push(
            <div className="block w-1/2" key={index}>
                    <p>{result.question}</p>
                    <p className="text-red-500">{`Ваш ответ: ${result.answer}`}</p>
                    <p className="text-green-500">{`Правильный ответ: ${result.rightAnswer}`}</p>
            </div>
        )} else {
            listResults.push(
                <div className="block w-1/2" key={index}>
                    <p>{result.question}</p>
                    <p className="text-green-500">{`Ваш ответ: ${result.answer}`}</p>
                </div>
            )
        }
        
    });

    return <>
        <p>Результат: {` ${score}/${listResults.length} `}</p>
        {listResults}
    </>
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    score: PropTypes.string.isRequired
}

export default Results;