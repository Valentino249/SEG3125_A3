import { useState } from 'react'
import Levels from "./components/Levels.tsx"
import Endless from "./components/Endless.tsx"
import Home2 from "./components/Home2.tsx"

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
    <div className="bg-gray-900">
      {currentPage === "home" && <Home2 onNavigate={setCurrentPage}/>}
      {currentPage === "levels" && <Levels onNavigate={setCurrentPage}/>}
      {currentPage === "endless" && <Endless onNavigate={setCurrentPage}/>}

    </div>
    </>
  )
}

export default App
