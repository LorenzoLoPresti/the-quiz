import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { nextQuestion, submitAnswer } from "../store/quizSlice";
import toast from "react-hot-toast";

function useGameLogic() {
  const { arrOfQuestions, index } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<number | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [submittedAnswer, setSubmittedAnswer] = useState<string>("");

  const { correctAnswer } = arrOfQuestions[index];
  const numOfQuestions = arrOfQuestions.length;
  const numCurrentQuestion = index + 1;

  // Seleziono la risposta. Guard se la risposta è già stata data
  function handleSelected(id: number, currentAnswer: string): void {
    if (submittedAnswer) return;

    if (selected === id) {
      setSelected(null);
      setCurrentAnswer("");
      return;
    }

    setSelected(id);
    setCurrentAnswer(currentAnswer);
  }

  // Do la risposta
  function handleSubmitAnswer(): void {
    setSubmittedAnswer(currentAnswer);
    dispatch(submitAnswer(currentAnswer));

    if (correctAnswer === currentAnswer) {
      toast.success("Correct Answer!");
    } else {
      toast.error("Wrong Answer");
    }
  }

  // Domanda successiva
  function handleNextQuestion(): void {
    dispatch(nextQuestion());
    setCurrentAnswer("");
    setSelected(null);
    setSubmittedAnswer("");
  }
  return {
    selected,
    submittedAnswer,
    numOfQuestions,
    numCurrentQuestion,
    handleSubmitAnswer,
    handleNextQuestion,
    handleSelected,
  };
}

export default useGameLogic;
