import { FC } from "react";
import Text from "../atoms/Text";

type FinalScoreProps = {
  score: number;
  maxScore: number;
};

const FinalScore: FC<FinalScoreProps> = ({
  score,
  maxScore,
}: FinalScoreProps) => {
  return (
    <div className="btn py-5 bg-secondary text-center">
      <Text as="h4" className="text-[1.4rem]">
        Your score is: {score}/{maxScore}
      </Text>
    </div>
  );
};

export default FinalScore;
