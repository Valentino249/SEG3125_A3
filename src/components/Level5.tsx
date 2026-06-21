import { useEffect, useMemo, useState } from "react";
import "../index.css";

type Card = {
  id: number;
  pairId: string;
  isMatched: boolean;
};

const SYMBOLS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function createDeck(): Card[] {
  // Create pairs: each symbol appears twice
  const deck = SYMBOLS.flatMap((symbol, index) => [
    {
      id: index * 2,
      pairId: symbol,
      isMatched: false,
    },
    {
      id: index * 2 + 1,
      pairId: symbol,
      isMatched: false,
    },
  ]);

  return shuffleArray(deck);
}

export default function Level1() {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);

  // Initialize game on first render
  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    setCards(createDeck());
    setSelectedCards([]);
    setIsChecking(false);
    setMoves(0);
  }

  function handleCardClick(cardId: number) {
    if (isChecking) return;

    const clickedCard = cards.find((card) => card.id === cardId);
    if (!clickedCard) return;

    // Ignore clicks on already matched cards
    if (clickedCard.isMatched) return;

    // Ignore clicking the same face-up selected card again
    if (selectedCards.includes(cardId)) return;

    // Prevent selecting more than 2 cards
    if (selectedCards.length === 2) return;

    setSelectedCards((prev) => [...prev, cardId]);
  }

  useEffect(() => {
    if (selectedCards.length !== 2) return;

    const [firstId, secondId] = selectedCards;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (!firstCard || !secondCard) return;

    setIsChecking(true);
    setMoves((prev) => prev + 1);

    const isMatch = firstCard.pairId === secondCard.pairId;

    if (isMatch) {
      // Mark both cards as matched
      const timeout = setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          )
        );

        setSelectedCards([]);
        setIsChecking(false);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      // Flip back by clearing selected cards after a delay
      const timeout = setTimeout(() => {
        setSelectedCards([]);
        setIsChecking(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [selectedCards, cards]);

  const matchedCount = useMemo(
    () => cards.filter((card) => card.isMatched).length,
    [cards]
  );

  const hasWon = cards.length > 0 && matchedCount === cards.length;

  function isCardFaceUp(card: Card) {
    return card.isMatched || selectedCards.includes(card.id);
  }

  return (
    <div className="memory-game">

      <div className="game-info">
        <p className="text-olive-100">
          <strong>Moves:</strong> {moves}
        </p>
        <button onClick={resetGame}>Restart Game</button>
      </div>

      {hasWon && (
        <div className="win-banner">
          You matched all the cards in {moves} moves!
        </div>
      )}

      <div className="grid-6">
        {cards.map((card) => {
          const faceUp = isCardFaceUp(card);

          return (
            <button
              key={card.id}
              className={`card ${faceUp ? "flipped" : ""} ${
                card.isMatched ? "matched" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || isChecking}
            >
              <span className="card-inner">
                {faceUp ? card.pairId : "?"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}