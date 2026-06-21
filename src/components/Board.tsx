
type Card = {
  id: number;        
  pairId: string;    
  isFlipped: boolean;
  isMatched: boolean;
};

const cards: Card[] = [
  { id: 1, pairId: 'A', isFlipped: false, isMatched: false },
  { id: 2, pairId: 'C', isFlipped: false, isMatched: false },
  { id: 3, pairId: 'B', isFlipped: false, isMatched: false },
  { id: 4, pairId: 'A', isFlipped: false, isMatched: false },
  { id: 5, pairId: 'B', isFlipped: false, isMatched: false },
  { id: 6, pairId: 'C', isFlipped: false, isMatched: false },
]

function Board() {
    return (
        <>
            
        </>
    )
}

export default Board;