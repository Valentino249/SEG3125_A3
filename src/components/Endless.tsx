import Board from "./Board.tsx"
import { FaHome } from "react-icons/fa";


interface EndlessProps {
  onNavigate: (page: string) => void;
}

function Endless({ onNavigate }: EndlessProps) {
    return (
        <>
            <div className="flex flex-col">
                <div className="ml-3 mr-3">
                    <p className="text-olive-100 italic font-bold text-9xl mt-10">Endless</p>
                    <button className="mt-2 mb-2 bg-gray-700 hover:bg-blue-700 text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onNavigate("home")}>Home
                    <FaHome/>
                    </button>
                    <Board />
                </div>
            </div>
        </>
    )
}

export default Endless;