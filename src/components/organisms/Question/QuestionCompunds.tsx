import { FC, PropsWithChildren } from "react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { QuestionHeadingProps, QuestionScoreProps } from "./QuestionTypes";

// Layout di Question
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const classNames =
    "max-w-[600px] flex flex-col items-center text-center pt-5 animate-slide-up";

  return <div className={classNames}>{children}</div>;
};

// Header di Question
export const Header: FC<QuestionHeadingProps> = ({
  numCurrentQuestion,
  numOfQuestions,
  children,
}: QuestionHeadingProps) => {
  return (
    <>
      <Text as="h4" isBold>
        {children}
      </Text>

      {/* Numero domanda */}
      <div className="w-full text-end pt-3 px-3">
        <Text>
          {numCurrentQuestion}/{numOfQuestions}
        </Text>
      </div>
    </>
  );
};

// Body di Question
export const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-start w-full py-6 px-3 space-y-3">{children}</div>
  );
};

// Answers di Question
export const Answers: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

// Score di Question
export const Score: FC<QuestionScoreProps> = ({
  score,
  disableButton,
  handleNextQuestion,
  handleSubmitAnswer,
  submittedAnswer,
}: QuestionScoreProps) => {
  return (
    <div className="flex justify-between items-center pt-3">
      <Text>
        Your score: <b>{score}</b>
      </Text>
      {!submittedAnswer ? (
        <Button onClick={handleSubmitAnswer} disabled={disableButton}>
          Sumbit answer
        </Button>
      ) : (
        <Button onClick={handleNextQuestion}>Next</Button>
      )}
    </div>
  );
};
