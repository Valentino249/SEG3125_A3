import LevelList from "./LevelList.tsx"
import Level1 from "./Level1.tsx"
import { useState } from "react"

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
      default:
        return <p>Select a level to begin.</p>;
    }
  }
    return (
        <>
            <div className="flex flex-col">
                <p className="text-center">Levels</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onNavigate("home")}>Home</button>

                {(selectedLevel != 0) && <button className="mt-2 mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedLevel(0)}>Levels</button>}

                <div className="mt-2">
                    {renderLevel()}
                </div>
            </div>
        </>
    )
}

export default Levels;