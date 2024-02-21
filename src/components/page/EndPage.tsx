import Button from "../atoms/Button";

import useMainNav from "../../hooks/useMainNav";
import { useEffect } from "react";
import { useEndPage } from "../../hooks/useEndPage";
import ButtonsContainer from "../organisms/ButtonsContainer";
import FinalScore from "../molecules/FinalScore";

const EndPage = () => {
  const {
    score,
    gameSaved,
    handleRestart,
    handleSaveGame,
    maxScore,
    userRecord,
  } = useEndPage();

  // Ritorna alla main page se il quiz
  // non è finito
  const { appState, navigate } = useMainNav();
  useEffect(
    function () {
      if (appState !== "end") navigate("/");
    },
    [appState, navigate]
  );

  return (
    <div className="animate-slide-up space-y-8">
      <FinalScore score={score} maxScore={maxScore} />

      <ButtonsContainer>
        <Button onClick={handleRestart}>Restart</Button>
        {!gameSaved && score > userRecord && (
          <Button onClick={handleSaveGame}>Save game</Button>
        )}
        <Button onClick={() => navigate("/result")}>Result</Button>
      </ButtonsContainer>
    </div>
  );
};

export default EndPage;
