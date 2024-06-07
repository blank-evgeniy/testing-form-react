import Header from "./components/Header"
import Form from "./components/Form"
import Results from "./components/Results"
import Intro from "./components/Intro"
import { useState } from "react";

function App() {
  const [status, setStatus] = useState('intro');
  const [results, setResults] = useState(new Array);
  const [score, setScore] = useState(0);

  function updateStatus(newStatus) {
    setStatus(newStatus)
  }

  function updateResults(res, right) {
    setResults(results.concat(res));
    setScore(right ? score+1 : score);
  }

  return (
    <div className="bg-white dark:bg-dark-main min-h-[100vh] transition-colors duration-300 ease-in">
      <div className="max-w-[1200px] my-0 mx-auto">
        <Header />
        {status === "intro" && <Intro onUpdateStatus={updateStatus}/>}
        {status === "testing" && <Form onUpdateStatus={updateStatus} onAnswer={updateResults}/>}
        {status === "success" && <Results score={score} results={results}/>}
      </div>
    </div>
  )
}

export default App
