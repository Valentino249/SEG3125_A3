import { FaFire } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";


interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-2xl font-extralight">Welcome to</p>
                <p className="italic font-bold text-9xl mt-2 mb-6">Matching Market</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded flex items-center gap-2"
                onClick={() => onNavigate("levels")}>Levels
                <PiStepsFill/>
                </button>
                <button
                className="mt-2 mb-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-8 rounded flex items-center gap-2"
                onClick={() => onNavigate("endless")}
                >
                Endless
                <FaFire />
                </button>
            </div>
        </>
    )
}

export default Home;