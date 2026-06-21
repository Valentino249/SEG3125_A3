import { FaFire } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";


interface Home2Props {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: Home2Props) {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center bg-gray-900">
                <div className="ml-3 mr-3">
                <p className="text-2xl text-olive-100 font-extralight italic">Welcome to</p>
                <p className="italic font-bold text-olive-100 text-9xl mt-2 mb-6">Matching Market</p>
                <button className="mt-2 mb-2 bg-gray-700 hover:bg-blue-700 text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                onClick={() => onNavigate("levels")}>Levels
                <PiStepsFill/>
                </button>
                <button
                className="mt-2 mb-2 bg-gray-700 hover:bg-purple-800 text-white font-bold py-2 w-full px-8 shadow-xl/30 flex items-center gap-2"
                onClick={() => onNavigate("endless")}
                >
                Endless
                <FaFire />
                </button>
                </div>
            </div>
        </>
    )
}

export default Home;