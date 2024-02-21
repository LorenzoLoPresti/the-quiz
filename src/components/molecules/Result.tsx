import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";

type ResultProps = PropsWithChildren<{
  numQuestion: number;
  userAnswer: string;
  correctAnswer: string;
}>;

type SpanProps = PropsWithChildren<{
  isCorrect?: boolean;
}>;

const Result: FC<ResultProps> & { Span: React.FC<SpanProps> } = ({
  numQuestion,
  correctAnswer,
  userAnswer,
  children,
}) => {
  const userAnswerIsCorrect = correctAnswer === userAnswer;
  return (
    <li>
      <Text isBold styledAs="h5">
        {numQuestion}. {children}
      </Text>
      <div className="mt-2">
        <Text styledAs="h6">
          Your answer:
          <Result.Span isCorrect={userAnswerIsCorrect}>
            {userAnswer}
          </Result.Span>
        </Text>
        {!userAnswerIsCorrect && (
          <Text styledAs="h6">
            Correct answer:
            <Result.Span isCorrect>{userAnswer}</Result.Span>
          </Text>
        )}
      </div>
    </li>
  );
};

export const Span: FC<SpanProps> = ({ isCorrect, children }) => {
  const classNames = `${isCorrect ? "text-secondary" : "text-danger"} mx-2`;

  return <span className={classNames}>{children}</span>;
};

Result.Span = Span;

export default Result;
