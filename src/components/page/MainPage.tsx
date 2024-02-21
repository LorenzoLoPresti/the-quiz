import { FC } from "react";

import Text from "../atoms/Text";
import Button from "../atoms/Button";
import TextBlock from "../molecules/TextBlock";

import { useMainPage } from "../../hooks/useMainPage";

const MainPage: FC = () => {
  const { handleStartQuiz, headingText, paragraphText, numOfQuestions } =
    useMainPage();

  if (!numOfQuestions) return <Text as="h2">No questions 😥</Text>;

  return (
    <div className="flex flex-col items-center space-y-8  animate-slide-up">
      <div className="space-y-3 text-center">
        <TextBlock headingAs="h2" paragraphAs="h4" headingText={headingText}>
          {paragraphText}
        </TextBlock>
      </div>

      <Button variant="primary" onClick={handleStartQuiz}>
        Start Quiz
      </Button>
    </div>
  );
};

export default MainPage;
