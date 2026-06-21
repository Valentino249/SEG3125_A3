import LevelList from "./LevelList.tsx"
import Level1 from "./Level1.tsx"
import Level2 from "./Level2.tsx"
import Level3 from "./Level3.tsx"
import Level4 from "./Level4.tsx"
import Level5 from "./Level5.tsx"
import { useState } from "react"
import { FaHome } from "react-icons/fa";


  interface LevelsProps {
  onNavigate: (page: string) => void;
}


function Levels({ onNavigate }: LevelsProps) {

  
const [selectedLevel, setSelectedLevel] = useState<number | null>(0);

function renderLevel() {
    switch (selectedLevel) {
      case 0:
        return <LevelList onSelectLevel={setSelectedLevel}/>
      case 1:
        return <Level1 />;
    case 2:
        return <Level2 />;
    case 3:
        return <Level3 />;
    case 4:
        return <Level4 />;
    case 5:
        return <Level5 />;
      default:
        return <p>Select a level to begin.</p>;
    }
  }
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="ml-3 mr-3">
                <p className="italic text-olive-100 font-bold text-9xl mt-10">Levels</p>
                <button className="mt-2 mb-2 bg-gray-700 hover:bg-blue-700 text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                onClick={() => onNavigate("home")}>Home
                <FaHome/>
                </button>

                {(selectedLevel != 0) && <button className="mt-2 mb-2 bg-gray-700 hover:bg-blue-700 text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                onClick={() => setSelectedLevel(0)}>Levels</button>}

                <div className="mt-2">
                    {renderLevel()}
                </div>
                </div>
            </div>
        </>
    )
}

export default Levels;