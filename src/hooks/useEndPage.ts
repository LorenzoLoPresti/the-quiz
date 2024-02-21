import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { POINT_PER_QUESTION } from "../data";
import { initialSettings } from "../store/quizSlice";
import { saveGame } from "../store/userSlice";
import toast from "react-hot-toast";

interface UseEndPage {
  score: number;
  userRecord: number;
  gameSaved: boolean;
  maxScore: number;
  handleRestart: () => void;
  handleSaveGame: () => void;
}

export function useEndPage(): UseEndPage {
  const { score, arrOfQuestions } = useAppSelector((state) => state.quiz);
  const { userRecord } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [gameSaved, setGameSaved] = useState(false);

  const maxScore = arrOfQuestions.length * POINT_PER_QUESTION;

  function handleRestart(): void {
    dispatch(initialSettings());
  }

  function handleSaveGame(): void {
    dispatch(saveGame(score));
    setGameSaved(true);
    toast.success("Game Saved");
  }

  return {
    score,
    userRecord,
    gameSaved,
    maxScore,
    handleRestart,
    handleSaveGame,
  };
}
