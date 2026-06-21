
type LevelListProps = {
  onSelectLevel: (level: number) => void;
};

function LevelList({ onSelectLevel }: LevelListProps) {
    return (
        <>
            <div className="text-center flex flex-col">
                    <button className="mb-2
                    bg-indigo-300 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onSelectLevel(1)}>Level 1</button>
                    <button className="mb-2
                    bg-indigo-400 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onSelectLevel(2)}>Level 2</button>
                    <button className="mb-2
                    bg-indigo-500 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onSelectLevel(3)}>Level 3</button>
                    <button className="mb-2
                    bg-indigo-600 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onSelectLevel(4)}>Level 4</button>
                    <button className="mb-2
                    bg-indigo-700 hover:bg-indigo-200 text-white font-bold py-2 px-4 rounded text-white w-full font-bold py-2 px-10 shadow-xl/30 flex items-center gap-2"
                    onClick={() => onSelectLevel(5)}>Level 5</button>

                    
                </div>
        </>
    )
}

export default LevelList;