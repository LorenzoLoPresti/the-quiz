import { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Result from "../molecules/Result";
import ResultList from "../organisms/ResultList";
import useMainNav from "../../hooks/useMainNav";
import Text from "../atoms/Text";
import { POINT_PER_QUESTION } from "../../data";

interface Result {
  id: number;
  question: string;
  correctAnswer: string;
  userAnser: string;
  numOfQuestion: number;
}

const ResultPage: FC = () => {
  const { arrOfQuestions, userAnswers, score } = useAppSelector(
    (state) => state.quiz
  );
  const { appState, navigate } = useMainNav();

  useEffect(
    function () {
      if (appState !== "end") navigate("/");
    },
    [appState, navigate]
  );

  const questions: Result[] = arrOfQuestions.map(
    ({ question, correctAnswer, id }, i) => ({
      id,
      question,
      correctAnswer,
      userAnser: userAnswers[i],
      numOfQuestion: i + 1,
    })
  );

  const maxScore = arrOfQuestions.length * POINT_PER_QUESTION;

  return (
    <div className="space-y-7 pb-5 mt-24">
      <Text
        styledAs="h5"
        className="hover:text-secondary cursor-pointer"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </Text>
      <ResultList>
        {questions.map(
          ({ id, question, correctAnswer, userAnser, numOfQuestion }) => (
            <Result
              key={id + question}
              numQuestion={numOfQuestion}
              correctAnswer={correctAnswer}
              userAnswer={userAnser}
            >
              {question}
            </Result>
          )
        )}
      </ResultList>
      <Text className="text-end" styledAs="h6">
        Your score:{" "}
        <b>
          {score}/{maxScore}
        </b>
      </Text>
    </div>
  );
};
export default ResultPage;
