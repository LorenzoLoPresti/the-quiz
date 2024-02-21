import { POINT_PER_QUESTION, arrOfQuestions } from "../../data";
import { useAppSelector } from "../../hooks/reduxHooks";
import Text from "../atoms/Text";

const maxScore = arrOfQuestions.length * POINT_PER_QUESTION;

const Footer = () => {
  // Record personale dell'utente salvato nel localStorage
  const { userRecord } = useAppSelector((state) => state.user);

  return (
    <footer className="mt-5 h-20 flex items-center justify-center">
      <Text as="h5">
        Personal Record:{" "}
        <b>
          {userRecord}/{maxScore}
        </b>
      </Text>
    </footer>
  );
};

export default Footer;
