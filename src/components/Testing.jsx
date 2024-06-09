import Form from "./Form"
import Results from "./Results"

import { useState } from "react";

function App() {
    const [results, setResults] = useState(new Array);
    const [score, setScore] = useState(0);
    const [isFinish, setIsFinish] = useState(false);

    function updateResults(res, right, isFinish) {
      setResults(results.concat(res));
      setScore(right ? score+1 : score);
      setIsFinish(isFinish);
    }
  
    return (
      <div>
        {!isFinish?
        <Form onAnswer={updateResults}/> :
        <Results score={score} results={results}/>}
      </div>
    )
  }
  
  export default App
  