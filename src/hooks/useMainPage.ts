import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { initialSettings, startQuiz } from "../store/quizSlice";
import { useEffect } from "react";
import { arrOfQuestions } from "../data";

export function useMainPage() {
  const { topic } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const numOfQuestions = arrOfQuestions.length;

  function handleStartQuiz(): void {
    dispatch(startQuiz());
    navigate("/quiz");
  }

  // settaggi iniziali del gioco al mount(dispatch non cambia)
  useEffect(
    function () {
      dispatch(initialSettings());
    },
    [dispatch]
  );

  const headingText = "Welcome to the Quiz";
  const paragraphText = `${numOfQuestions} questions to test your ${topic} mastery`;

  return { handleStartQuiz, headingText, paragraphText, numOfQuestions };
}
