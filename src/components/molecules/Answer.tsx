import { FC, PropsWithChildren } from "react";
import Text from "../atoms/Text";
import { useAppSelector } from "../../hooks/reduxHooks";

// Props di answer: selected indica l'id della risposta selezionata
// (l'indice nell'array di risposte), id indica l'id della risposta attuale
// submittedAnswer indica la risposta confermata dell'utente
// onClick è la funzione che permette di selezionare e deselezionare la risposta (vedi custom hook useGameLogic)
type AnswerProps = PropsWithChildren<{
  selected: number | null;
  id: number;
  submittedAnswer: string;
  onClick(id: number, text: React.ReactNode): void;
}>;

const Answer: FC<AnswerProps> = ({
  selected,
  id,
  submittedAnswer,
  onClick,
  children,
}: AnswerProps) => {
  // Seleziono la risposta corretta della domanda corrente
  const { arrOfQuestions, index } = useAppSelector((state) => state.quiz);
  const correctAnswer = arrOfQuestions[index].correctAnswer;

  function handleOnClick(): void {
    onClick(id, children);
  }

  // Se l'id della risposta selezionata corrisponde con l'id della risposta corrente
  // cambio lo stile
  const active = selected === id;

  // Determina se il feedback che riceverà l'utente quando risponde suggerisce una
  // risposta corretta o un errore
  const feedback =
    submittedAnswer === correctAnswer && children === correctAnswer;

  // Se la risposta (sumbittedAnswer) è stata data ed è corretta: feedback success, altrimenti feedback danger
  // Se la risposta non è stata data: stile che cambia se l'utente ha selezionato (active) o no una risposta
  const feedbackStyle = submittedAnswer
    ? `${feedback ? "bg-secondary translate-x-3" : ""} ${
        !feedback && active ? "bg-danger translate-x-2 border-primary" : ""
      }`
    : `${
        active
          ? "bg-secondary translate-x-4"
          : "opacity-90 hover:bg-secondary hover:translate-x-2 hover:opacity-100"
      }`;

  const classNames = `${feedbackStyle} p-x3 py-5 cursor-pointer btn custom-animate-bounce`;

  return (
    <div className={`${classNames} `} onClick={handleOnClick}>
      <Text>{children}</Text>
    </div>
  );
};
export default Answer;
