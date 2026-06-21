import { useState } from 'react'
import Levels from "./components/Levels.tsx"
import Endless from "./components/Endless.tsx"
import Home from "./components/Home.tsx"

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {currentPage === "home" && <Home onNavigate={setCurrentPage}/>}
      {currentPage === "levels" && <Levels onNavigate={setCurrentPage}/>}
      {currentPage === "endless" && <Endless onNavigate={setCurrentPage}/>}
    </>
  )
}

export default App
