import Board from "./Board.tsx"

interface LevelsProps {
  onNavigate: (page: string) => void;
}

function Levels({ onNavigate }: LevelsProps) {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-center">Levels</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onNavigate("home")}>Home</button>
                <Board/>
            </div>
        </>
    )
}

export default Levels;