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
                <div className="text-center flex flex-col">
                    <button className="mb-2
                    bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">Level 1</button>
                    <button className="mb-2
                    bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">Level 2</button>
                    <button className="mb-2
                    bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">Level 3</button>
                    <button className="mb-2
                    bg-red-600 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">Level 4</button>
                    <button className="mb-2
                    bg-red-700 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">Level 5</button>
                </div>
            </div>
        </>
    )
}

export default Levels;