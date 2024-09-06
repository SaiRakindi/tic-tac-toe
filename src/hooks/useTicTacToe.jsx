import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [];

  const calculateWinner = () => {};

  const handleClick = (index) => {
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {};

  const resetGame = () => {};

  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
