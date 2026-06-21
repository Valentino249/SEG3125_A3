
interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
    return (
        <>
            <div className="items-center flex flex-col">
                <p>Welcome</p>
                <p>To Matching Market</p>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onNavigate("levels")}>Levels</button>
                <button className="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onNavigate("endless")}>Endless</button>
            </div>
        </>
    )
}

export default Home;