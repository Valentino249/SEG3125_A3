
type LevelListProps = {
  onSelectLevel: (level: number) => void;
};

function LevelList({ onSelectLevel }: LevelListProps) {
    return (
        <>
            <div className="text-center flex flex-col">
                    <button className="mb-2
                    bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onSelectLevel(1)}>Level 1</button>
                    <button className="mb-2
                    bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onSelectLevel(2)}>Level 2</button>
                    <button className="mb-2
                    bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onSelectLevel(3)}>Level 3</button>
                    <button className="mb-2
                    bg-red-600 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onSelectLevel(4)}>Level 4</button>
                    <button className="mb-2
                    bg-red-700 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onSelectLevel(5)}>Level 5</button>

                    
                </div>
        </>
    )
}

export default LevelList;