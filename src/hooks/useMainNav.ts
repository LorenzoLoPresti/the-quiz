import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

// Hook per evitare codice riutilizzato
const useMainNav = () => {
  const { appState } = useAppSelector((state) => state.quiz);

  const navigate = useNavigate();

  return { appState, navigate };
};

export default useMainNav;
