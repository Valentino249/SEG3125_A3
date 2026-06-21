import Board from "./Board.tsx"
import { FaHome } from "react-icons/fa";


interface EndlessProps {
  onNavigate: (page: string) => void;
}

function Endless({ onNavigate }: EndlessProps) {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-center font-bold text-2xl mt-10">Endless</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2"
                onClick={() => onNavigate("home")}>Home
                <FaHome />
                </button>
                <Board />
            </div>
        </>
    )
}

export default Endless;