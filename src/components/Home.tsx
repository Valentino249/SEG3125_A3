
interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-2xl font-extralight">Welcome to</p>
                <p className="italic font-bold text-9xl mt-2 mb-6">Matching Market</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                onClick={() => onNavigate("levels")}>Levels</button>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                onClick={() => onNavigate("endless")}>Endless</button>
            </div>
        </>
    )
}

export default Home;