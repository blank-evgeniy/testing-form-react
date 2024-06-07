import Header from "./components/Header"
import Form from "./components/Form"
import Results from "./components/Results"
import Intro from "./components/Intro"
import Footer from "./components/Footer"
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
    <div className="bg-white dark:bg-dark-main transition-colors duration-300 ease-in">
      <Header/>
      <main className="max-w-[1200px] my-0 mx-auto">
        {status === "intro" && <Intro onUpdateStatus={updateStatus}/>}
        {status === "testing" && <Form onUpdateStatus={updateStatus} onAnswer={updateResults}/>}
        {status === "success" && <Results score={score} results={results}/>}
      </main>
      <Footer />
    </div>
  )
}

export default App
