import { PropsWithChildren } from "react";

// Tipi props di Question.Heading
export type QuestionHeadingProps = PropsWithChildren<{
  numCurrentQuestion: number;
  numOfQuestions: number;
}>;

// Tipi props di Question.Score
export type QuestionScoreProps = {
  score: number;
  disableButton: boolean;
  submittedAnswer: string;
  handleSubmitAnswer(): void;
  handleNextQuestion(): void;
};

// Tipi dei componenti compound proprietà di Question
export type QuestionCompoundProps = {
  Layout: React.FC<PropsWithChildren>;
  Header: React.FC<QuestionHeadingProps>;
  Body: React.FC<PropsWithChildren>;
  Answers: React.FC<PropsWithChildren>;
  Score: React.FC<QuestionScoreProps>;
};
