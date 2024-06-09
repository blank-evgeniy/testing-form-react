import { Outlet } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div 
    className="bg-white dark:bg-dark-main 
    transition-colors duration-300 ease-in"
    >
      <Header/>
      <main className="max-w-[1200px] my-0 mx-auto">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
