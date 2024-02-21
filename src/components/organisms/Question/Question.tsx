import { FC, useEffect } from "react";
import { QuestionType } from "../../../data";

import { Answers, Body, Header, Layout, Score } from "./QuestionCompunds";
import Answer from "../../molecules/Answer";

import useGameLogic from "../../../hooks/useGameLogic";
import useMainNav from "../../../hooks/useMainNav";
import { useAppSelector } from "../../../hooks/reduxHooks";

import { QuestionCompoundProps } from "./QuestionTypes";

type QuestionProps = {
  questionObj: QuestionType;
};

// Componente compound

// Question riceverà una domanda in base all'index
// L'index è una proprietà del reducer che aumenta di 1 ogni volta che l'utente
// passa alla domanda successiva
const Question: FC<QuestionProps> & QuestionCompoundProps = ({
  questionObj,
}) => {
  const { score } = useAppSelector((state) => state.quiz);
  // estraggo id, domanda e risposte
  const { id, question, answers } = questionObj;

  // Logica di Gioco
  const {
    selected, // risposta selezionata
    submittedAnswer, // risposta effettuata
    numOfQuestions, // Numero di domande totale
    numCurrentQuestion, // Numero domanda corrente
    handleNextQuestion, // vado alla prossima domanda
    handleSubmitAnswer, // effettuo la risposta
    handleSelected, // seleziono la risposta
  } = useGameLogic();

  // Riporta alla main page se lo stato dell'applicazione non è "active"
  const { appState, navigate } = useMainNav();
  useEffect(
    function () {
      if (appState !== "active") navigate("/");
    },
    [appState, navigate]
  );

  // Il bottone per rispondere è disabilitato se non vi sono risposte selezionate
  const disableButton = !(!submittedAnswer && selected !== null);

  return (
    // Domanda
    <Question.Layout>
      <Question.Header
        numCurrentQuestion={numCurrentQuestion}
        numOfQuestions={numOfQuestions}
      >
        {question}
      </Question.Header>

      <Question.Body>
        {/* Risponste */}
        <Question.Answers>
          {answers.map((answer, i) => (
            <Answer
              key={i + id}
              id={i}
              selected={selected}
              submittedAnswer={submittedAnswer}
              onClick={handleSelected}
            >
              {answer}
            </Answer>
          ))}
        </Question.Answers>

        <Question.Score
          disableButton={disableButton}
          score={score}
          submittedAnswer={submittedAnswer}
          handleNextQuestion={handleNextQuestion}
          handleSubmitAnswer={handleSubmitAnswer}
        />
      </Question.Body>
    </Question.Layout>
  );
};

Question.Layout = Layout;
Question.Header = Header;
Question.Answers = Answers;
Question.Body = Body;
Question.Score = Score;

export default Question;
